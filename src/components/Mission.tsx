import { BookOpen, Stethoscope, Utensils } from "lucide-react";

const pillars = [
  { icon: BookOpen, title: "Education", text: "Schools, supplies, and scholarships that open doors for life." },
  { icon: Stethoscope, title: "Healthcare", text: "Vaccinations, medicine, and clinics within reach of every village." },
  { icon: Utensils, title: "Nutrition", text: "Daily meals so children can learn, play, and grow strong." },
];

const Mission = () => {
  return (
    <section id="mission" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Our Mission</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Founded on a simple belief — every child deserves a future.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            George Charity Organisation was born in 2014 from a single classroom in rural Uganda. Today, we stand alongside thousands of families across the country, delivering the essentials that allow children not just to survive — but to thrive.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-soft transition-smooth border border-border">
              <div className="h-14 w-14 rounded-xl gradient-green flex items-center justify-center text-primary-foreground mb-5">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
