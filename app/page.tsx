import Content from "./components/Content";
import CTA from "./components/CTA";
import WhyThisIsDifferentSection from "./components/Different";
import FAQSection from "./components/FAQSection";
import Hero from "./components/Hero";
import TheSolution from "./components/TheSolution";
import TwistTheKnife from "./components/TwistTheKnife";
import WhatYoullLearnSection from "./components/WhatYoullLearn";

export default function Home() {
  return (
    <>
      <Hero />
      <TwistTheKnife />
      <TheSolution />
      <WhyThisIsDifferentSection />
      <WhatYoullLearnSection />
      <Content />
      <FAQSection />
      <CTA />
    </>
  );
}
