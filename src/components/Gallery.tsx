import child1 from "@/assets/child-1.jpg";
import child2 from "@/assets/child-2.jpg";
import child4 from "@/assets/child-4.jpg";
import child5 from "@/assets/child-5.jpg";
import child6 from "@/assets/child-6.jpg";
import child7 from "@/assets/child-7.jpg";
import child8 from "@/assets/child-8.jpg";
import groupImg from "@/assets/children-group.jpg";
import smile1 from "@/assets/child-smile-1.jpg";
import smile2 from "@/assets/child-smile-2.jpg";

const images = [
  { src: groupImg, alt: "Group of joyful Ugandan children" },
  { src: smile2, alt: "Close-up of a Ugandan boy beaming with a bright smile" },
  { src: child4, alt: "Smiling Ugandan boy in school uniform" },
  { src: child6, alt: "Young Ugandan girl with braided hair smiling" },
  { src: smile1, alt: "Group of Ugandan school children laughing together in class" },
  { src: child5, alt: "Ugandan boy holding a soccer ball" },
  { src: child1, alt: "Young Ugandan boy in polo shirt smiling" },
  { src: child2, alt: "Young Ugandan girl holding a book" },
  { src: child7, alt: "Ugandan girl reading a book at golden hour" },
  { src: child8, alt: "Ugandan boy laughing in a sunlit classroom" },
];

const Gallery = () => {
  return (
    <section aria-labelledby="gallery-heading" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Faces of Hope
          </p>
          <h2 id="gallery-heading" className="text-4xl md:text-5xl font-bold text-foreground">
            The smiles your generosity makes possible.
          </h2>
        </div>

        <ul
          role="list"
          aria-label="Photo gallery of children supported by George Charity Organisation"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 max-w-6xl mx-auto"
        >
          {images.map((img, i) => (
            <li
              key={i}
              className={`list-none ${
                i === 0 ? "col-span-2 row-span-2 lg:col-span-3 lg:row-span-2" : ""
              }`}
            >
              <figure
                tabIndex={0}
                aria-label={img.alt}
                className={`relative overflow-hidden rounded-2xl shadow-card group cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background h-full ${
                  i === 0 ? "aspect-square lg:aspect-auto" : "aspect-square"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover group-hover:scale-110 group-focus:scale-110 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 group-focus:bg-primary/20 transition-smooth" aria-hidden="true" />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
