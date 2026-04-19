import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import ImpactStats from "@/components/ImpactStats";
import MeetChildren from "@/components/MeetChildren";
import Gallery from "@/components/Gallery";
import Stories from "@/components/Stories";
import DonationTiers from "@/components/DonationTiers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Mission />
      <ImpactStats />
      <MeetChildren />
      <Gallery />
      <Stories />
      <DonationTiers />
      <Footer />
    </main>
  );
};

export default Index;
