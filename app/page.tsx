import { PageWrapper } from "@/components/page-wrapper";
import { Hero } from "@/components/sections/home/hero";
import { StoryHighlights } from "@/components/sections/home/story-highlights";
import { SignatureDishes } from "@/components/sections/home/signature-dishes";
import { Experiences } from "@/components/sections/home/experiences";
import { ReservationCTA } from "@/components/sections/home/reservation-cta";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <StoryHighlights />
      <SignatureDishes />
      <Experiences />
      <ReservationCTA />
    </PageWrapper>
  );
}
