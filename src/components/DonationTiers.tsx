import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    price: "$10",
    title: "Monthly Meal",
    description: "Provide nutritious daily meals for one child for a full month.",
    features: ["30 hot meals", "Nutritional supplements", "Monthly photo update"],
  },
  {
    price: "$50",
    title: "School Supplies",
    description: "Equip a child with everything they need for a year of learning.",
    features: ["Books & stationery", "Uniform & backpack", "Tuition support"],
    featured: true,
  },
  {
    price: "$100",
    title: "Medical Support",
    description: "Cover essential healthcare and emergency medical care.",
    features: ["Vaccinations", "Doctor visits", "Emergency care fund"],
  },
];

const DonationTiers = () => {
  return (
    <section id="donate" className="py-24 md:py-32 gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Make a Difference</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Choose how you want to help.</h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Every contribution — big or small — moves a child closer to a brighter future.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((t) => (
            <div
              key={t.title}
              className={`relative rounded-3xl p-8 transition-smooth border ${
                t.featured
                  ? "bg-primary text-primary-foreground border-primary shadow-warm md:-translate-y-4"
                  : "bg-card text-foreground border-border shadow-card hover:shadow-soft"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold tracking-wider uppercase px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className={`text-xl font-semibold ${t.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {t.title}
              </h3>
              <div className="mt-3 mb-5">
                <span className="text-5xl font-serif font-bold">{t.price}</span>
                <span className={`ml-1 ${t.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>/month</span>
              </div>
              <p className={`mb-6 leading-relaxed ${t.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {t.description}
              </p>
              <ul className="space-y-3 mb-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${t.featured ? "text-accent" : "text-primary"}`} />
                    <span className={t.featured ? "text-primary-foreground/90" : "text-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant={t.featured ? "accent" : "default"} className="w-full">
                Donate {t.price}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationTiers;
