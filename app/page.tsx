import  { CTASection }  from "./components/CTA";
import WhyThisIsDifferentSection from "./components/Different";
import { SpecialOfferSection } from "./components/FinalPush";
import Hero from "./components/Hero";
import ScarcityUrgency from "./components/SacrcityUrgency";
import { OfferSection } from "./components/TheOffer";
import TheSolution from "./components/TheSolution";
import TwistTheKnife from "./components/TwistTheKnife";

export default function Home() {
  return (
    <>
      <Hero />
      <TwistTheKnife />
      <TheSolution />
      <OfferSection />
      <CTASection />
      <ScarcityUrgency />
      <WhyThisIsDifferentSection />
      <SpecialOfferSection />
      
      
    </>
  );
}
