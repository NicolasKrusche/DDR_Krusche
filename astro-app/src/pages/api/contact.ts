import type { APIRoute } from 'astro';

export const prerender = false;

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

function validate(data: ContactForm): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Bitte geben Sie Ihren Namen ein (mind. 2 Zeichen).';
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
  }
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Bitte geben Sie eine Nachricht ein (mind. 10 Zeichen).';
  }

  return errors;
}

export const POST: APIRoute = async ({ request }) => {
  const contentType = request.headers.get('content-type') || '';
  let data: ContactForm;

  if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
    const formData = await request.formData();
    data = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      phone: formData.get('phone')?.toString() || '',
      message: formData.get('message')?.toString() || '',
    };
  } else {
    data = await request.json();
  }

  const errors = validate(data);

  if (Object.keys(errors).length > 0) {
    // For form submissions (non-JS), redirect back with error
    if (contentType.includes('application/x-www-form-urlencoded')) {
      return new Response(null, {
        status: 302,
        headers: { Location: '/kontakt?error=validation' },
      });
    }
    return new Response(JSON.stringify({ success: false, errors }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // In production, send email via external service (e.g., AWS SES, SendGrid)
  // For now, log and return success
  console.log('Contact form submission:', data);

  // For form submissions (non-JS), redirect to success page
  if (contentType.includes('application/x-www-form-urlencoded')) {
    return new Response(null, {
      status: 302,
      headers: { Location: '/kontakt?success=1' },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
