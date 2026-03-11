// Mentor data structures and types

export interface Mentor {
  id: string;
  name: string;
  formerSport: string;
  currentRole: string;
  company: string;
  industry: string;
  bio: string;
  careerJourney: string[];
  verified: boolean;
  imageUrl?: string;
}

export interface Message {
  id: string;
  mentorId: string;
  mentorName: string;
  subject: string;
  content: string;
  timestamp: string;
  fromUser: boolean;
  read: boolean;
}

export const mentors: Mentor[] = [
  {
    id: "1",
    name: "Marcus Johnson",
    formerSport: "Football",
    currentRole: "VP of Sales",
    company: "Salesforce",
    industry: "Technology",
    verified: true,
    bio: "Former college football player turned tech executive. Passionate about helping athletes leverage their competitive mindset in the business world.",
    careerJourney: [
      "Played Division I football at USC (2010-2014)",
      "Started as SDR at Oracle after graduation",
      "Promoted to Account Executive within 18 months",
      "Joined Salesforce as Enterprise AE (2017)",
      "Became Sales Manager leading team of 12 (2019)",
      "Currently VP of Sales, West Region (2023-present)",
    ],
  },
  {
    id: "2",
    name: "Sarah Chen",
    formerSport: "Basketball",
    currentRole: "Sports Marketing Director",
    company: "Nike",
    industry: "Sports Industry",
    verified: true,
    bio: "Former college basketball standout who now creates campaigns for the world's biggest athletes. I love mentoring student-athletes looking to break into sports marketing.",
    careerJourney: [
      "Played Division I basketball at Stanford (2012-2016)",
      "Marketing Intern at Gatorade during senior year",
      "Joined Nike as Assistant Brand Manager (2016)",
      "Led successful LeBron campaign launch (2018)",
      "Promoted to Senior Brand Manager (2020)",
      "Currently Director of Sports Marketing (2024-present)",
    ],
  },
  {
    id: "3",
    name: "David Rodriguez",
    formerSport: "Soccer",
    currentRole: "Physical Therapist",
    company: "Athletes' Performance",
    industry: "Healthcare",
    verified: true,
    bio: "Former D1 soccer player who turned my sports injury experience into a career helping athletes perform at their best. Happy to guide athletes interested in sports medicine.",
    careerJourney: [
      "Played Division I soccer at UCLA (2011-2015)",
      "Completed DPT at USC (2015-2018)",
      "Physical Therapy Aide at local clinic during school",
      "Joined Athletes' Performance as PT (2018)",
      "Specialized in ACL recovery protocols (2020)",
      "Now treating Olympic and pro athletes daily",
    ],
  },
  {
    id: "4",
    name: "Jessica Williams",
    formerSport: "Track & Field",
    currentRole: "Product Manager",
    company: "Whoop",
    industry: "Technology",
    verified: true,
    bio: "Former track athlete who fell in love with sports tech. Now I build products that help athletes train smarter. Athletic background is a huge asset in product management.",
    careerJourney: [
      "Ran Division I track at University of Oregon (2013-2017)",
      "Computer Science minor sparked tech interest",
      "APM program at Google (2017-2019)",
      "Joined Whoop as Associate PM (2019)",
      "Led recovery feature development (2021)",
      "Currently Senior PM, Performance Analytics",
    ],
  },
  {
    id: "5",
    name: "James Taylor",
    formerSport: "Baseball",
    currentRole: "Financial Analyst",
    company: "Goldman Sachs",
    industry: "Business & Finance",
    verified: true,
    bio: "Former college baseball player who traded the diamond for Wall Street. The discipline from athletics translated perfectly to finance. Here to help athletes break into finance.",
    careerJourney: [
      "Played Division I baseball at Vanderbilt (2010-2014)",
      "Finance degree with 3.8 GPA",
      "Summer analyst at Goldman Sachs (2013)",
      "Joined full-time as Analyst (2014)",
      "Promoted to Associate (2016)",
      "Currently VP in Investment Banking Division",
    ],
  },
  {
    id: "6",
    name: "Emily Martinez",
    formerSport: "Volleyball",
    currentRole: "Assistant Coach",
    company: "University of Texas",
    industry: "Education & Coaching",
    verified: true,
    bio: "Former All-American volleyball player now coaching at the highest level. Passionate about developing the next generation of student-athletes both on and off the court.",
    careerJourney: [
      "Played Division I volleyball at Penn State (2014-2018)",
      "2x All-American honors",
      "Volunteer assistant coach at Penn State (2018-2019)",
      "Graduate assistant at Nebraska (2019-2021)",
      "Completed Master's in Sport Management",
      "Currently Assistant Coach at University of Texas",
    ],
  },
  {
    id: "7",
    name: "Chris Anderson",
    formerSport: "Swimming",
    currentRole: "Data Analyst",
    company: "Catapult Sports",
    industry: "Technology",
    verified: true,
    bio: "Former swimmer turned data scientist. I analyze athlete performance data for professional teams. Athletic background helps me understand what metrics actually matter.",
    careerJourney: [
      "Swam Division I at University of Florida (2012-2016)",
      "Statistics degree with 3.9 GPA",
      "Data Analytics Intern at ESPN (2015)",
      "Joined Catapult Sports as Junior Analyst (2016)",
      "Developed predictive injury models (2018-2020)",
      "Currently Senior Performance Analyst",
    ],
  },
  {
    id: "8",
    name: "Rachel Kim",
    formerSport: "Tennis",
    currentRole: "Social Media Manager",
    company: "ESPN",
    industry: "Marketing & Media",
    verified: true,
    bio: "Former college tennis player creating viral sports content. Love helping athletes build their personal brands and transition into media careers.",
    careerJourney: [
      "Played Division I tennis at Duke (2013-2017)",
      "Built 50k+ Instagram following as player",
      "Content Intern at Bleacher Report (2016)",
      "Joined ESPN as Social Media Coordinator (2017)",
      "Managed @SportsCenter Instagram (2019-2021)",
      "Currently Social Media Manager, Digital",
    ],
  },
  {
    id: "9",
    name: "Michael Brown",
    formerSport: "Basketball",
    currentRole: "Sports Agent",
    company: "CAA Sports",
    industry: "Sports Industry",
    verified: true,
    bio: "Former college hooper representing professional athletes. My playing experience helps me advocate for my clients. Happy to mentor athletes interested in sports representation.",
    careerJourney: [
      "Played Division I basketball at UConn (2010-2014)",
      "Interned at Wasserman during senior year",
      "Started as Assistant Agent at CAA (2014)",
      "Negotiated first major contract (2016)",
      "Built roster of 8 professional clients",
      "Currently Certified Agent representing NBA/overseas players",
    ],
  },
  {
    id: "10",
    name: "Lauren Davis",
    formerSport: "Soccer",
    currentRole: "Brand Ambassador",
    company: "Adidas",
    industry: "Marketing & Media",
    verified: true,
    bio: "Former D1 soccer player representing Adidas across college campuses. Love connecting with current athletes and showing them career paths in sports marketing.",
    careerJourney: [
      "Played Division I soccer at UNC (2015-2019)",
      "Marketing & Communications double major",
      "Social media intern at Adidas (2018)",
      "Joined Adidas as Campus Ambassador (2019)",
      "Built partnerships with 20+ universities",
      "Currently Lead Brand Ambassador, Southeast Region",
    ],
  },
];

