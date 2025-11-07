'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsletterCTA from '@/components/NewsletterCTA';
import DownloadModal from '@/components/DownloadModal';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { hasGuideCookie } from '@/lib/cookies';
import type { Metadata } from 'next';

export default function TwoArticleDownloadPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasGuide, setHasGuide] = useState(false);

  useEffect(() => {
    setHasGuide(hasGuideCookie());
  }, []);

  return (
    <>
      <Header />
      
      <header className="bg-[url('/img/header-bg.png')] bg-center bg-cover bg-no-repeat pb-40 pt-40 relative">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-[35px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 justify-between">
            <div className="xl:w-8/12 lg:w-8/12">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl leading-tight text-[#f9f9f9] uppercase mt-2 relative">
                PERFORM HIGHER
              </h1>
              <p className="text-lg text-[#f9f9f9] mt-4">
                A website is only as good as the traffic you drive to it. But good traffic won't help if your website isn't built well. They have to work together, like a pitcher and a catcher. Our two guides will get you started in the right direction.
              </p>
            </div>
            <div className="xl:w-4/12 lg:w-4/12">
              <div className="bg-black -mt-8 pt-8 pb-8 pl-6 pr-4 relative">
                <div className="absolute bg-black h-full w-60 left-full top-0" />
                <h4 className="text-2xl mb-4 text-[#f9f9f9] relative z-[1080]">WORK WITH US</h4>
                <p className="text-[#f9f9f9] mb-6">Don't have the time to take all of this on for yourself? We can help get you started.</p>
                <Link href="/get-started" className="block w-full bg-[#ffc807] border border-black rounded-lg text-black uppercase font-montserrat py-2 px-8 text-center hover:bg-black hover:text-[#ffc807] hover:border-[#ffc807] transition-all duration-300">
                  GET STARTED
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-[url('/img/OH.svg')] bg-left bg-contain bg-no-repeat pt-32 pb-8">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-[35px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-9">
              <h2 className="text-3xl lg:text-5xl mb-4 text-black relative z-[1080]">
                Built to Perform
              </h2>
              <p className="text-lg mb-6">
                The first step to success in marketing is having a website that's built to perform. All the traffic in the world won't help you convert visitors to customers, unless your site is set up to take them on that journey.{' '}
                {hasGuide ? (
                  <Link href="/downloads/Built-to-Perform.pdf" target="_blank" className="yellow-link">
                    Download the PDF
                  </Link>
                ) : (
                  <button onClick={() => setIsModalOpen(true)} className="yellow-link">
                    Download the PDF
                  </button>
                )}
                {' '}and learn all the ways you can make your site perform at a higher level, and create a better experience for your customers. Then start driving traffic.
              </p>
            </div>
            <div className="lg:col-span-3">
              <div className="bg-black -mt-8 pt-8 pb-8 pl-6 pr-4 relative">
                <div className="absolute bg-black h-full w-60 left-full top-0" />
                <h4 className="text-2xl mb-4 text-[#f9f9f9] relative z-[1080]">DOWNLOAD</h4>
                <p className="text-[#f9f9f9] mb-6">Check out our guide on proven ways to create a high performing site. We don't keep it a secret, but we can help.</p>
                {hasGuide ? (
                  <a
                    href="/downloads/Built-to-Perform.pdf"
                    target="_blank"
                    className="block w-full bg-[#ffc807] border border-black rounded-lg text-black uppercase font-montserrat py-2 px-8 text-center hover:bg-black hover:text-[#ffc807] hover:border-[#ffc807] transition-all duration-300"
                  >
                    GET THE GUIDE
                  </a>
                ) : (
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="block w-full bg-[#ffc807] border border-black rounded-lg text-black uppercase font-montserrat py-2 px-8 hover:bg-black hover:text-[#ffc807] hover:border-[#ffc807] transition-all duration-300"
                  >
                    GET THE GUIDE
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-[35px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 justify-between">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="bg-black -mt-8 pt-8 pb-8 pl-4 pr-6 relative">
                <div className="absolute bg-black h-full w-60 -left-[239.2px] top-0" />
                <h4 className="text-2xl mb-4 text-[#f9f9f9] relative z-[1080]">TAKE THE NEXT STEP</h4>
                <p className="text-[#f9f9f9] mb-6">Download our second guide on how to drive more traffic to your site, and how to do it well.</p>
                {hasGuide ? (
                  <a
                    href="/downloads/5-Proven-Ways-to-Drive-Traffic.pdf"
                    target="_blank"
                    className="block w-full bg-[#ffc807] border border-black rounded-lg text-black uppercase font-montserrat py-2 px-8 text-center hover:bg-black hover:text-[#ffc807] hover:border-[#ffc807] transition-all duration-300"
                  >
                    GET THE GUIDE
                  </a>
                ) : (
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="block w-full bg-[#ffc807] border border-black rounded-lg text-black uppercase font-montserrat py-2 px-8 hover:bg-black hover:text-[#ffc807] hover:border-[#ffc807] transition-all duration-300"
                  >
                    GET THE GUIDE
                  </button>
                )}
              </div>
            </div>
            <div className="lg:col-span-8 lg:col-start-5 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-5xl mb-4 text-black relative z-[1080]">
                Drive More Traffic
              </h2>
              <p className="text-lg">
                Once you've built your site to perform, and you've set yourself up to convert users to customers, you have to drive those users to your website. There are a lot of ways to do it, but we've broken down the top 5 ways.{' '}
                {hasGuide ? (
                  <Link href="/downloads/5-Proven-Ways-to-Drive-Traffic.pdf" target="_blank" className="yellow-link">
                    Download the PDF
                  </Link>
                ) : (
                  <button onClick={() => setIsModalOpen(true)} className="yellow-link">
                    Download the PDF
                  </button>
                )}
                {' '}to learn 5 ways to drive traffic, that are quick and easy to implemnent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <NewsletterCTA />
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

