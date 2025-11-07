export interface MailChimpSubscribeParams {
  email: string;
  name: string;
}

export async function subscribeToMailChimp({ email, name }: MailChimpSubscribeParams): Promise<{ success: boolean; message?: string }> {
  const MAILCHIMP_LIST_ID = process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID || '13947fb38f';
  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
  const MAILCHIMP_DC = process.env.NEXT_PUBLIC_MAILCHIMP_DC || 'us3';
  const MAILCHIMP_U = process.env.NEXT_PUBLIC_MAILCHIMP_U || '05d3ac8a604002ad12909fd35';

  if (!MAILCHIMP_API_KEY) {
    return { success: false, message: 'MailChimp API key not configured' };
  }

  try {
    const response = await fetch(
      `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
          merge_fields: {
            FNAME: name,
            MERGE1: name,
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      return { success: false, message: error.detail || 'Subscription failed' };
    }

    return { success: true };
  } catch (error) {
    console.error('MailChimp subscription error:', error);
    return { success: false, message: 'An error occurred while subscribing' };
  }
}

