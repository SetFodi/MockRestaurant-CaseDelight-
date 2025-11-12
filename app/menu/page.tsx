import { PageWrapper } from "@/components/page-wrapper";
import { MenuGrid } from "@/components/sections/menu/menu-grid";

export const metadata = {
  title: "Menu",
  description:
    "Explore Casa Delight’s Georgian-inspired menu featuring elevated starters, mains, desserts, and curated drinks.",
};

export default function MenuPage() {
  return (
    <PageWrapper>
      <MenuGrid />
    </PageWrapper>
  );
}

