import Image from 'next/image';

export default function HowICanHelp() {
  const processSteps = [
    "We chat about your timeline and goals",
    "You send your text, photos, or anything you want included",
    "I design, build, and share previews along the way",
    "You approve it, we launch, and you get a site you're proud of",
  ];

  return (
    <section id="how-i-can-help" className="bg-[var(--color-birch)] py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-16 md:gap-16 lg:gap-16">
          {/* 1. How I Can Help - same layout as What I Do but white background */}
          <div className="flex flex-col gap-6 max-w-4xl lg:max-w-5xl mx-auto">
            <h2 className="heading-with-underline font-extrabold leading-[1.1] text-[var(--color-oak)] text-4xl md:text-5xl lg:text-[48px]">
              How I Can Help...
            </h2>
            <div className="font-light leading-[1.5] text-[var(--color-oak)] text-base">
              <p className="mb-0">
                I try to make the website process as simple and stress-free as possible. You don't need to know a bunch of technical language; just what you want your site to say and do. We'll work together to gather messaging, images, or any assets you want on the page, and then I'll build it for you. I'll communicate with you through every step so you always know what's happening and what comes next.
              </p>
              <p className="mb-0">&nbsp;</p>
              <p>
                I pride myself on being easy to work with, and I keep my client base intentionally small so I can give you my full attention. I only take on one project at a time, which means you'll always work directly with me, and communicate only with me. And I'll design and build the entire thing myself. I never hire anything out or rely on overseas engineers.
              </p>
            </div>
          </div>

          {/* Yellow rectangle separator */}
          <div className="flex justify-center">
            <div className="bg-[var(--color-sunburst)] h-1 rounded-full w-full max-w-[400px]" />
          </div>

          {/* 2. Easy Process - title on left, list on right, chevron pointing right */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-24 items-start md:items-center">
            {/* Title with underline and chevron */}
            <div className="flex flex-col items-start pb-[30px] relative flex-shrink-0">
              <h3 className="font-extrabold leading-[1.1] text-[var(--color-oak)] text-4xl md:text-5xl lg:text-[48px] mb-[-12px] md:mb-[-30px] relative z-[2] pr-16">
                Easy Process...
              </h3>
              <div className="flex items-center mb-[-12px] md:mb-[-30px] relative w-full z-[1]">
                <div className="bg-[var(--color-sunburst)] h-3 rounded-full flex-grow mr-[-8px]" />
                {/* Chevron pointing right - hidden on mobile */}
                <div className="hidden md:flex items-center justify-center relative flex-shrink-0">
                  <Image
                    src="/images/chevron.svg"
                    alt=""
                    width={30}
                    height={30}
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Process list */}
            <div className="flex flex-col gap-6 flex-1">
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-[9px] items-start">
                  {/* Numbered circle */}
                  <div className="border-2 border-[var(--color-sunburst)] rounded-full w-[26px] h-[26px] flex items-center justify-center flex-shrink-0">
                    <span className="font-extrabold leading-[1.1] text-[var(--color-oak)] text-2xl">
                      {index + 1}
                    </span>
                  </div>
                  {/* Step text */}
                  <p className="font-normal leading-[1.1] text-[var(--color-oak)] text-xl flex-1">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Yellow rectangle separator */}
          <div className="flex justify-center">
            <div className="bg-[var(--color-sunburst)] h-1 rounded-full w-full max-w-[400px]" />
          </div>

          {/* 3. Pricing + Contact - content on left, title on right, chevron pointing left */}
          <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 lg:gap-24 items-start md:items-center justify-end lg:ml-auto">
            {/* Title with underline and chevron */}
            <div className="flex flex-col items-end pb-[30px] relative flex-shrink-0 w-full md:w-auto">
              <h3 className="font-extrabold leading-[1.1] text-[var(--color-oak)] text-4xl md:text-5xl lg:text-[48px] mb-[-12px] md:mb-[-30px] relative z-[2] pl-16 text-right md:text-left">
                Pricing + Contact
              </h3>
              <div className="flex items-center justify-end mb-[-12px] md:mb-[-30px] relative w-full z-[1]">
                {/* Chevron pointing left - hidden on mobile */}
                <div className="hidden md:flex items-center justify-center ml-[-8px] relative flex-shrink-0">
                  <Image
                    src="/images/chevron.svg"
                    alt=""
                    width={30}
                    height={30}
                    className="object-contain scale-x-[-1]"
                    unoptimized
                  />
                </div>
                <div className="bg-[var(--color-sunburst)] h-3 rounded-full flex-grow ml-[-8px]" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 max-w-2xl">
              <div className="font-light leading-[1.5] text-[var(--color-oak)] text-base">
                <p className="mb-0">
                  <span className="font-bold">Most projects fall between $2,500–$4,000</span>
                  <span>, depending on size and scope. That usually covers a clean, 3–5 page website designed, built, and launched by me.</span>
                </p>
                <p className="mb-0">&nbsp;</p>
                <p>
                  <span>If that sounds like what you need, email me directly at </span>
                  <a
                    href="mailto:hello@oakhouseco.com"
                    className="font-bold text-[var(--color-oak)] hover:opacity-80 transition-opacity"
                  >
                    hello@oakhouseco.com
                  </a>
                  <span>. I'd love to hear about your project and discuss how we can work together.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
