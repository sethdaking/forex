import WhyThisIsDifferentSection from "./components/Different";
import { SpecialOfferSection } from "./components/FinalPush";
import Hero from "./components/Hero";
import { CourseCards } from "./components/Pricing";
import ScarcityUrgency from "./components/SacrcityUrgency";
import TheSolution from "./components/TheSolution";
import TwistTheKnife from "./components/TwistTheKnife";

export default function Home() {
  return (
    <>
      <Hero />
      <TwistTheKnife />
      <TheSolution />
      <ScarcityUrgency />
      <WhyThisIsDifferentSection />
      <CourseCards />
      <SpecialOfferSection />
      
      
    </>
  );
}
