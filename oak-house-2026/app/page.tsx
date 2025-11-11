import Nav from '@/components/nav';
import Hero from '@/components/hero';
import WhoIAm from '@/components/who-i-am';
import WhatIDo from '@/components/what-i-do';
import RecentWork from '@/components/recent-work';
import HowICanHelp from '@/components/how-i-can-help';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main id="main-content">
      <Nav />
      <Hero />
      <WhoIAm />
      <WhatIDo />
      <RecentWork />
      <HowICanHelp />
      <Footer />
      </main>
  );
}
