import Image from 'next/image';
import AnimatedLink from './animated-link';

interface Project {
  image: string;
  title: string;
  description: string;
  link: string;
}

export default function RecentWork() {
  const projects: Project[] = [
    {
      image: '/images/daily-rundown-screenshot.png',
      title: 'AI Daily Rundown',
      description: 'AI daily news aggregator and nightly newsletter built with full agentic automation and hands-free daily updates that populates itself with news every day.',
      link: 'https://www.aidailyrundown.com',
    },
    {
      image: '/images/jacaranda-screenshot.png',
      title: 'Jacaranda Yoga',
      description: "A local yoga studio needed a website that wasn't cookie-cutter. A site that represents their brand and the persona of their business, and appeals to a broad audience.",
      link: 'https://www.jacarandapeoria.com',
    },
    {
      image: '/images/lacon-chamber-screenshot.png',
      title: 'Lacon Chamber',
      description: 'The Chamber of Commerce came to me because I had worked with a number of board members in the past. I still maintain this site weekly with news and updates.',
      link: 'https://www.laconchamber.org',
    },
  ];

  return (
    <section className="py-14 md:py-16 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Heading with yellow underline */}
        <h2 className="heading-with-underline font-extrabold leading-[1.1] text-[var(--color-oak)] text-4xl md:text-5xl lg:text-[48px] mb-8 md:mb-8 lg:mb-8">
          Recent Work
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-6 pt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[var(--color-birch)] flex flex-col gap-6 p-4 rounded-2xl shadow-[4.565px_12.172px_125px_0px_rgba(0,0,0,0.08),2.959px_7.889px_73.206px_0px_rgba(0,0,0,0.06),1.758px_4.689px_39.815px_0px_rgba(0,0,0,0.05),0.913px_2.434px_20.313px_0px_rgba(0,0,0,0.04),0.372px_0.992px_10.185px_0px_rgba(0,0,0,0.03),0.085px_0.225px_4.919px_0px_rgba(0,0,0,0.02)] h-full"
            >
              {/* Image */}
              <div className="aspect-[418/280] border border-[var(--color-oak)] relative rounded-lg overflow-hidden flex-shrink-0 w-full">
                <Image
                  src={project.image}
                  alt={`${project.title} website screenshot`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 flex-1">
                <h3 className="font-bold leading-[1.2] text-[var(--color-oak)] text-2xl">
                  {project.title}
                </h3>
                <p className="font-light leading-[1.5] text-[var(--color-oak)] text-base flex-1">
                  {project.description}
                </p>
                <div className="mt-2">
                  <AnimatedLink text="Visit Site" href={project.link} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

