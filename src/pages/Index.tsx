import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import ImpactStats from "@/components/ImpactStats";
import OurWork from "@/components/OurWork";
import MeetChildren from "@/components/MeetChildren";
import Gallery from "@/components/Gallery";
import Stories from "@/components/Stories";
import DonationTiers from "@/components/DonationTiers";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Mission />
      <ImpactStats />
      <OurWork />
      <MeetChildren />
      <Gallery />
      <Stories />
      <DonationTiers />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
