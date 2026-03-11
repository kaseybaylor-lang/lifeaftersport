// Job board data structures and types

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "internship" | "full-time";
  remote: "remote" | "hybrid" | "on-site";
  industry: string;
  athleteFriendly: boolean;
  description: string;
  requirements: string[];
  postedDate: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Business Development Intern",
    company: "Nike",
    location: "Portland, OR",
    type: "internship",
    remote: "hybrid",
    industry: "Sports Industry",
    athleteFriendly: true,
    description:
      "Join Nike's Business Development team and help drive growth initiatives. Work alongside former athletes in a fast-paced environment where your competitive edge is valued.",
    requirements: [
      "Currently enrolled in undergraduate or graduate program",
      "Strong communication and presentation skills",
      "Team player with leadership experience",
      "Interest in sports business",
    ],
    postedDate: "2026-03-08",
  },
  {
    id: "2",
    title: "Sports Marketing Coordinator",
    company: "Gatorade",
    location: "Chicago, IL",
    type: "full-time",
    remote: "on-site",
    industry: "Sports Industry",
    athleteFriendly: true,
    description:
      "Lead marketing campaigns for one of the world's most iconic sports brands. Athletic background strongly preferred.",
    requirements: [
      "Bachelor's degree in Marketing or related field",
      "1-2 years marketing experience",
      "Understanding of athletic performance and sports culture",
      "Strong project management skills",
    ],
    postedDate: "2026-03-07",
  },
  {
    id: "3",
    title: "Financial Analyst",
    company: "Goldman Sachs",
    location: "New York, NY",
    type: "full-time",
    remote: "on-site",
    industry: "Business & Finance",
    athleteFriendly: false,
    description:
      "Analyze financial data and support investment decisions in a dynamic team environment.",
    requirements: [
      "Bachelor's degree in Finance, Economics, or related field",
      "Strong analytical and quantitative skills",
      "Proficiency in Excel and financial modeling",
      "Excellent communication skills",
    ],
    postedDate: "2026-03-05",
  },
  {
    id: "4",
    title: "Athletic Trainer - Internship",
    company: "Mayo Clinic",
    location: "Rochester, MN",
    type: "internship",
    remote: "on-site",
    industry: "Healthcare",
    athleteFriendly: true,
    description:
      "Gain hands-on experience working with athletes and active patients in a world-class medical facility.",
    requirements: [
      "Enrolled in CAATE-accredited Athletic Training program",
      "CPR/First Aid certified",
      "Strong interpersonal skills",
      "Passion for sports medicine",
    ],
    postedDate: "2026-03-06",
  },
  {
    id: "5",
    title: "Product Manager - Sports Tech",
    company: "Whoop",
    location: "Boston, MA",
    type: "full-time",
    remote: "hybrid",
    industry: "Technology",
    athleteFriendly: true,
    description:
      "Shape the future of athletic performance technology. We love hiring former athletes who understand our users.",
    requirements: [
      "2+ years product management experience",
      "Athletic background highly preferred",
      "Strong technical aptitude",
      "Data-driven decision maker",
    ],
    postedDate: "2026-03-04",
  },
  {
    id: "6",
    title: "Assistant Coach - Basketball",
    company: "University of Michigan",
    location: "Ann Arbor, MI",
    type: "full-time",
    remote: "on-site",
    industry: "Education & Coaching",
    athleteFriendly: true,
    description:
      "Join one of college basketball's premier programs as an assistant coach. Former college playing experience required.",
    requirements: [
      "College basketball playing experience",
      "Bachelor's degree completed",
      "Strong recruiting network",
      "Excellent communication with student-athletes",
    ],
    postedDate: "2026-03-09",
  },
  {
    id: "7",
    title: "Social Media Manager",
    company: "ESPN",
    location: "Bristol, CT",
    type: "full-time",
    remote: "hybrid",
    industry: "Marketing & Media",
    athleteFriendly: true,
    description:
      "Create engaging content for ESPN's social platforms. Sports knowledge and authentic athlete voice highly valued.",
    requirements: [
      "3+ years social media experience",
      "Deep understanding of sports culture",
      "Creative content creation skills",
      "Analytics-driven approach",
    ],
    postedDate: "2026-03-03",
  },
  {
    id: "8",
    title: "Data Analyst - Performance",
    company: "Catapult Sports",
    location: "Remote",
    type: "full-time",
    remote: "remote",
    industry: "Technology",
    athleteFriendly: true,
    description:
      "Analyze athlete performance data to drive insights for professional sports teams worldwide.",
    requirements: [
      "Bachelor's degree in Statistics, Math, or related field",
      "SQL and Python proficiency",
      "Understanding of sports performance metrics",
      "Strong visualization skills",
    ],
    postedDate: "2026-03-02",
  },
  {
    id: "9",
    title: "Operations Intern",
    company: "Deloitte",
    location: "San Francisco, CA",
    type: "internship",
    remote: "hybrid",
    industry: "Business & Finance",
    athleteFriendly: false,
    description:
      "Support operational excellence initiatives across diverse client engagements.",
    requirements: [
      "Currently enrolled in business-related program",
      "Strong problem-solving skills",
      "Team collaboration experience",
      "Interest in consulting",
    ],
    postedDate: "2026-03-01",
  },
  {
    id: "10",
    title: "Physical Therapy Aide",
    company: "Athletes' Performance",
    location: "Phoenix, AZ",
    type: "internship",
    remote: "on-site",
    industry: "Healthcare",
    athleteFriendly: true,
    description:
      "Work alongside elite physical therapists treating professional and Olympic athletes.",
    requirements: [
      "Pursuing degree in Exercise Science, Kinesiology, or related field",
      "CPR certified",
      "Strong work ethic and coachable attitude",
      "Athletic background preferred",
    ],
    postedDate: "2026-02-28",
  },
  {
    id: "11",
    title: "Brand Ambassador",
    company: "Adidas",
    location: "Los Angeles, CA",
    type: "full-time",
    remote: "on-site",
    industry: "Marketing & Media",
    athleteFriendly: true,
    description:
      "Represent the Adidas brand at events, on campus, and across social media. Former college athletes encouraged to apply.",
    requirements: [
      "Strong social media presence",
      "Excellent communication and networking skills",
      "Passion for sports and fitness",
      "Athletic background strongly preferred",
    ],
    postedDate: "2026-02-27",
  },
  {
    id: "12",
    title: "Strength & Conditioning Coach",
    company: "D1 Training",
    location: "Nashville, TN",
    type: "full-time",
    remote: "on-site",
    industry: "Education & Coaching",
    athleteFriendly: true,
    description:
      "Train youth and high school athletes using proven D1 methodologies. Former college athlete experience valued.",
    requirements: [
      "CSCS, NSCA-CPT, or similar certification",
      "College athletic experience preferred",
      "Strong motivational and coaching skills",
      "Ability to work with diverse age groups",
    ],
    postedDate: "2026-02-26",
  },
  {
    id: "13",
    title: "Sales Development Representative",
    company: "Salesforce",
    location: "Austin, TX",
    type: "full-time",
    remote: "hybrid",
    industry: "Technology",
    athleteFriendly: false,
    description:
      "Drive new business opportunities in the tech industry. Competitive, goal-oriented individuals thrive here.",
    requirements: [
      "Bachelor's degree",
      "Excellent communication skills",
      "Competitive mindset and drive to win",
      "Interest in technology and SaaS",
    ],
    postedDate: "2026-02-25",
  },
  {
    id: "14",
    title: "Sports Agent Assistant",
    company: "CAA Sports",
    location: "New York, NY",
    type: "internship",
    remote: "on-site",
    industry: "Sports Industry",
    athleteFriendly: true,
    description:
      "Support top sports agents representing elite athletes. Gain exposure to contract negotiations, endorsements, and athlete management.",
    requirements: [
      "Currently enrolled in undergraduate or graduate program",
      "Strong interest in sports representation",
      "Excellent organizational skills",
      "Athletic background a plus",
    ],
    postedDate: "2026-02-24",
  },
];

