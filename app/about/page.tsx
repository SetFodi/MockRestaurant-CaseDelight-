import { PageWrapper } from "@/components/page-wrapper";
import { StorySection } from "@/components/sections/about/story";
import { TeamSection } from "@/components/sections/about/team";
import { ExperienceTimeline } from "@/components/sections/about/experience-timeline";

export const metadata = {
  title: "About Casa Delight",
  description:
    "Discover the story, artisans, and philosophy shaping Casa Delight’s modern Georgian fine dining journey.",
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <StorySection />
      <ExperienceTimeline />
      <TeamSection />
    </PageWrapper>
  );
}

