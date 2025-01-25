import Content from "./components/Content";
import CTA from "./components/CTA";
import FAQSection from "./components/FAQSection";
import Hero from "./components/Hero";
import WhatYoullLearnSection from "./components/WhatYoullLearn";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatYoullLearnSection />
      <Content />
      <FAQSection />
      <CTA />
    </>
  );
}
