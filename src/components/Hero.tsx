import heroImage from "@/assets/hero-children.jpg";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Smiling African children in a sunlit classroom"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 gradient-hero" />

      <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground animate-fade-up">
        <p className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
          George Charity Organisation
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] max-w-5xl mx-auto">
          Changing Futures, <span className="text-accent">One Child</span> at a Time.
        </h1>
        <p className="mt-8 text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
          We bring education, healthcare, and nutrition to children across Africa — turning hope into lasting change.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl">
            <Heart className="mr-2 h-5 w-5" /> Donate Now
          </Button>
          <Button variant="outline-hero" size="xl">
            Learn Our Story
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 text-xs tracking-widest uppercase animate-fade-in">
        Scroll to explore
      </div>
    </section>
  );
};

export default Hero;
