# Oak House Co. - Next.js Website

This is the modernized version of the Oak House Co. website, converted from PHP/Bootstrap to Next.js 16 with React, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy environment variables:
```bash
cp .env.example .env.local
```

3. Fill in your environment variables in `.env.local`:
   - MailChimp API key (for newsletter subscriptions)
   - Email service API key (Resend or SendGrid for contact form)

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Import your repository in Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository

3. Add environment variables in Vercel dashboard:
   - `MAILCHIMP_API_KEY`
   - `RESEND_API_KEY` or `SENDGRID_API_KEY`
   - `NEXT_PUBLIC_MAILCHIMP_LIST_ID`
   - `NEXT_PUBLIC_MAILCHIMP_DC`
   - `NEXT_PUBLIC_MAILCHIMP_U`

4. Deploy!

## Project Structure

```
oak-house-nextjs/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── about/             # About page
│   ├── marketing-services/# Marketing services page
│   ├── web-services/      # Web services page
│   ├── process/           # Process page
│   ├── get-started/       # Contact form page
│   └── get/               # Download/blog pages
├── components/            # React components
├── lib/                   # Utility functions
├── public/                # Static assets
│   ├── img/              # Images
│   └── downloads/        # PDF downloads
└── app/globals.css        # Global styles with Tailwind
```

## Features

- ✅ Responsive design (mobile-first)
- ✅ Newsletter subscription (MailChimp)
- ✅ Contact form with email notifications
- ✅ Cookie-based user preferences
- ✅ Google Analytics integration
- ✅ SEO optimized with meta tags
- ✅ Modern React hooks (no jQuery)
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling

## Notes

- The contact form currently logs submissions to the console. You'll need to integrate an email service (Resend recommended) to send actual emails.
- MailChimp integration requires a valid API key.
- All images and PDFs are stored in the `public` directory.

## License

Copyright © The Oak House Companies LLC
