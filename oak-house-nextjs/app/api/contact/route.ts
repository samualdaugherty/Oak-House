import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, website } = body;

    if (!name || !email || !phone || !website) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // For now, we'll use a simple email service
    // In production, you'd use Resend, SendGrid, or similar
    // This is a placeholder that logs the data
    console.log('Contact form submission:', { name, email, phone, website });

    // TODO: Replace with actual email service
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'hello@oakhouseco.com',
    //   to: 'samual.daugherty@gmail.com',
    //   subject: 'New Contact Form Submission',
    //   html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Website: ${website}</p>`,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while sending your message' },
      { status: 500 }
    );
  }
}

