import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import story4 from "@/assets/story-4.jpg";
import story5 from "@/assets/story-5.jpg";
import story6 from "@/assets/story-6.jpg";

/**
 * CMS-style content collection.
 * Each entry is a self-contained Story document — designed so it can later
 * be swapped for a headless CMS (Sanity, Contentful, Supabase) without
 * changing the components that consume it.
 */
export type Story = {
  /** Unique slug, also used as the URL identifier */
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  coverImage: string;
  coverAlt: string;
  category: "Education" | "Healthcare" | "Nutrition" | "Community";
  childName: string;
  country: string;
  publishedAt: string; // ISO date
  readingTime: number; // minutes
  author: {
    name: string;
    role: string;
  };
};

export const stories: Story[] = [
  {
    slug: "amina-graduates-university",
    title: "From a Mud Classroom to University Graduate",
    excerpt:
      "Sponsored at age 7, Amina just became the first person in her village to earn a university degree.",
    body: [
      "When we first met Amina in 2014, she was sharing a single textbook with four classmates in a one-room schoolhouse in rural northern Uganda.",
      "Through nine years of consistent sponsorship, she received uniforms, books, school fees, and the mentorship that allowed her to dream beyond her village.",
      "Today, Amina holds a Bachelor's degree in Public Health from Makerere University and has returned home to lead a community clinic — caring for the very neighbors who watched her grow up.",
    ],
    coverImage: story1,
    coverAlt: "Amina smiling in graduation cap and gown",
    category: "Education",
    childName: "Amina",
    country: "Uganda",
    publishedAt: "2024-11-12",
    readingTime: 4,
    author: { name: "Sarah Mwangi", role: "Field Coordinator" },
  },
  {
    slug: "kofi-soccer-scholarship",
    title: "Kofi's Winning Goal: A Scholarship",
    excerpt:
      "A pair of donated cleats and three meals a day were all it took for Kofi to chase a dream he didn't know he had.",
    body: [
      "Kofi joined our nutrition program in 2019 — underweight, quiet, and missing more school days than he attended.",
      "Within two years, regular meals and access to our after-school sports program transformed his energy and his confidence.",
      "Last month, Kofi won a full athletic scholarship to a regional secondary school in Kampala. He told us he wants to coach kids in his village one day.",
    ],
    coverImage: story2,
    coverAlt: "Kofi holding a soccer trophy outside his school",
    category: "Nutrition",
    childName: "Kofi",
    country: "Uganda",
    publishedAt: "2024-09-28",
    readingTime: 3,
    author: { name: "Daniel Osei", role: "Programs Lead" },
  },
  {
    slug: "neema-loves-to-read",
    title: "The Library That Changed Neema's Life",
    excerpt:
      "When we built a small library beside her school, Neema was the first child through the door — and she hasn't stopped reading since.",
    body: [
      "Neema's village had no library, no bookshop, and no books at home. She learned to read using chalk on a slate.",
      "In 2023, donor funding helped us open a 600-book community library serving four neighboring schools.",
      "Neema now reads three books a week and runs an informal storytelling circle for younger children every Saturday morning.",
    ],
    coverImage: story3,
    coverAlt: "Neema reading a book under a tree",
    category: "Education",
    childName: "Neema",
    country: "Uganda",
    publishedAt: "2024-08-04",
    readingTime: 3,
    author: { name: "Grace Wanjiku", role: "Education Director" },
  },
  {
    slug: "school-meals-transform-learning",
    title: "How One Hot Meal Changed an Entire Classroom",
    excerpt:
      "When we launched daily lunches at Bukoto Primary, attendance jumped 64% in a single term.",
    body: [
      "Hunger was the silent reason children skipped school. Families couldn't always provide a midday meal, and learning on an empty stomach is nearly impossible.",
      "Donors funded a kitchen, a cook, and three months of supplies. By week two, every child was showing up — early.",
      "Today, 240 children at Bukoto Primary eat together every school day. Test scores have climbed alongside their plates.",
    ],
    coverImage: story4,
    coverAlt: "Ugandan children eating a healthy meal together at school",
    category: "Nutrition",
    childName: "Bukoto Primary",
    country: "Uganda",
    publishedAt: "2024-07-19",
    readingTime: 3,
    author: { name: "Esther Namutebi", role: "Nutrition Lead" },
  },
  {
    slug: "rosemary-clinic-saved-her",
    title: "The Vaccination That Saved Rosemary's Life",
    excerpt:
      "A simple measles shot — funded by a single donor — kept Rosemary in school and out of the hospital.",
    body: [
      "Rosemary lives 14 kilometers from the nearest health post. For years, vaccinations were a journey her family couldn't afford to make.",
      "Our mobile clinic now visits her village monthly. Last year, it caught a measles outbreak before it could spread.",
      "Rosemary is healthy, in Primary 4, and dreams of becoming a nurse like the woman who vaccinated her.",
    ],
    coverImage: story5,
    coverAlt: "Ugandan girl receiving care from a kind nurse at a rural clinic",
    category: "Healthcare",
    childName: "Rosemary",
    country: "Uganda",
    publishedAt: "2024-06-02",
    readingTime: 3,
    author: { name: "Dr. Joseph Kato", role: "Medical Director" },
  },
  {
    slug: "moses-top-of-his-class",
    title: "Moses Topped His District — Twice",
    excerpt:
      "From the back of an overcrowded classroom to district scholar of the year, Moses is rewriting his story.",
    body: [
      "Moses was sponsored at age 6. His mother, a single parent, couldn't have kept him in school without that help.",
      "With consistent support — books, fees, uniforms, and a quiet place to study — Moses has finished top of his district two years running.",
      "He's now preparing for secondary school exams with his sights set on engineering. His sponsor still writes to him every month.",
    ],
    coverImage: story6,
    coverAlt: "Ugandan boy proudly holding his school certificate",
    category: "Education",
    childName: "Moses",
    country: "Uganda",
    publishedAt: "2024-05-15",
    readingTime: 4,
    author: { name: "Grace Wanjiku", role: "Education Director" },
  },
];

export const getStoryBySlug = (slug: string) =>
  stories.find((s) => s.slug === slug);
