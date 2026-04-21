import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import ImpactStats from "@/components/ImpactStats";
import OurWork from "@/components/OurWork";
import MeetChildren from "@/components/MeetChildren";
import Gallery from "@/components/Gallery";
import Testimonial from "@/components/Testimonial";
import Stories from "@/components/Stories";
import Partners from "@/components/Partners";
import DonationTiers from "@/components/DonationTiers";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PhoneCallButton from "@/components/PhoneCallButton";

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
      <Testimonial />
      <Stories />
      <Partners />
      <DonationTiers />
      <Footer />
      <WhatsAppButton />
      <PhoneCallButton />
    </main>
  );
};

export default Index;
