'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, auth } from '@/lib/auth';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string, role?: 'student' | 'mentor' | 'employer') => boolean;
  signUp: (userData: Omit<User, 'id'> & { password: string }) => User;
  signOut: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing user on mount
    const currentUser = auth.getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  }, []);

  const signIn = (email: string, password: string, role?: 'student' | 'mentor' | 'employer'): boolean => {
    const loggedInUser = auth.signIn(email, password, role);
    if (loggedInUser) {
      setUser(loggedInUser);
      return true;
    }
    return false;
  };

  const signUp = (userData: Omit<User, 'id'> & { password: string }): User => {
    const newUser = auth.signUp(userData);
    setUser(newUser);
    return newUser;
  };

  const signOut = () => {
    auth.signOut();
    setUser(null);
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
