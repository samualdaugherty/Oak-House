import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsletterCTA from '@/components/NewsletterCTA';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Header currentPage="about" />
      
      <header className="bg-[url('/img/header-bg.png')] bg-center bg-cover bg-no-repeat pb-40 pt-40 relative">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-[35px]">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl leading-tight text-[#f9f9f9] uppercase mt-2 relative">
              A Little Company
            </h1>
            <p className="text-lg text-[#f9f9f9] mt-4">
              You found this page, eh? We didn't link to it in the navigation, and there's actually a good reason for that. I'll explain it more in our meeting if you're curious. But Oak House is just a little business, and that's by design.
            </p>
          </div>
        </div>
      </header>

      <section className="bg-[url('/img/OH.svg')] bg-left bg-contain bg-no-repeat pt-32 pb-8">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-[35px]">
          <div className="max-w-5xl">
            <h2 className="text-3xl lg:text-5xl mb-4 text-black relative z-[1080]">
              Who is Oak House Co.?
            </h2>
            <p className="text-lg mb-6">
              The short answer is that it's just two people. We're a husband and wife team, who have a goal to help businesses organize their marketing efforts, educate on best practices, and help where we can. There is a bigger "we" even though none of them are our employees, because we don't want employees. We want to do marketing, not management&mdash;that's our "why" (thanks{' '}
              <a href="https://simonsinek.com/" target="_blank" rel="noopener noreferrer" className="yellow-link">
                Simon Sinek
              </a>
              ). And we've met other people just like us along our journey to where we are.
            </p>
            <p className="text-lg">
              So the "we" is a very small team, but we're all very good at one specific thing. We collaborate on a ton of projects together, but most of the time we just refer work to each other. No one wants to play middle-man between two people, so we try to avoid it. Sometimes we can't, because of the client's needs. But most of the time it works.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-8">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-[35px]">
          <div className="max-w-5xl ml-auto">
            <h2 className="text-3xl lg:text-5xl mb-4 text-black relative z-[1080]">
              So how did we get here?
            </h2>
            <p className="text-lg mb-6">
              We came to the conclusions that we really just want to help people where we can, with the skills we have. We've started businesses before, and done well. The one thing we learned to do really well was market them. We started this company because we have a very specific philosophy for what it means to be a helpful company. That philosophy is best described as "more isn't better; better is better" (thanks{' '}
              <a href="https://pjrvs.com/" target="_blank" rel="noopener noreferrer" className="yellow-link">
                Paul Jarvis
              </a>
              ). When we started our first business, our goal was more. More clients, more work, more money, more recognition&hellip;more everything. It was that Hustle Culture mentality. But you know what? Hustle Culture is bullshit. It was just more stress, more time away from my family, more phone calls, more emails. You know what it wasn't? More fun. More freedom. More life. So we let go of it all, and stopped for a minute.
            </p>
            <p className="text-lg">
              We still want more, don't get us wrong. But more of the right things&ndash;more time with family, more travel, more joy, and more focus. That's what we have now. That's what we built. That's the whole point of life right?
            </p>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-8">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-[35px]">
          <div className="max-w-5xl">
            <h2 className="text-3xl lg:text-5xl mb-4 text-black relative z-[1080]">
              How does this benefit you?
            </h2>
            <p className="text-lg mb-6">
              Because it gives you more too! If we can take one thing off your hands&mdash;marketing&mdash;that's one less thing for you to do. Now you have more time too. And we're intentionally small, so that you get a lot of attention, which is nice.
            </p>
            <p className="text-lg">
              When we evaluated our old business practices, we realized that more work meant less time per client. So now we have a client maximum. We have a maximum sales goal. Because we would rather have a few great clients, then a lot of bad ones. That's why we're picky about who we work with, because their goals should match our goals. And if we aren't a good fit, we know someone who can help you. We'll never just tell someone to get lost, because that's adding to their frustration, and goes against our goal of helping them.
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
                  Even if you're not, it's free to talk to us and find out. Might as well give it a shot, right?.
                </p>
                <Link href="/get-started" className="block w-full bg-[#ffc807] border border-black rounded-lg text-black uppercase font-montserrat py-2 px-8 text-center hover:bg-black hover:text-[#ffc807] hover:border-[#ffc807] transition-all duration-300">
                  GET STARTED
                </Link>
              </div>
            </div>
            <div className="lg:col-span-8 lg:col-start-5 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-5xl mb-4 text-black relative z-[1080]">
                Enough about us!
              </h2>
              <p className="text-lg">
                Let's get back to you. If we sound like someone you want to work with, then let's get started. If not, please just share our site with someone who might. We'll buy you a coffee or something.
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

