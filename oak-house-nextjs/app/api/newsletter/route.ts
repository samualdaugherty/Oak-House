import { NextRequest, NextResponse } from 'next/server';
import { subscribeToMailChimp } from '@/lib/mailchimp';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    if (!email || !name) {
      return NextResponse.json(
        { success: false, message: 'Email and name are required' },
        { status: 400 }
      );
    }

    const result = await subscribeToMailChimp({ email, name });

    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while subscribing' },
      { status: 500 }
    );
  }
}

