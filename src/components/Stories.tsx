import { Calendar, Clock, ArrowRight } from "lucide-react";
import { stories } from "@/content/stories";
import { Button } from "@/components/ui/button";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const Stories = () => {
  return (
    <section id="stories" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-6xl mx-auto mb-14">
          <div className="max-w-2xl">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
              Success Stories
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Real lives. Real change.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Every donation writes a new chapter. Read how sponsored children are
              shaping their futures — and their communities.
            </p>
          </div>
          <Button variant="outline" size="lg" className="self-start md:self-end">
            View all stories <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stories.map((story) => (
            <article
              key={story.slug}
              className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-warm transition-smooth border border-border flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                <img
                  src={story.coverImage}
                  alt={story.coverAlt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
                />
                <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">
                  {story.category}
                </span>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(story.publishedAt)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {story.readingTime} min read
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-smooth">
                  {story.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  {story.excerpt}
                </p>

                <div className="flex items-center justify-between pt-5 border-t border-border">
                  <div className="text-xs">
                    <p className="font-semibold text-foreground">
                      {story.author.name}
                    </p>
                    <p className="text-muted-foreground">{story.author.role}</p>
                  </div>
                  <a
                    href={`#story-${story.slug}`}
                    aria-label={`Read ${story.title}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition-smooth"
                  >
                    Read story <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
