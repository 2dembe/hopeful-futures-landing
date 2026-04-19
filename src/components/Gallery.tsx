import child1 from "@/assets/child-1.jpg";
import child2 from "@/assets/child-2.jpg";
import child4 from "@/assets/child-4.jpg";
import child5 from "@/assets/child-5.jpg";
import child6 from "@/assets/child-6.jpg";
import groupImg from "@/assets/children-group.jpg";

const images = [
  { src: groupImg, alt: "Group of joyful Ugandan children" },
  { src: child4, alt: "Smiling Ugandan boy in school uniform" },
  { src: child6, alt: "Young Ugandan girl with braided hair smiling" },
  { src: child5, alt: "Ugandan boy holding a soccer ball" },
  { src: child1, alt: "Young Ugandan boy in polo shirt smiling" },
  { src: child2, alt: "Young Ugandan girl holding a book" },
];

const Gallery = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Faces of Hope
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            The smiles your generosity makes possible.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl shadow-card group ${
                i === 0 ? "col-span-2 row-span-2 lg:col-span-3 lg:row-span-2 aspect-square lg:aspect-auto" : "aspect-square"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-smooth" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
