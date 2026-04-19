import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import ImpactStats from "@/components/ImpactStats";
import MeetChildren from "@/components/MeetChildren";
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
      <DonationTiers />
      <Footer />
    </main>
  );
};

export default Index;
