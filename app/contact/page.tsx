import { PageWrapper } from "@/components/page-wrapper";
import { ContactSection } from "@/components/sections/contact/contact-section";

export const metadata = {
  title: "Contact & Reservations",
  description:
    "Reserve a table at Casa Delight, inquire about private dining, and connect with our concierge team.",
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <ContactSection />
    </PageWrapper>
  );
}

