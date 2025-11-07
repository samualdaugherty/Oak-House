import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsletterCTA from '@/components/NewsletterCTA';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <Header currentPage="home" />
      
      <header className="bg-[url('/img/header-bg.png')] bg-center bg-cover bg-no-repeat pb-40 pt-40 relative">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-[35px]">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl leading-tight text-[#f9f9f9] uppercase mt-2 relative">
              Welcome to the Oak&nbsp;House&nbsp;Co.
            </h1>
            <p className="text-lg text-[#f9f9f9] mt-4">
              We started Oak House because our entire philosophy around business changed from our old agency days. Small business owners have to wear a lot of hats, and we wanted to take one of those off of you. So we set out to focus on helping small businesses do better, by applying our extensive agency knowledge to a new model of business. We're here to help.
            </p>
          </div>
        </div>
      </header>

      <section className="bg-[url('/img/OH.svg')] bg-left bg-contain bg-no-repeat pt-32 pb-8">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-[35px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-9">
              <h2 className="text-3xl lg:text-5xl mb-4 text-black relative z-[1080]">
                We're Not an Agency
              </h2>
              <p className="text-lg mb-6">
                Our entire business philosophy would take a long time to explain, and we would love to{' '}
                <Link href="/get-started" className="yellow-link">
                  have that conversation with you
                </Link>{' '}
                any time. But for now we'll just give you the short version: we believe small business is the lynchpin of our economy, and it's getting harder and harder for them to compete in a digital world. We know how to fix that problem, and we can do it for less than the cost of a part-time employee, with none of the liability. And that was our goal from day one.
              </p>
            </div>
            <div className="lg:col-span-3">
              <div className="bg-black -mt-8 pt-8 pb-8 pl-6 pr-4 relative">
                <div className="absolute bg-black h-full w-60 left-full top-0" />
                <h4 className="text-2xl mb-4 text-[#f9f9f9] relative z-[1080]">WANT THE WHOLE STORY?</h4>
                <p className="text-[#f9f9f9] mb-6">We love to share our why! It's one of the best ways to know if we're a good fit for each other.</p>
                <Link href="/get-started" className="block w-full bg-[#ffc807] border border-black rounded-lg text-black uppercase font-montserrat py-2 px-8 text-center hover:bg-black hover:text-[#ffc807] hover:border-[#ffc807] transition-all duration-300">
                  LET'S TALK
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-4xl ml-auto">
            <h3 className="text-2xl mb-4 text-black relative z-[1090]">So who are we?</h3>
            <p className="text-lg mb-6">
              Here come the buzzwords&hellip;We are a small group of marketers and designers who specialize in integrated,{' '}
              <Link href="/marketing-services" className="yellow-link">
                multi&#8209;channel marketing strategies
              </Link>
              . We spent years working with large organizations building automated programs, conversion funnels, SEO, search engine marketing, social media ads, and all the other buzz words you hear all the time. But those are actual things that provide immense value, and we wanted to apply them all to small business models and niche brands, all with a huge focus on customer service.
            </p>
            <p className="text-lg">
              That customer service is what sets us apart, and why we say we're not an agency. Oak House has a philosophy that more is not better&mdash;better is better. And we can do a better job by focusing on a small number of clients. Instead of minimum goals, we set maximum goals, and we stick to them. So our clients never feel like they're getting pushed aside or that they don't have our attention because we're too busy. It's why we started Oak House. It's what makes us different.
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
                  You wouldn't be looking at our site if you weren't! So what are you waiting for? Start today by answering a couple of really simple questions, and we will be in touch to schedule your free consultation.
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
                Our services are designed for people who want to take action, and know where they want to be in the future. But that requires a good fit between our two companies as well. We have to pick you just as much as you have to pick us, and we stay busy enough to be selective about the clients we take on. If we're ready to work with you, it's because we're confident we can put our process in place and drive results.{' '}
                <Link href="/get-started" className="yellow-link">
                  Let's&nbsp;get&nbsp;started
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <NewsletterCTA />
    </>
  );
}
