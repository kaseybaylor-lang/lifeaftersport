// Quiz data structures and types

export interface Question {
  id: number;
  question: string;
  type: "single" | "multi";
  max?: number;
  options: string[];
}

export interface QuizAnswers {
  [key: number]: string | string[];
}

export interface CareerRoadmap {
  path: string;
  titles: string[];
  steps: string[];
}

export interface QuizResults {
  roadmap: CareerRoadmap;
  strengths: string[];
  sport: string;
  interest: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What sport did you play?",
    type: "single",
    options: [
      "Football",
      "Basketball",
      "Soccer",
      "Baseball/Softball",
      "Track & Field",
      "Swimming",
      "Tennis",
      "Volleyball",
      "Other",
    ],
  },
  {
    id: 2,
    question: "What are your top interests?",
    type: "multi",
    max: 2,
    options: [
      "Business & Finance",
      "Sports Industry",
      "Healthcare",
      "Technology",
      "Education & Coaching",
      "Marketing & Media",
    ],
  },
  {
    id: 3,
    question: "What's your biggest challenge right now?",
    type: "single",
    options: [
      "Anxiety about the transition",
      "Not sure what career fits me",
      "Don't know where to start",
      "Hard to translate athletic experience",
      "Weak network / no mentors",
      "Lack of tailored opportunities",
    ],
  },
  {
    id: 4,
    question: "What type of role appeals to you?",
    type: "single",
    options: [
      "Leadership / Management",
      "Sales & Business Development",
      "Operations & Strategy",
      "Coaching / Training",
      "Analytics & Data",
      "Communications & PR",
    ],
  },
  {
    id: 5,
    question: "Are you open to remote work?",
    type: "single",
    options: ["Yes, fully remote", "Hybrid preferred", "On-site only", "No preference"],
  },
  {
    id: 6,
    question: "When do you graduate / stop competing?",
    type: "single",
    options: ["This semester", "1-2 years", "3+ years", "Already graduated"],
  },
];

export const roadmapData: Record<string, CareerRoadmap> = {
  "Business & Finance": {
    path: "Corporate Business Track",
    titles: [
      "Business Development Associate",
      "Financial Analyst",
      "Operations Manager",
    ],
    steps: [
      "Build your LinkedIn with athlete highlights",
      "Apply to 2 finance/business internships this week",
      "Get 1 informational interview with a former athlete in business",
      "Complete a free Google Analytics or Excel certification",
      "Attend a networking event or career fair this month",
    ],
  },
  "Sports Industry": {
    path: "Sports Business & Media Track",
    titles: [
      "Sports Marketing Coordinator",
      "Athletic Program Administrator",
      "Sports Agent Assistant",
    ],
    steps: [
      "Research NCAA & sports org job boards",
      "Connect with 3 former athletes now in sports business",
      "Apply to team or league internship programs",
      "Follow sports business accounts on LinkedIn",
      "Build a portfolio of any sports-related projects or ideas",
    ],
  },
  Healthcare: {
    path: "Health & Performance Track",
    titles: ["Athletic Trainer", "Physical Therapy Aide", "Health Coach"],
    steps: [
      "Research certifications (NATA, CPT, etc.)",
      "Shadow a sports medicine professional this semester",
      "Apply to hospital or clinic internship programs",
      "Connect with team trainers and doctors you've worked with",
      "Look into grad school programs in kinesiology or PT",
    ],
  },
  Technology: {
    path: "Tech & Innovation Track",
    titles: ["Product Manager", "Data Analyst", "Sports Tech Consultant"],
    steps: [
      "Complete a free coding or data course (Codecademy, Coursera)",
      "Apply to tech company rotational programs",
      "Build a basic portfolio project",
      "Join tech communities on LinkedIn",
      "Look for sports tech startups hiring entry-level roles",
    ],
  },
  "Education & Coaching": {
    path: "Coaching & Education Track",
    titles: [
      "Assistant Coach",
      "Athletic Director (Jr.)",
      "PE Teacher / Strength Coach",
    ],
    steps: [
      "Get CPR/First Aid certified this month",
      "Reach out to your current coaching staff about assistant roles",
      "Apply to graduate assistant coaching positions",
      "Research teaching credential programs",
      "Volunteer with a youth sports program",
    ],
  },
  "Marketing & Media": {
    path: "Marketing & Communications Track",
    titles: [
      "Brand Ambassador",
      "Social Media Manager",
      "PR & Communications Associate",
    ],
    steps: [
      "Build a personal brand on LinkedIn and Instagram",
      "Create 3 content pieces showcasing your athlete story",
      "Apply to sports media or agency internships",
      "Reach out to your school's athletic communications team",
      "Learn Canva or basic video editing tools",
    ],
  },
};

export const sportStrengths: Record<string, string[]> = {
  Football: ["Team Leadership", "Strategic Thinking", "Resilience Under Pressure"],
  Basketball: ["Quick Decision Making", "Adaptability", "Communication"],
  Soccer: ["Endurance & Discipline", "Team Coordination", "Spatial Awareness"],
  "Baseball/Softball": ["Precision & Focus", "Mental Toughness", "Game Theory"],
  "Track & Field": ["Goal Setting", "Self-Discipline", "Performance Under Pressure"],
  Swimming: ["Individual Accountability", "Time Management", "Consistency"],
  Tennis: ["Independent Drive", "Problem Solving", "Composure"],
  Volleyball: ["Communication", "Team Chemistry", "Reactive Thinking"],
  Other: ["Discipline", "Teamwork", "Competitive Drive"],
};

// Helper to get results based on answers
export function getQuizResults(answers: QuizAnswers): QuizResults {
  const interest = Array.isArray(answers[2])
    ? answers[2][0]
    : (answers[2] as string) || "Business & Finance";
  const sport = (answers[1] as string) || "Other";
  const roadmap = roadmapData[interest] || roadmapData["Business & Finance"];
  const strengths = sportStrengths[sport] || sportStrengths["Other"];

  return { roadmap, strengths, sport, interest };
}

// LocalStorage helpers
const QUIZ_STORAGE_KEY = "lifeaftersport_quiz_results";

export function saveQuizResults(results: QuizResults): void {
  localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(results));
}

export function getStoredQuizResults(): QuizResults | null {
  const stored = localStorage.getItem(QUIZ_STORAGE_KEY);
  if (!stored) return null;
  return JSON.parse(stored);
}

export function clearQuizResults(): void {
  localStorage.removeItem(QUIZ_STORAGE_KEY);
}
