import need1 from "@/assets/child-need-1.jpg";
import need2 from "@/assets/child-need-2.jpg";
import smile1 from "@/assets/child-smile-1.jpg";
import smile2 from "@/assets/child-smile-2.jpg";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const WhyHelp = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Why Your Help Matters
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
            From hardship to hope — every child deserves a chance.
          </h2>
          <p className="text-lg text-muted-foreground">
            Across rural Uganda, thousands of children walk miles for water, sleep hungry, and miss school. With your support, that story changes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Reality */}
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-xs font-bold tracking-wider uppercase">
                The Reality
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-4">
                A childhood interrupted
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-2xl shadow-card aspect-[4/5]">
                <img src={need1} alt="Young Ugandan child sitting outside a mud-brick home" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" />
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-card aspect-[4/5]">
                <img src={need2} alt="Ugandan girl carrying a heavy jerrycan of water on a rural path" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" />
              </div>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3"><span className="text-destructive font-bold">•</span><span><strong className="text-foreground">1 in 3 children</strong> in rural Uganda is malnourished.</span></li>
              <li className="flex gap-3"><span className="text-destructive font-bold">•</span><span>Many walk <strong className="text-foreground">over 5km daily</strong> to fetch unsafe water.</span></li>
              <li className="flex gap-3"><span className="text-destructive font-bold">•</span><span>Thousands are <strong className="text-foreground">orphaned</strong> with no access to school or healthcare.</span></li>
            </ul>
          </div>

          {/* Hope */}
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase">
                The Hope You Create
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-4">
                A future restored
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-2xl shadow-card aspect-[4/5]">
                <img src={smile2} alt="Ugandan boy smiling brightly after receiving support" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" />
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-card aspect-[4/5]">
                <img src={smile1} alt="Ugandan school children laughing together in a classroom" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" />
              </div>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3"><span className="text-primary font-bold">•</span><span><strong className="text-foreground">Hot meals daily</strong> in our schools and orphan homes.</span></li>
              <li className="flex gap-3"><span className="text-primary font-bold">•</span><span><strong className="text-foreground">Clean water wells</strong> serving entire villages.</span></li>
              <li className="flex gap-3"><span className="text-primary font-bold">•</span><span><strong className="text-foreground">Free education &amp; healthcare</strong> for every sponsored child.</span></li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-14">
          <Button asChild size="lg" variant="hero">
            <a href="#donate">
              <Heart className="mr-2 h-5 w-5" />
              Be Their Reason to Smile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyHelp;