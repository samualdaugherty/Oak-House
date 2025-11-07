'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsletterCTA from '@/components/NewsletterCTA';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Link from 'next/link';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  website: string;
}

export default function GetStartedPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('There was an error submitting your form. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header currentPage="contact" />
      
      <header className="bg-[url('/img/header-bg.png')] bg-center bg-cover bg-no-repeat pb-40 pt-40 relative">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-[35px]">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl leading-tight text-[#f9f9f9] uppercase mt-2 relative">
              Get Started
            </h1>
            <p className="text-lg text-[#f9f9f9] mt-4">
              You're here because you see the value in marketing, and see the value in not having to manage it all yourself. Small business owners have to do so many things, it's time you let us do this for you.
            </p>
          </div>
        </div>
      </header>

      {!isSubmitted ? (
        <section id="the-form" className="bg-[url('/img/OH.svg')] bg-left bg-contain bg-no-repeat pt-32 pb-8">
          <div className="max-w-[1600px] mx-auto px-8 lg:px-[35px]">
            <div className="max-w-4xl mx-auto">
              <div className="max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl lg:text-5xl mb-4 text-black relative z-[1080]">
                  Start Here
                </h2>
                <p className="text-lg mb-6">
                  With just a few simple questions, we will have all of the information we need to begin pulling data about your site to discuss with you. Once you fill this out, you'll receive an email with some additional things to be thinking about. They're not sales stuff, but just tips on things you can do yourself to improve your marketing efforts.
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <div className="bg-black p-12 shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)]">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                      <label htmlFor="name" className="block text-[#f9f9f9] mb-2 text-lg">
                        Name
                      </label>
                      <input
                        {...register('name', { required: true })}
                        type="text"
                        id="name"
                        placeholder="Whatever your name is"
                        className="w-full bg-[#454545] border border-[#666] rounded-lg px-4 py-2 text-black focus:bg-[#f9f9f9] focus:border-white focus:outline-none"
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="email" className="block text-[#f9f9f9] mb-2 text-lg">
                        Email
                      </label>
                      <input
                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        type="email"
                        id="email"
                        placeholder="example@email.com"
                        className="w-full bg-[#454545] border border-[#666] rounded-lg px-4 py-2 text-black focus:bg-[#f9f9f9] focus:border-white focus:outline-none"
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="phone" className="block text-[#f9f9f9] mb-2 text-lg">
                        Phone
                      </label>
                      <input
                        {...register('phone', { required: true })}
                        type="tel"
                        id="phone"
                        placeholder="(xxx) xxx-xxxx"
                        className="w-full bg-[#454545] border border-[#666] rounded-lg px-4 py-2 text-black focus:bg-[#f9f9f9] focus:border-white focus:outline-none"
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="website" className="block text-[#f9f9f9] mb-2 text-lg">
                        What is our website?
                      </label>
                      <input
                        {...register('website', { required: true })}
                        type="text"
                        id="website"
                        placeholder="example.com"
                        className="w-full bg-[#454545] border border-[#666] rounded-lg px-4 py-2 text-black focus:bg-[#f9f9f9] focus:border-white focus:outline-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#ffc807] border border-black rounded-lg text-black uppercase font-montserrat py-2 px-8 hover:bg-black hover:text-[#ffc807] hover:border-[#ffc807] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'SENDING...' : 'GET STARTED'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section id="after-form" className="pt-20 pb-8">
          <div className="max-w-[1600px] mx-auto px-8 lg:px-[35px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 justify-between">
              <div className="lg:col-span-8">
                <h2 className="text-3xl lg:text-5xl mb-4 text-black relative z-[1080]">
                  Thank you so much!
                </h2>
                <p className="text-lg mb-6">
                  You did it! You took the first step, and the next step is ours. We'll get ahold of you soon to set up a meeting to discuss the results of your site analysis, your goals, your current marketing, and go over a bunch of questions we have.
                </p>
                <p className="text-lg">
                  In the mean time, there's a few thigns we wanted to pass along to you to get you thinking about marketing. The first is our guide to creating a{' '}
                  <Link href="/downloads/Built-to-Perform.pdf" target="_blank" className="yellow-link">
                    high-performing website
                  </Link>
                  . The second is how to{' '}
                  <Link href="/downloads/5-Proven-Ways-to-Drive-Traffic.pdf" target="_blank" className="yellow-link">
                    drive more traffic
                  </Link>
                  {' '}to your website. Download them, read them (they're short, I promise), and let us know if you have any questions.
                </p>
              </div>
              <div className="xl:col-span-3 lg:col-span-4">
                <div className="bg-black -mt-8 pt-8 pb-8 pl-4 pr-6 relative">
                  <div className="absolute bg-black h-full w-60 left-full top-0" />
                  <h4 className="text-2xl mb-4 text-[#f9f9f9] relative z-[1080]">RUN A TEST</h4>
                  <p className="text-[#f9f9f9] mb-6">
                    You can see a bit of what we will find by running the website grader, and seeing how you stack up. We'll go more in depth than this, but it's a fun way to get some early info.
                  </p>
                  <a
                    href="https://website.grader.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#ffc807] border border-black rounded-lg text-black uppercase font-montserrat py-2 px-8 text-center hover:bg-black hover:text-[#ffc807] hover:border-[#ffc807] transition-all duration-300"
                  >
                    TRY IT OUT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
      <NewsletterCTA />
    </>
  );
}