// LocalStorage helpers for connected mentors
const CONNECTED_MENTORS_KEY = "lifeaftersport_connected_mentors";
const MESSAGES_KEY = "lifeaftersport_messages";

export function getConnectedMentors(): string[] {
  if (typeof window === "undefined") return [];
  const connected = localStorage.getItem(CONNECTED_MENTORS_KEY);
  return connected ? JSON.parse(connected) : [];
}

export function connectWithMentor(mentorId: string): void {
  const connected = getConnectedMentors();
  if (!connected.includes(mentorId)) {
    localStorage.setItem(
      CONNECTED_MENTORS_KEY,
      JSON.stringify([...connected, mentorId])
    );
  }
}

export function disconnectFromMentor(mentorId: string): void {
  const connected = getConnectedMentors();
  localStorage.setItem(
    CONNECTED_MENTORS_KEY,
    JSON.stringify(connected.filter((id) => id !== mentorId))
  );
}

export function isConnectedWithMentor(mentorId: string): boolean {
  return getConnectedMentors().includes(mentorId);
}

// Message helpers
export function getMessages(): Message[] {
  if (typeof window === "undefined") return [];
  const messages = localStorage.getItem(MESSAGES_KEY);
  return messages ? JSON.parse(messages) : [];
}

export function sendMessage(
  mentorId: string,
  mentorName: string,
  subject: string,
  content: string
): Message {
  const messages = getMessages();
  const newMessage: Message = {
    id: crypto.randomUUID(),
    mentorId,
    mentorName,
    subject,
    content,
    timestamp: new Date().toISOString(),
    fromUser: true,
    read: true,
  };

  // Add user message
  messages.push(newMessage);

  // Auto-reply from mentor (simulated)
  const replyMessage: Message = {
    id: crypto.randomUUID(),
    mentorId,
    mentorName,
    subject: `Re: ${subject}`,
    content: `Thanks for reaching out! I'd love to connect and share my experience. Let's schedule a time to chat about your career goals and how I can help.`,
    timestamp: new Date(Date.now() + 1000 * 60 * 5).toISOString(), // 5 min later
    fromUser: false,
    read: false,
  };

  messages.push(replyMessage);
  localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));

  return newMessage;
}

export function markMessageAsRead(messageId: string): void {
  const messages = getMessages();
  const updated = messages.map((msg) =>
    msg.id === messageId ? { ...msg, read: true } : msg
  );
  localStorage.setItem(MESSAGES_KEY, JSON.stringify(updated));
}

export function getUnreadCount(): number {
  return getMessages().filter((msg) => !msg.fromUser && !msg.read).length;
}

// Filter helpers
export function filterMentors(
  mentors: Mentor[],
  filters: {
    sport?: string;
    industry?: string;
  }
): Mentor[] {
  let filtered = [...mentors];

  if (filters.sport && filters.sport !== "all") {
    filtered = filtered.filter((mentor) => mentor.formerSport === filters.sport);
  }

  if (filters.industry && filters.industry !== "all") {
    filtered = filtered.filter((mentor) => mentor.industry === filters.industry);
  }

  return filtered;
}
