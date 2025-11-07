import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsletterCTA from '@/components/NewsletterCTA';
import Link from 'next/link';

export default function ProcessPage() {
  return (
    <>
      <Header currentPage="process" />
      
      <header className="bg-[url('/img/header-bg.png')] bg-center bg-cover bg-no-repeat pb-40 pt-40 relative">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-[35px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl leading-tight text-[#f9f9f9] uppercase mt-2 relative">
                Simple Process
              </h1>
              <p className="text-lg text-[#f9f9f9] mt-4">
                Our process helps save you time by getting you up and running quickly with a solid marketing plan, a great website, or both. Then we handle the rest for you&mdash;for less than the cost of a part-time employee. It's just good business.
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
                Why Oak House Co.?
              </h2>
              <p className="text-lg mb-6">
                It's a good question, because you have a lot of options, right? Honestly, we might not be a good fit. I have to pick you, just as much as you have to pick me. I won't show up to our meeting with a pitch. It's salesy and inauthentic. I'm just going to show up and have a conversation. If you like my ideas, good. If you don't, I hope I was able to at least provide some valuable insight. I have a simple process for how to get started, and it involves real conversations. That's not for everyone, and I get it. But it works for me, and for a lot of other companies. Let's meet and find out.
              </p>
            </div>
            <div className="lg:col-span-3">
              <div className="bg-black -mt-8 pt-8 pb-8 pl-6 pr-4 relative">
                <div className="absolute bg-black h-full w-60 left-full top-0" />
                <h4 className="text-2xl mb-4 text-[#f9f9f9] relative z-[1080]">WHO AM I?</h4>
                <p className="text-[#f9f9f9] mb-6">Get to know more about the company, our philosophy, and why we do what we do. Because we're bringing this all with us throughout our journey together.</p>
                <Link href="/about" className="block w-full bg-[#ffc807] border border-black rounded-lg text-black uppercase font-montserrat py-2 px-8 text-center hover:bg-black hover:text-[#ffc807] hover:border-[#ffc807] transition-all duration-300">
                  IT GETS LONG
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-8">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-[35px]">
          <div className="max-w-5xl ml-auto">
            <h2 className="text-3xl lg:text-5xl mb-8 text-black relative z-[1080]">
              What's the Process?
            </h2>
            
            <h5 className="text-lg mt-14 mb-0 text-black relative z-[1090]">Start here</h5>
            <p className="text-lg mb-6 relative pl-12 before:content-['1'] before:absolute before:bg-transparent before:font-montserrat before:text-[10rem] before:text-[#ffc807] before:h-20 before:w-20 before:-left-12 before:-top-24 before:z-[-1]">
              With just a few simple questions, we will have all of the information we need to begin pulling data about your site to discuss with you. Pretty quickly, you'll receive an email with some additional things to be thinking about, because we'll ask you about them during the phone call in step 2.
            </p>
            
            <h5 className="text-lg mt-14 mb-0 text-black relative z-[1090]">What to expect</h5>
            <p className="text-lg mb-6 relative pl-12 before:content-['2'] before:absolute before:bg-transparent before:font-montserrat before:text-[10rem] before:text-[#ffc807] before:h-20 before:w-20 before:-left-12 before:-top-24 before:z-[-1]">
              We begin with our comprehensive website analysis, that audits your current site for content, performance, SEO, and identifies potential pain points for your visitors. We will schedule a brief phone call of 30-45 minutes to begin discussing what we've found in our discovery phase, and what your goals are. You wouldn't be contacting us if you didn't want to improve your funnel.
            </p>
            <p className="text-lg mb-6">
              We will then discuss your current marketing efforts, to help us develop a plan to increase results in the future.
            </p>
            <p className="text-lg mb-6">
              If your website is already performing well, we'll move straight to step 3. If not, we'll discuss ways to help create a more optimal site that better aligns with your targets.
            </p>
            
            <h5 className="text-lg mt-14 mb-0 text-black relative z-[1090]">Going "all in"</h5>
            <p className="text-lg mb-6 relative pl-12 before:content-['3'] before:absolute before:bg-transparent before:font-montserrat before:text-[10rem] before:text-[#ffc807] before:h-20 before:w-20 before:-left-12 before:-top-24 before:z-[-1]">
              After our initial meeting, we will put together a comprehensive plan to help you achieve your goals, while allowing you to focus on closing deals on all the new leads. With our customized Maintenance and Marketing Plan (M&MP), we will lay out a strategy that keeps your site up to date and performing well, drives traffic through strategic marketing efforts, and automates the process of lead generation.
            </p>
            
            <h5 className="text-lg mt-14 mb-0 text-black relative z-[1090]">You do you</h5>
            <p className="text-lg mb-6 relative pl-12 before:content-['4'] before:absolute before:bg-transparent before:font-montserrat before:text-[10rem] before:text-[#ffc807] before:h-20 before:w-20 before:-left-12 before:-top-24 before:z-[-1]">
              Our process is designed to take the stress and headache of lead generation off of your shoulders, and onto ours. You're the expert at running your business, and we're the experts at marketing and generating leads. We have a fundamental belief in helping businesses achieve their goals through a well-developed plan of attack, and a hands-free approach.
            </p>
            <p className="text-lg mb-6">
              The M&MP requires very little time from you on a monthly basis&mdash;generally as simple as an email or phone call&mdash;so that you can use the extra time to better run your business.
            </p>
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
                This plan is designed for people who want to take action, and know where they want to be in the future. But that requires a good fit between our two companies as well. We have to pick you just as much as you have to pick us, and we stay busy enough to be selective about the clients we take on. If we're ready to work with you, it's because we're confident we can put our process in place and drive results. Let's get started.
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

