import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsletterCTA from '@/components/NewsletterCTA';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automate Social Media | Oak House Co.',
  description: 'One of the things I want to do when teaching a company how to market is to automate as much as you can—spend a few hours now to save a hundred hours later. To prove how easily you can implement an automated social strategy, I did it in a day.',
  openGraph: {
    url: 'https://oakhouseco.com/get/automate-social-media/',
    title: 'Oak House Co.',
    description: 'One of the things I want to do when teaching a company how to market is to automate as much as you can—spend a few hours now to save a hundred hours later. To prove how easily you can implement an automated social strategy, I did it in a day.',
    images: ['https://oakhouseco.com/img/undidlink-share.png'],
  },
};

export default function AutomateSocialMediaPage() {
  return (
    <>
      <Header />
      
      <header className="bg-[url('/img/blog/automate-bg.jpg')] bg-[center_right] bg-cover bg-no-repeat pb-40 pt-40 relative border-t border-black">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-[35px]">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl leading-tight text-black uppercase mt-2 relative">
              I UNDID MY WORK
            </h1>
            <p className="text-lg text-black mt-4">
              To prove how easily you can implement an automated social strategy, I did it in a day. But then I undid it the next day because I came up with a better idea. And that's okay. Change your mind often, it's the power of creativity, and it's easy to make changes if you have everything scheduled out in advance. Let me explain.
            </p>
          </div>
        </div>
      </header>

      <section className="bg-[url('/img/OH.svg')] bg-left bg-contain bg-no-repeat pt-32 pb-8">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-[35px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-9">
              <h2 className="text-3xl lg:text-5xl mb-4 text-black relative z-[1080]">
                First the Introduction
              </h2>
              <p className="text-lg mb-6">
                One of the things I want to do when teaching a company how to market is to automate as much as you can&mdash;spend a few hours now to save a hundred hours later. And you can these days! Holy crap is it easy to automate! Businesses sometimes put off marketing, or actively using social media because it's daunting. But here's an insider secret: <em>quantity</em> is better than <em>quality</em>. Don't believe me? I bet you remember that your favorite Instagram accounts posted three days ago, but that you don't remember what it was. Do you? Or do you have to go look to remind yourself?
              </p>
              <p className="text-lg">
                Don't take that the wrong way though. Be creative, and definitely provide quality content. But everything you post doesn't have to be <em>amazing</em>. Sometimes it's better to just post, so people remember you exist. And that was my goal. I set out to do a thing, and I did it. But then I changed my mind. tl;dr? Skip to <Link href="#tldr" className="yellow-link">the bottom</Link>. But probably just read something for 5 minutes and relax this time.
              </p>
            </div>
            <div className="lg:col-span-3">
              <div className="bg-black -mt-8 pt-8 pb-8 pl-6 pr-4 relative">
                <div className="absolute bg-black h-full w-60 left-full top-0" />
                <h4 className="text-2xl mb-4 text-[#f9f9f9] relative z-[1080]">FOR SOCIAL MEDIA, QUANTITY IS BETTER THAN QUALITY. NOT EVERYTHING HAS TO BE AMAZING.</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-8">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-[35px]">
          <div className="mb-8">
            <h2 className="text-3xl lg:text-5xl mb-4 text-black relative z-[1080]">
              Step 1: Get Your Content
            </h2>
            <p className="text-lg mb-8">
              Coming up with good content is hard, and it takes time. I don't always have time, because I work, have a family, have way too many hobbies, and Netflix is a thing too. So I don't want to spend several days every week coming up with content for 4 different social media platforms (I'm on Facebook, Insta, Twitter, and LinkedIn). But not every post has to be groundbreaking. Sometimes you just need to post <em>something</em>! So I spent a day doing it. Technically, a few hours doing it. Here's how that went.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="bg-black pt-8 pb-8 pl-4 pr-6 relative mt-4">
                <div className="absolute bg-black h-full w-60 -left-[239.2px] top-0" />
                <h4 className="text-2xl mb-4 text-[#f9f9f9] relative z-[1080]">MY NOTES</h4>
                <Image src="/img/blog/notes-shot.png" alt="Notes screenshot" width={300} height={400} className="w-full h-auto" />
              </div>
            </div>
            <div className="lg:col-span-9 order-1 lg:order-2">
              <h5 className="text-lg mt-14 mb-0 text-black relative z-[1090]">Have a loose idea</h5>
              <p className="text-lg mb-6 relative pl-12 before:content-[''] before:absolute before:bg-[#ffc807] before:h-11 before:w-11 before:rounded-full before:-left-12 before:top-0">
                First I needed a really basic plan: how often do I want to post? I don't care to post every day, so I went for 4 posts per week. I want one of those to be something really good, and I want to invest time into that, so I shelved those ideas for later. This was about posting something, not posting the best stuff. That left me with 3 posts&mdash;say Monday, Wednesday, Friday.
              </p>
              <h5 className="text-lg mt-14 mb-0 text-black relative z-[1090]">Brainstorm topics</h5>
              <p className="text-lg mb-6 relative pl-12 before:content-[''] before:absolute before:bg-[#ffc807] before:h-11 before:w-11 before:rounded-full before:-left-12 before:top-0">
                Broad topics! For me, it was stuff like email stats, email open rates, social media demographics, marketing ROI, best days to post, etc. Stuff small business might want to know. Basic stuff. I just sat down for 10 minutes and jotted down as many as I could think of, without asking if they were any good. They don't have to be good at this point! One hour of doing something is better than 1 year of thinking about it. So start somewhere. You can always improve later.
              </p>
              <p className="text-lg mb-6 italic">
                Make it work for you: Any time I think of something, I add it to my list in notes (I use Apple Notes). It doesn't matter what you're doing when an idea hits, write it down. It takes 2 seconds to type out a note. So I did that. See the image for a screenshot of my actual Notes as they sit right now. In all, I've spent about 15 minutes doing this total over several days.
              </p>
              <h5 className="text-lg mt-14 mb-0 text-black relative z-[1090]">Add details</h5>
              <p className="text-lg mb-6 relative pl-12 before:content-[''] before:absolute before:bg-[#ffc807] before:h-11 before:w-11 before:rounded-full before:-left-12 before:top-0">
                Here's a tip, you don't have to research. Someone else already did that for you, and the internet is full of whatever stats I wanted to find. So I found them, copy/pasted them into my Notes (with sources because I want to be transparent that this isn't my research). Just simple bullet points. My goal for this step was 10 bullet points, for 3 topics (30 stats total): email, social media marketing, search engine marketing. It took about 30 minutes.
              </p>
              <h5 className="text-lg mt-14 mb-0 text-black relative z-[1090]">Design them</h5>
              <p className="text-lg mb-6 relative pl-12 before:content-[''] before:absolute before:bg-[#ffc807] before:h-11 before:w-11 before:rounded-full before:-left-12 before:top-0">
                This is mindless work, so I opened up Photoshop (you can use a free online tool like <a href="https://desygner.com/" target="_blank" rel="noopener noreferrer" className="yellow-link">Desygner</a> to do the same thing I did) and created a single template. It was simply a yellow background, with black text that said "OH! STATS". Don't overthink it. Then I pasted the bullet points in and saved the image, one-by-one. It took another 45 minutes to do this.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-8">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-[35px]">
          <div className="mb-8">
            <h2 className="text-3xl lg:text-5xl mb-4 text-black relative z-[1080]">
              Step 2: Schedule Your Content
            </h2>
            <p className="text-lg mb-8">
              Find a free/cheap solution that allows you to do this. There are tons of them. I'll give you a few options below. Total, this took about 90 minutes. I used Creator Studio for Facebook. It's just like using Facebook when you create a post but allows you to post to Instagram as well. I added a photo, added a short tidbit of advice to go with it, pasted in some hashtags, and scheduled it. I did that for the whole quarter. In fact, I'm scheduled through April 4th and don't have to think about it again until the next planning session. Here are 3 solutions (and I'm not claiming them as the best&hellip;).
            </p>
          </div>
          
          <div className="max-w-5xl ml-auto">
            <h5 className="text-lg mt-14 mb-0 text-black relative z-[1090]">Creator Studio by Facebook</h5>
            <p className="text-lg mb-6 relative pl-12 before:content-[''] before:absolute before:bg-[#ffc807] before:h-11 before:w-11 before:rounded-full before:-left-12 before:top-0">
              Survey says? It was just okay, but I wanted to try it anyway. Creator Studio is 100% free, and I really wanted to like it. But it was buggy—really buggy. When I tried to undo my work the next day, it was broken, and I couldn't access it for 3 hours. But then it worked perfectly, so take that as you will.<br /><strong>Pros:</strong> intuitive and easy to use<br /><strong>Cons:</strong> only works for FB and IG, buggy<br /><a href="https://business.facebook.com/creatorstudio" target="_blank" rel="noopener noreferrer" className="yellow-link">Try it</a>
            </p>
            <h5 className="text-lg mt-14 mb-0 text-black relative z-[1090]">Later App</h5>
            <p className="text-lg mb-6 relative pl-12 before:content-[''] before:absolute before:bg-[#ffc807] before:h-11 before:w-11 before:rounded-full before:-left-12 before:top-0">
              This is the one I regularly use. After I undid all my work, I re-did it here. It's free, but you can get some more functionality by paying a bit every month. I'm still using the free version if that says anything.<br /><strong>Pros:</strong> easy to use, works for FB, IG, Twitter, and Pinterest in one place<br /><strong>Cons:</strong> you have to create a separate entry for each platform. You can just make one post and publish it everywhere which would save you time.<br /><a href="https://later.com/" target="_blank" rel="noopener noreferrer" className="yellow-link">Try it</a>
            </p>
            <h5 className="text-lg mt-14 mb-0 text-black relative z-[1090]">Buffer</h5>
            <p className="text-lg mb-6 relative pl-12 before:content-[''] before:absolute before:bg-[#ffc807] before:h-11 before:w-11 before:rounded-full before:-left-12 before:top-0">
              This is super popular, and a really good option. They got rid of the free version, so that's why I don't use it. If I ever have to start paying for Later, I'll reconsider Buffer.<br /><strong>Pros:</strong> easy to use, intuitive interface<br /><strong>Cons:</strong> not free<br /><a href="https://buffer.com/" target="_blank" rel="noopener noreferrer" className="yellow-link">Try it</a>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[url('/img/OH.svg')] bg-left bg-contain bg-no-repeat pt-32 pb-8">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-[35px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-9">
              <h2 className="text-3xl lg:text-5xl mb-4 text-black relative z-[1080]">
                Be Flexible
              </h2>
              <p className="text-lg mb-6">
                So why did I undo my work? Because I came up with a better idea. Originally, I scheduled all my email posts, then all my social posts, then all my search engine posts. The end result looked like this: 3 weeks of <em>only</em> email stats, 3 weeks of <em>only</em> social stats, etc. You get the point. The next day, I woke up with a clear head and a fresh start and thought "why did I do that?" The better plan was to post one topic each time. Monday for email, Wednesday for social, Friday for search engine. Is it still the same content, spread out over the same time? Yes. I didn't create anything new at all. I just picked different days to post each one, so that the topics wouldn't become stale.
              </p>
            </div>
            <div className="lg:col-span-3">
              <div className="bg-black -mt-8 pt-8 pb-8 pl-6 pr-4 relative">
                <div className="absolute bg-black h-full w-60 left-full top-0" />
                <h4 className="text-2xl mb-4 text-[#f9f9f9] relative z-[1080]">THINK OF WAYS TO SIMPLIFY WHAT YOU POST. DON'T OVERTHINK IT.</h4>
              </div>
            </div>
          </div>
          <div className="mt-8 max-w-5xl">
            <p className="text-lg">
              Never be so set in your plan that you can't change course. In fact, change course sometimes. When you're working smarter, by automating your simple content, it's not hard to course correct. I re-did all of my posts, in a completely different app, in under 2 hours. And it's a better plan this time. Working smarter allows you to quickly pivot when a new idea shows up (just make sure you jot that idea down in your notes so you don't forget it).
            </p>
          </div>
        </div>
      </section>

      <section id="tldr" className="pt-20 pb-20">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-[35px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 justify-between">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="bg-black -mt-8 pt-8 pb-8 pl-4 pr-6 relative">
                <div className="absolute bg-black h-full w-60 -left-[239.2px] top-0" />
                <h4 className="text-2xl mb-4 text-[#f9f9f9] relative z-[1080]">NEED HELP?</h4>
                <p className="text-[#f9f9f9] mb-6">Marketing yourself isn't for everyone. If you think you'd be better off hiring it out, we can help.</p>
                <Link href="/get-started" className="block w-full bg-[#ffc807] border border-black rounded-lg text-black uppercase font-montserrat py-2 px-8 text-center hover:bg-black hover:text-[#ffc807] hover:border-[#ffc807] transition-all duration-300">
                  GET STARTED
                </Link>
              </div>
            </div>
            <div className="lg:col-span-8 lg:col-start-5 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-5xl mb-4 text-black relative z-[1080]">
                TL;DR
              </h2>
              <p className="text-lg">
                Decide how often you want to post<br />
                Make one of them awesome later<br />
                Make the rest quick and easy (I shared a single stat)<br />
                Post them all at the same time, and schedule them out (I schedule quarterly)<br />
                Use all the extra time to make that one last post really good<br />
                Be flexible and go with your best idea, even if it means undoing some of your work
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

