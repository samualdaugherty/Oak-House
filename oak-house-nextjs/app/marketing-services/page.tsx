'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsletterCTA from '@/components/NewsletterCTA';
import DownloadModal from '@/components/DownloadModal';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { hasGuideCookie } from '@/lib/cookies';

export default function MarketingServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasGuide, setHasGuide] = useState(false);

  useEffect(() => {
    setHasGuide(hasGuideCookie());
  }, []);

  return (
    <>
      <Header currentPage="marketing" />
      
      <header className="bg-[url('/img/header-bg.png')] bg-center bg-cover bg-no-repeat pb-40 pt-40 relative">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-[35px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl leading-tight text-[#f9f9f9] uppercase mt-2 relative">
                Marketing Services
              </h1>
              <p className="text-lg text-[#f9f9f9] mt-4">
                With a focus on customer relationships, and teaming up with you to achieve your goals, we can build a custom marketing plan, and execute it for you. So you can spend more time running your business.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="bg-black -mt-8 pt-8 pb-8 pl-6 pr-4 relative">
                <div className="absolute bg-black h-full w-60 left-full top-0" />
                <h4 className="text-2xl mb-4 text-[#f9f9f9] relative z-[1080]">WORK WITH US</h4>
                <p className="text-[#f9f9f9] mb-6">We make working with us easy. Why complicate things? Get the quick scoop on how to get started today.</p>
                <Link href="/process" className="block w-full bg-[#ffc807] border border-black rounded-lg text-black uppercase font-montserrat py-2 px-8 text-center hover:bg-black hover:text-[#ffc807] hover:border-[#ffc807] transition-all duration-300">
                  LEARN MORE
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
                Whole-Goal Strategy
              </h2>
              <p className="text-lg mb-6">
                Our approach to marketing is that you're only as good as the sum of all your efforts. This includes your email strategy,{' '}
                <Link href="/web-services" className="yellow-link">
                  your website
                </Link>
                , your presence across the web, and across social media. That's why our marketing services are catered a to long-term, ongoing approach to keeping contact open with your customers. How do we do that?
              </p>
            </div>
            <div className="lg:col-span-3">
              <div className="bg-black -mt-8 pt-8 pb-8 pl-6 pr-4 relative">
                <div className="absolute bg-black h-full w-60 left-full top-0" />
                <h4 className="text-2xl mb-4 text-[#f9f9f9] relative z-[1080]">DON'T WANT OUR HELP?</h4>
                <p className="text-[#f9f9f9] mb-6">Check out our guide on proven ways to drive quality traffic to your site. We don't keep it a secret, but we can help.</p>
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
          </div>

          <div className="mt-16 max-w-5xl ml-auto">
            <h5 className="text-lg mt-14 mb-0 text-black relative z-[1090]">Email</h5>
            <p className="text-lg mb-6 relative pl-12 before:content-[''] before:absolute before:bg-[#ffc807] before:h-11 before:w-11 before:rounded-full before:-left-12 before:top-0">
              Sending one email isn't going to get big results, but sending several emails will. And, then you can make that even better by automating an entire email program that sends customers down a specific journey from inbox to in store.
            </p>
            <h5 className="text-lg mt-14 mb-0 text-black relative z-[1090]">SEM</h5>
            <p className="text-lg mb-6 relative pl-12 before:content-[''] before:absolute before:bg-[#ffc807] before:h-11 before:w-11 before:rounded-full before:-left-12 before:top-0">
              Search engine marketing is what that is. You know it as the paid placements that show up as the top results in a Google search. And they're incredibly effective when done well.
            </p>
            <h5 className="text-lg mt-14 mb-0 text-black relative z-[1090]">Remarketing</h5>
            <p className="text-lg mb-6 relative pl-12 before:content-[''] before:absolute before:bg-[#ffc807] before:h-11 before:w-11 before:rounded-full before:-left-12 before:top-0">
              Ever looked at something online, and then see ads for it for the next few days? That's remarketing. And it's effective because people don't always make quick decisions. Maybe they visited your site, but weren't ready to commit to what you're selling. Reminding them subtly is an effective way to bring them back.
            </p>
            <h5 className="text-lg mt-14 mb-0 text-black relative z-[1090]">Social Media Marketing</h5>
            <p className="text-lg mb-6 relative pl-12 before:content-[''] before:absolute before:bg-[#ffc807] before:h-11 before:w-11 before:rounded-full before:-left-12 before:top-0">
              Advertising on social media is big, and there are several ways to do it depending on your goals. And how to do it, when to do it, and where to do it changes from year to year as platforms make updates. But we've found a lot of success in marketing across these channels strategically, and it doesn't require a large budget to be effective.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-8">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-[35px]">
          <div className="mb-8">
            <h3 className="text-2xl mb-4 text-black relative z-[1090]">Need proof?</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 justify-between">
            <div className="lg:col-span-4 bg-[url('/img/quotes-bg.png')] bg-no-repeat bg-[length:30%] bg-[top_left] pt-3">
              <p className="mb-6">
                As a hairstylist, if I'm not working, I'm not getting paid, so any time I spent marketing was costing me. With the help of Oak House, I was getting more leads with les time away form the chair. I feel like this team really took the time to understand who I am and created a plan that aligned with my needs. Best thing that ever happened to my business!
              </p>
              <p className="font-bold">
                Parker Davis<br />
                <em>Scottfree Salons</em>
              </p>
            </div>
            <div className="lg:col-span-4 bg-[url('/img/quotes-bg.png')] bg-no-repeat bg-[length:30%] bg-[top_left] pt-3">
              <p className="mb-6">
                I have a growing business that needed an updated and elevated presence to appeal directly to my target market. Oak House Co. considered all of my needs, and I am over the moon with the results. Their approach was exactly what I needed to be able to focus on my business, and it shows. These guys are the best: creative, easy to work with, AND innovative. I am so lucky to have found them…and will continue to work with them as my business grows!
              </p>
              <p className="font-bold">
                Natlie Slevin<br />
                <em>Sugar Bakeshop Denver</em>
              </p>
            </div>
            <div className="xl:col-span-3 lg:col-span-4">
              <div className="bg-black -mt-8 pt-8 pb-8 pl-4 pr-6 relative">
                <div className="absolute bg-black h-full w-60 left-full top-0" />
                <h4 className="text-2xl mb-4 text-[#f9f9f9] relative z-[1080]">WILL YOU BE NEXT?</h4>
                <p className="text-[#f9f9f9] mb-6">We are always looking for new clients who are ready to take action on growing their business!</p>
                <Link href="/get-started" className="block w-full bg-[#ffc807] border border-black rounded-lg text-black uppercase font-montserrat py-2 px-8 text-center hover:bg-black hover:text-[#ffc807] hover:border-[#ffc807] transition-all duration-300">
                  GET STARTED
                </Link>
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
                <h4 className="text-2xl mb-4 text-[#f9f9f9] relative z-[1080]">READY?</h4>
                <p className="text-[#f9f9f9] mb-6">
                  You wouldn't be looking at our site if you weren't! So what are you waiting for? Start today by answering a couple of really simple questions, and we will be in touch to schedule your comprehensive site analysis.
                </p>
                <Link href="/get-started" className="block w-full bg-[#ffc807] border border-black rounded-lg text-black uppercase font-montserrat py-2 px-8 text-center hover:bg-black hover:text-[#ffc807] hover:border-[#ffc807] transition-all duration-300">
                  GET STARTED
                </Link>
              </div>
            </div>
            <div className="lg:col-span-8 lg:col-start-5 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-5xl mb-4 text-black relative z-[1080]">
                This might not work
              </h2>
              <p className="text-lg">
                What do we mean? It means no matter how hard we try to drive quality traffic to your website, your website has to be set up to continue the customer journey. Good traffic arriving at a bad site doesn't work. But we know a{' '}
                <Link href="/web-services" className="yellow-link">
                  good website
                </Link>
                {' '}when we see one, and we will start with a comprehensive analysis of your site before we do anything else.
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

