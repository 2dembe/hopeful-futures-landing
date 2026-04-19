import workEducation from "@/assets/work-education.jpg";
import workCommunity from "@/assets/work-community.jpg";
import { GraduationCap, HeartPulse, Sprout, Home, Users, BookMarked } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "Education for Every Child",
    text: "We pay school fees, supply books and uniforms, and run after-school tutoring for over 1,200 children across 15 partner schools in rural Uganda.",
  },
  {
    icon: HeartPulse,
    title: "Mobile Healthcare Clinics",
    text: "Our two mobile clinics travel to 32 villages each month, delivering vaccinations, malaria treatment, dental care, and maternal health support.",
  },
  {
    icon: Sprout,
    title: "Daily School Meals",
    text: "A hot, nutritious lunch every school day. Hunger should never be the reason a child can't learn — and now, in our schools, it isn't.",
  },
  {
    icon: Home,
    title: "Safe Homes for Orphans",
    text: "Our two family-style children's homes in Kampala give 48 orphaned children stable shelter, loving caregivers, and a path forward.",
  },
  {
    icon: Users,
    title: "Empowering Mothers",
    text: "We train single mothers in tailoring, agriculture, and small-business skills — because a thriving mother means a thriving child.",
  },
  {
    icon: BookMarked,
    title: "Community Libraries",
    text: "Six community libraries opened since 2020, serving more than 4,000 readers — many of whom had never held a book before.",
  },
];

const OurWork = () => {
  return (
    <section id="work" className="py-24 md:py-32 gradient-section">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={workEducation}
              alt="Ugandan children learning in a sunlit classroom"
              loading="lazy"
              width={1024}
              height={768}
              className="rounded-2xl shadow-card aspect-[3/4] object-cover w-full mt-8"
            />
            <img
              src={workCommunity}
              alt="Volunteers distributing supplies to families in a Ugandan village"
              loading="lazy"
              width={1024}
              height={768}
              className="rounded-2xl shadow-card aspect-[3/4] object-cover w-full"
            />
          </div>
          <div>
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
              Our Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Six programs. One unwavering promise.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-5">
              From the classroom to the clinic, from the dinner table to the football
              pitch — we walk beside Ugandan children at every step. Our work spans
              education, healthcare, nutrition, family support, and community
              empowerment because no single program changes a life on its own.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every program is run by Ugandans, in Uganda, for Ugandan children. Local
              leadership is not optional — it is the only way lasting change happens.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {programs.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-card rounded-2xl p-7 border border-border shadow-card hover:shadow-warm hover:-translate-y-1 transition-smooth"
            >
              <div className="h-12 w-12 rounded-xl gradient-green flex items-center justify-center text-primary-foreground mb-5">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
