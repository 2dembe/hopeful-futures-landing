import childrenPair from "@/assets/children-pair.jpg";
import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img
        src={childrenPair}
        alt="Two Ugandan children smiling together"
        loading="lazy"
        width={1280}
        height={768}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 gradient-hero" />

      <div className="relative container mx-auto px-6 text-center text-primary-foreground">
        <Quote className="h-12 w-12 mx-auto text-accent mb-6 opacity-80" />
        <blockquote className="max-w-3xl mx-auto text-2xl md:text-4xl font-serif font-semibold leading-snug">
          "Sponsoring Esther changed her life — and mine. Every letter she sends me
          is proof that small acts ripple into the future."
        </blockquote>
        <div className="mt-8 text-primary-foreground/80">
          <p className="font-semibold">Margaret L.</p>
          <p className="text-sm">Sponsor since 2018 · Toronto, Canada</p>
        </div>
        <div className="mt-10">
          <a href="#donate">
            <Button variant="hero" size="xl">
              <Heart className="mr-2 h-5 w-5" /> Sponsor a Child Today
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
