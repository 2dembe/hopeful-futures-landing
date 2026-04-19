const stats = [
  { value: "1,000+", label: "Children Fed" },
  { value: "15", label: "Schools Built" },
  { value: "500+", label: "Healthcare Kits" },
  { value: "32", label: "Villages Reached" },
];

const ImpactStats = () => {
  return (
    <section id="impact" className="py-24 md:py-32 gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Our Impact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Real change, measured in lives.</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-card rounded-2xl p-8 text-center shadow-card hover:shadow-warm hover:-translate-y-1 transition-smooth border border-border"
            >
              <div className="text-5xl md:text-6xl font-serif font-bold text-primary mb-3">{s.value}</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
