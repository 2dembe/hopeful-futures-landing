import { Award, Globe, ShieldCheck, Heart, BadgeCheck, Sparkles } from "lucide-react";

const partners = [
  { name: "United Hope Foundation", icon: Heart },
  { name: "Global Education Fund", icon: Globe },
  { name: "Children First International", icon: Sparkles },
  { name: "Trust Africa Network", icon: ShieldCheck },
  { name: "Maple Leaf Charities", icon: Award },
  { name: "BrightFuture Partners", icon: BadgeCheck },
];

const accreditations = [
  "Registered NGO — Uganda Reg. No. 80/12345",
  "GuideStar Gold Transparency 2024",
  "Charity Navigator 4-Star Rated",
  "GDPR & Donor-Privacy Compliant",
];

const Partners = () => {
  return (
    <section className="py-20 md:py-24 bg-background border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Trusted Partners
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Backed by leaders in global giving.
          </h2>
          <p className="mt-4 text-muted-foreground">
            We're proud to partner with international organisations who share our
            commitment to transparency and impact.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto mb-14">
          {partners.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="group flex flex-col items-center justify-center text-center gap-3 p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-card transition-smooth"
            >
              <Icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-smooth" />
              <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-smooth leading-tight">
                {name}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 max-w-4xl mx-auto">
          {accreditations.map((a) => (
            <div key={a} className="flex items-center gap-2 text-sm text-muted-foreground">
              <BadgeCheck className="h-4 w-4 text-primary flex-shrink-0" />
              <span>{a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
