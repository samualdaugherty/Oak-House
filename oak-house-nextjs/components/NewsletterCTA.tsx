'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { setCookie, hasHideTempCookie } from '@/lib/cookies';

interface NewsletterFormData {
  name: string;
  email: string;
}

export default function NewsletterCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<NewsletterFormData>();

  useEffect(() => {
    if (!hasHideTempCookie()) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setCookie('hasGuide', 'yes', { secure: true });
        setIsSubmitted(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
    }
  };

  const handleClose = () => {
    setCookie('hidetemp', 'yes', { secure: true, expires: 5 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
      <section
      id="subscriber-cta"
      className={`fixed bottom-0 w-[85vw] lg:w-full bg-black p-8 lg:p-[35px] lg:px-4 shadow-lg transition-all duration-500 z-[3500] ${isVisible ? 'right-0' : '-right-[120vw]'}`}
    >
      <button
        type="button"
        onClick={handleClose}
        className="absolute -top-12 -right-4 bg-black rounded-full w-8 h-8 opacity-100 text-white text-2xl leading-none hover:text-[#ffc807] focus:outline-none"
        aria-label="Close"
      >
        ×
      </button>

      {!isSubmitted ? (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-7/12">
            <h2 className="text-2xl lg:text-3xl font-montserrat font-bold text-[#f9f9f9] mb-4">
              Get Our Newsletter
            </h2>
            <p className="text-[#f9f9f9] mb-4">
              Our newsletter, <em>Lessons Learned</em>, is a behind-the-scenes look at how we work, with tips on how you can implement these strategies yourself.
            </p>
            <p className="text-[#f9f9f9] hidden lg:block">
              Sign up today, and we'll send you two insider-articles to jumpstart your marketing success: Built to Perform, which covers ways to make your website work for you instead of against you. And 5 Proven Ways to Drive Traffic, to start putting that website to work!
            </p>
          </div>
          <div className="lg:w-5/12">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="hidden" name="u" value="05d3ac8a604002ad12909fd35" />
              <input type="hidden" name="id" value="13947fb38f" />
              
              <div className="mb-4">
                <label htmlFor="newsletter-name" className="block text-[#f9f9f9] mb-2">
                  Name: <span className="text-[#ffc807]">*</span>
                </label>
                <input
                  {...register('name', { required: true })}
                  type="text"
                  id="newsletter-name"
                  name="FNAME"
                  placeholder="Ex: John"
                  className="w-full bg-[#454545] border border-[#666] rounded-lg px-4 py-2 text-black focus:bg-[#f9f9f9] focus:border-white focus:outline-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="newsletter-email" className="block text-[#f9f9f9] mb-2">
                  Email: <span className="text-[#ffc807]">*</span>
                </label>
                <input
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  type="email"
                  id="newsletter-email"
                  name="EMAIL"
                  placeholder="example@email.com"
                  className="w-full bg-[#454545] border border-[#666] rounded-lg px-4 py-2 text-black focus:bg-[#f9f9f9] focus:border-white focus:outline-none"
                  required
                />
              </div>

              <input
                type="text"
                name="b_05d3ac8a604002ad12909fd35_13947fb38f"
                tabIndex={-1}
                value=""
                className="absolute left-[-5000px]"
                aria-hidden="true"
              />

              <button
                type="submit"
                className="w-full bg-[#ffc807] border border-black rounded-lg text-black uppercase font-montserrat py-2 px-8 mt-8 hover:bg-black hover:text-[#ffc807] hover:border-[#ffc807] transition-all duration-300"
              >
                SUBSCRIBE
              </button>
              
              <p
                onClick={handleClose}
                className="text-center text-[#ffc807] mt-4 cursor-pointer text-sm"
              >
                No thanks, I'm good for now.
              </p>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-[#f9f9f9]">
            Thank you for subscribing to our newsletter! Check your inbox in a few minutes, and you'll see a couple of great articles to help get your started! Talk to you soon!
          </p>
        </div>
      )}
    </section>
  );
}

