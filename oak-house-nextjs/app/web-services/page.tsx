'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsletterCTA from '@/components/NewsletterCTA';
import DownloadModal from '@/components/DownloadModal';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { hasGuideCookie } from '@/lib/cookies';

export default function WebServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasGuide, setHasGuide] = useState(false);

  useEffect(() => {
    setHasGuide(hasGuideCookie());
  }, []);

  return (
    <>
      <Header currentPage="websites" />
      
      <header className="bg-[url('/img/header-bg.png')] bg-center bg-cover bg-no-repeat pb-40 pt-40 relative">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-[35px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl leading-tight text-[#f9f9f9] uppercase mt-2 relative">
                Website Services
              </h1>
              <p className="text-lg text-[#f9f9f9] mt-4">
                With over 15 years in design services, we know a thing or two about the internet. But, more importantly, we know a lot more about making a website that performs.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="bg-black -mt-8 pt-8 pb-8 pl-6 pr-4 relative">
                <div className="absolute bg-black h-full w-60 left-full top-0" />
                <h4 className="text-2xl mb-4 text-[#f9f9f9] relative z-[1080]">SPECIAL OFFER!</h4>
                <p className="text-[#f9f9f9] mb-6">Is your website designed to perform? Get your free website review today (a $300 value), and find out if you're ready to kickstart your marketing process today.</p>
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
                A wise man once said "No one buys a drill because they want a drill; they want a hole." That's never been more true for a website. For years, clients have called us and said "i need a new website!" But when you start asking questions, you realize the website is a band-aid for a larger pain-point within the entire marketing process. The problem is that the current website isn't built to perform. And without having a clear strategy for lead generation,{' '}
                <Link href="/marketing-services" className="yellow-link">
                  driving traffic
                </Link>
                , and performance goals, a new site won't be either.
              </p>
            </div>
            <div className="lg:col-span-3">
              <div className="bg-black -mt-8 pt-8 pb-8 pl-6 pr-4 relative">
                <div className="absolute bg-black h-full w-60 left-full top-0" />
                <h4 className="text-2xl mb-4 text-[#f9f9f9] relative z-[1080]">DO YOU PASS THE TEST?</h4>
                <p className="text-[#f9f9f9] mb-6">Our quick guide on high-performing websites should get you started. Is your site Built to Perform?</p>
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
          <div className="mt-8 max-w-5xl">
            <p className="text-lg mb-6">
              A lot of the work we do gets bundled with our Marketing Services, so that we can control the entire customer journey, from start to finish. But if you don't need a comprehensive service like that, a website that's Built to Perform isn't going to hurt your chances of success. So what does that look like?
            </p>
          </div>

          <div className="mt-16 max-w-5xl ml-auto">
            <h5 className="text-lg mt-14 mb-0 text-black relative z-[1090]">SEO</h5>
            <p className="text-lg mb-6 relative pl-12 before:content-[''] before:absolute before:bg-[#ffc807] before:h-11 before:w-11 before:rounded-full before:-left-12 before:top-0">
              Keep in mind that SEO isn't a one-and-done thing. It requires consistent updating and attention to performance metrics across your entire website. A well-maintained site is better than one that never changes.
            </p>
            <h5 className="text-lg mt-14 mb-0 text-black relative z-[1090]">Clear Call-to-Action</h5>
            <p className="text-lg mb-6 relative pl-12 before:content-[''] before:absolute before:bg-[#ffc807] before:h-11 before:w-11 before:rounded-full before:-left-12 before:top-0">
              No matter what you do, your website is trying to get people to do something. Whether it's contact you, buy a product, sign up for a service, it doesn't matter. What does matter is that you guide them to that goal, and don't distract them along the way.
            </p>
            <h5 className="text-lg mt-14 mb-0 text-black relative z-[1090]">Offer Real Value</h5>
            <p className="text-lg mb-6 relative pl-12 before:content-[''] before:absolute before:bg-[#ffc807] before:h-11 before:w-11 before:rounded-full before:-left-12 before:top-0">
              This sounds simple, but you'd be surprised how many websites don't do this. The internet is full of companies like yours, so what value do you provide that sets you apart? There are a lot of ways to do this, but the end result is demonstrating your value.
            </p>
            <h5 className="text-lg mt-14 mb-0 text-black relative z-[1090]">Social Proof</h5>
            <p className="text-lg mb-6 relative pl-12 before:content-[''] before:absolute before:bg-[#ffc807] before:h-11 before:w-11 before:rounded-full before:-left-12 before:top-0">
              People want to trust that they're making the right choice. Having customer testimonials is far better than just talking about yourself, and hoping they believe you. Because they usually won't. People are skeptical, so let your customers speak for you.
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
                Let's Go!
              </h2>
              <p className="text-lg">
                We try to make{' '}
                <Link href="/process" className="yellow-link">
                  our process
                </Link>
                {' '}as simple as possible for all of our new clients to come on board. Whether you choose to package your website with a monthly maintenance and marketing package is up to you, but our website design services are still developed around your goals and needs. We will even give you tips on things you can do yourself to drive high quality traffic to your site.
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

