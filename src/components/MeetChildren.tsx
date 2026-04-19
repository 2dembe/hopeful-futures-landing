import child1 from "@/assets/child-1.jpg";
import child2 from "@/assets/child-2.jpg";
import child3 from "@/assets/child-3.jpg";
import { Button } from "@/components/ui/button";

const children = [
  { name: "Amani", age: 8, country: "Kenya", dream: "wants to become a doctor", img: child1 },
  { name: "Zara", age: 9, country: "Uganda", dream: "loves reading and writing stories", img: child2 },
  { name: "Kwame", age: 7, country: "Ghana", dream: "dreams of being a teacher", img: child3 },
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

        <div className="grid md:grid-cols-3 gap-8">
          {children.map((child) => (
            <article
              key={child.name}
              className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-warm transition-smooth border border-border"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={child.img}
                  alt={`${child.name}, age ${child.age}, from ${child.country}`}
                  loading="lazy"
                  width={768}
                  height={960}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
                />
              </div>
              <div className="p-7">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-2xl font-bold text-foreground">{child.name}</h3>
                  <span className="text-sm text-muted-foreground">Age {child.age} · {child.country}</span>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{child.name} {child.dream}.</p>
                <Button variant="default" className="w-full">Sponsor {child.name}</Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetChildren;
