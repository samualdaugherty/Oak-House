import Image from 'next/image';

export default function WhoIAm() {
  return (
    <section id="who-i-am" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-center">
          {/* Image - Desktop/Tablet: left, Mobile: below */}
          <div className="w-full md:w-[360px] lg:w-[520px] flex-shrink-0 order-2 md:order-1">
            {/* Mobile: natural aspect ratio, no fixed height */}
            <div className="relative rounded-xl shadow-[44.79px_47.104px_80px_0px_rgba(0,0,0,0.08),29.031px_30.531px_46.852px_0px_rgba(0,0,0,0.06),17.253px_18.144px_25.481px_0px_rgba(0,0,0,0.05),8.958px_9.421px_13px_0px_rgba(0,0,0,0.04),3.65px_3.838px_6.519px_0px_rgba(0,0,0,0.03),0.829px_0.872px_3.148px_0px_rgba(0,0,0,0.02)] md:h-[280px] lg:h-[405px]">
              <Image
                src="/images/portrait.png"
                alt="Sam Daugherty"
                width={520}
                height={405}
                className="w-full h-auto rounded-xl md:hidden"
                unoptimized
              />
              {/* Desktop/Tablet: fill container with object-cover */}
              <Image
                src="/images/portrait.png"
                alt="Sam Daugherty"
                fill
                className="hidden md:block object-cover rounded-xl"
                unoptimized
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 order-1 md:order-2">
            <div className="flex flex-col gap-6 relative">
              {/* Heading with yellow underline */}
              <h2 className="heading-with-underline font-extrabold leading-[1.1] text-[var(--color-oak)] text-4xl md:text-5xl lg:text-[48px]">
                Who I Am...
              </h2>

              {/* Text content */}
              <div className="font-light leading-[1.5] text-[var(--color-oak)] text-base">
                <p className="mb-0">
                  <span>By day, I'm a </span>
                  <span className="font-semibold">Lead UX Designer and AI Integration Specialist</span>
                  <span> at Grainger, working on large-scale e-commerce and product design. I've had the privilege of working for giants like Ford Motor Company, Lincoln, and Caterpillar, where I've spent nearly twenty years creating digital experiences across the web and mobile applications.</span>
                </p>
                <p className="mb-0">&nbsp;</p>
                <p>Oak House is where I still get to do broad work, by designing and building websites from start to finish. I never take on more than one project at at time, and I only work for local businesses that need something clean, reliable, and easy to manage. It keeps me close to my roots and lets me help people who just need it done right.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

