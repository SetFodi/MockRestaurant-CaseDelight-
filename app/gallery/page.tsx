import { PageWrapper } from "@/components/page-wrapper";
import { GalleryMasonry } from "@/components/sections/gallery/gallery-masonry";

export const metadata = {
  title: "Gallery",
  description:
    "Immerse yourself in Casa Delight’s visual journey—warm lighting, plated artistry, and cinematic ambiance.",
};

export default function GalleryPage() {
  return (
    <PageWrapper>
      <GalleryMasonry />
    </PageWrapper>
  );
}