// LocalStorage helpers for saved jobs
const SAVED_JOBS_KEY = "lifeaftersport_saved_jobs";

export function getSavedJobs(): string[] {
  if (typeof window === "undefined") return [];
  const saved = localStorage.getItem(SAVED_JOBS_KEY);
  return saved ? JSON.parse(saved) : [];
}

export function saveJob(jobId: string): void {
  const saved = getSavedJobs();
  if (!saved.includes(jobId)) {
    localStorage.setItem(SAVED_JOBS_KEY, JSON.stringify([...saved, jobId]));
  }
}

export function unsaveJob(jobId: string): void {
  const saved = getSavedJobs();
  localStorage.setItem(
    SAVED_JOBS_KEY,
    JSON.stringify(saved.filter((id) => id !== jobId))
  );
}

export function isJobSaved(jobId: string): boolean {
  return getSavedJobs().includes(jobId);
}

// Filter and search helpers
export function filterJobs(
  jobs: Job[],
  filters: {
    industry?: string;
    type?: string;
    remote?: string;
    search?: string;
  }
): Job[] {
  let filtered = [...jobs];

  if (filters.industry && filters.industry !== "all") {
    filtered = filtered.filter((job) => job.industry === filters.industry);
  }

  if (filters.type && filters.type !== "all") {
    filtered = filtered.filter((job) => job.type === filters.type);
  }

  if (filters.remote && filters.remote !== "all") {
    filtered = filtered.filter((job) => job.remote === filters.remote);
  }

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(
      (job) =>
        job.title.toLowerCase().includes(searchLower) ||
        job.company.toLowerCase().includes(searchLower) ||
        job.description.toLowerCase().includes(searchLower)
    );
  }

  return filtered;
}
