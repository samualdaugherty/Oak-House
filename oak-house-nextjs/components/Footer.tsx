'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-[#f9f9f9] mt-20 pt-8 pb-4">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="mb-8 lg:mb-0">
            <Link href="/">
              <Image
                src="/img/footer-logo.svg"
                alt="Oak House Co."
                width={160}
                height={60}
                className="max-w-[160px] h-auto -mt-4"
                unoptimized
              />
            </Link>
          </div>
          <div className="text-center lg:text-right w-full lg:w-auto">
            <div className="mb-4">
              <Link href="/marketing-services" className="text-[#ffc807] hover:text-[#f9f9f9] mr-8 no-underline">
                Marketing
              </Link>
              <Link href="/web-services" className="text-[#ffc807] hover:text-[#f9f9f9] mr-8 no-underline">
                Websites
              </Link>
              <Link href="/process" className="text-[#ffc807] hover:text-[#f9f9f9] mr-8 no-underline">
                Process
              </Link>
              <Link
                href="mailto:hello@oakhouseco.com"
                className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-100 no-underline inline-block"
              >
                Contact
              </Link>
            </div>
            <div className="text-sm mt-8 lg:mt-0">
              <span className="text-gray-400 font-montserrat mr-4 pr-12 bg-[url('/img/social-arrow.png')] bg-contain bg-right bg-no-repeat">
                FOLLOW US AROUND
              </span>
              <div className="mt-2 inline-block">
                <a
                  href="https://www.facebook.com/Oak-House-Co-112187190323314"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white mx-2"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/oakhousecompany/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white mx-2"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/OakHouseCo1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white mx-2"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/oak-house-co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white mx-2"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center lg:text-left">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} The Oak House Companies LLC
          </p>
        </div>
      </div>
    </footer>
  );
}

