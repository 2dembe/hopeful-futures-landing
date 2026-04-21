import sponsor1 from "@/assets/sponsor-child-1.jpg";
import sponsor2 from "@/assets/sponsor-child-2.jpg";
import { Button } from "@/components/ui/button";

const children = [
  {
    name: "Brian",
    age: 8,
    country: "Uganda",
    dream: "wants to become a doctor and care for his village",
    img: sponsor1,
  },
  {
    name: "Aisha",
    age: 9,
    country: "Uganda",
    dream: "loves reading and dreams of becoming a teacher",
    img: sponsor2,
  },
];

const MeetChildren = () => {
  return (
    <section id="children" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Meet The Children</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Behind every number is a name.</h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Sponsor a child and walk alongside them on their journey — through letters, photos, and life-changing support.
          </p>
        </div>

        <ul
          role="list"
          aria-label="Children currently waiting for a sponsor"
          className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {children.map((child) => (
            <li key={child.name} className="list-none">
            <article
              aria-labelledby={`child-${child.name}-name`}
              className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-warm transition-smooth border border-border focus-within:ring-4 focus-within:ring-accent/40 focus-within:ring-offset-2 focus-within:ring-offset-background"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={child.img}
                  alt={`Portrait of ${child.name}, a ${child.age}-year-old child from ${child.country} who ${child.dream}.`}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
                />
              </div>
              <div className="p-7">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 id={`child-${child.name}-name`} className="text-2xl font-bold text-foreground">{child.name}</h3>
                  <span className="text-sm text-muted-foreground">
                    <span className="sr-only">Age </span>{child.age} ·&nbsp;{child.country}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{child.name} {child.dream}.</p>
                <Button
                  asChild
                  variant="default"
                  className="w-full focus-visible:ring-4 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                >
                  <a href="#donate" aria-label={`Sponsor ${child.name}, a ${child.age}-year-old from ${child.country}`}>
                    Sponsor {child.name}
                  </a>
                </Button>
              </div>
            </article>
            </li>
          ))}
        </ul>

        <p className="text-center text-muted-foreground mt-12 max-w-xl mx-auto">
          Many more children are waiting for a sponsor.{" "}
          <a
            href="#donate"
            className="text-accent font-semibold underline underline-offset-4 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Contact us to meet them
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default MeetChildren;
