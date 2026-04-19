import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";

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
      "When we first met Amina in 2014, she was sharing a single textbook with four classmates in a one-room schoolhouse in rural Tanzania.",
      "Through nine years of consistent sponsorship, she received uniforms, books, school fees, and the mentorship that allowed her to dream beyond her village.",
      "Today, Amina holds a Bachelor's degree in Public Health and has returned home to lead a community clinic — caring for the very neighbors who watched her grow up.",
    ],
    coverImage: story1,
    coverAlt: "Amina smiling in graduation cap and gown",
    category: "Education",
    childName: "Amina",
    country: "Tanzania",
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
      "Last month, Kofi won a full athletic scholarship to a regional secondary school. He told us he wants to coach kids in his village one day.",
    ],
    coverImage: story2,
    coverAlt: "Kofi holding a soccer trophy outside his school",
    category: "Nutrition",
    childName: "Kofi",
    country: "Ghana",
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
    country: "Kenya",
    publishedAt: "2024-08-04",
    readingTime: 3,
    author: { name: "Grace Wanjiku", role: "Education Director" },
  },
];

export const getStoryBySlug = (slug: string) =>
  stories.find((s) => s.slug === slug);
