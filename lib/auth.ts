// Auth utilities using localStorage

export interface User {
  id: string;
  name: string;
  email: string;
  sport: string;
  university: string;
  graduationYear: string;
  status: 'current-athlete' | 'recent-alum';
  role?: 'student' | 'mentor' | 'employer';
}

const AUTH_STORAGE_KEY = 'lifeaftersport_auth';
const USER_STORAGE_KEY = 'lifeaftersport_user';

export const auth = {
  // Sign up a new user
  signUp: (userData: Omit<User, 'id'> & { password: string }): User => {
    const user: User = {
      id: crypto.randomUUID(),
      name: userData.name,
      email: userData.email,
      sport: userData.sport || "",
      university: userData.university || "",
      graduationYear: userData.graduationYear || "",
      status: userData.status || "current-athlete",
      role: userData.role || "student",
    };

    // In a real app, you'd hash the password. For demo, just store email/password combo
    const credentials = {
      email: userData.email,
      password: userData.password,
    };

    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(credentials));
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));

    return user;
  },

  // Sign in existing user (demo mode: any email/password works)
  signIn: (email: string, _password: string): User | null => {
    const userStored = localStorage.getItem(USER_STORAGE_KEY);

    if (userStored) {
      return JSON.parse(userStored);
    }

    // Demo mode: create a default user for any credentials
    const demoUser: User = {
      id: crypto.randomUUID(),
      name: "Marcus Thompson",
      email: email,
      sport: "Football",
      university: "University of Michigan",
      graduationYear: "2026",
      status: "current-athlete",
      role: "student",
    };
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(demoUser));
    return demoUser;
  },

  // Get current user
  getCurrentUser: (): User | null => {
    const userStored = localStorage.getItem(USER_STORAGE_KEY);
    if (!userStored) return null;
    return JSON.parse(userStored);
  },

  // Sign out
  signOut: (): void => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(USER_STORAGE_KEY);
  },

  // Check if user is logged in
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem(USER_STORAGE_KEY);
  },
};
