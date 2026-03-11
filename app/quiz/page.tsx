"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import {
  questions,
  getQuizResults,
  saveQuizResults,
  type QuizAnswers,
  type Question,
} from "@/lib/quiz";
import Link from "next/link";

export default function QuizPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [submitted, setSubmitted] = useState(false);
  const [animating, setAnimating] = useState(false);

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push("/signin");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--black)] flex items-center justify-center">
        <div className="text-[var(--neon-yellow)] text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const q = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  const handleSelect = (option: string) => {
    if (q.type === "multi") {
      const prev = (answers[q.id] as string[]) || [];
      if (prev.includes(option)) {
        setAnswers({ ...answers, [q.id]: prev.filter((o) => o !== option) });
      } else if (prev.length < (q.max || 2)) {
        setAnswers({ ...answers, [q.id]: [...prev, option] });
      }
    } else {
      setAnswers({ ...answers, [q.id]: option });
    }
  };

  const isSelected = (option: string) => {
    const a = answers[q.id];
    return Array.isArray(a) ? a.includes(option) : a === option;
  };

  const canNext = () => {
    const a = answers[q.id];
    if (!a) return false;
    if (Array.isArray(a)) return a.length > 0;
    return true;
  };

  const next = () => {
    if (!canNext()) return;
    setAnimating(true);
    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent(current + 1);
      } else {
        const results = getQuizResults(answers);
        saveQuizResults(results);
        setSubmitted(true);
      }
      setAnimating(false);
    }, 300);
  };

  const back = () => {
    if (current > 0) {
      setAnimating(true);
      setTimeout(() => {
        setCurrent(current - 1);
        setAnimating(false);
      }, 200);
    }
  };

  if (submitted) {
    const results = getQuizResults(answers);

    return (
      <div className="min-h-screen bg-gradient-to-br from-[var(--black)] via-[var(--dark-navy)] to-[var(--black)] flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-[var(--neon-yellow)] text-[var(--black)] font-heading font-bold text-xs tracking-wider px-4 py-2 rounded-full mb-6"
          >
            YOUR NEXT PLAY
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 leading-tight"
          >
            {results.roadmap.path}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-[var(--text-secondary)] mb-12"
          >
            Based on your athletic background in{" "}
            <span className="text-[var(--neon-yellow)] font-bold">
              {results.sport}
            </span>{" "}
            and your interests
          </motion.p>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Suggested Roles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-[var(--dark-navy)]/50 border border-[var(--neon-yellow)]/20 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="text-[var(--neon-yellow)] text-xs font-heading font-bold tracking-wider mb-4">
                🏆 SUGGESTED ROLES
              </div>
              {results.roadmap.titles.map((title, i) => (
                <div key={i} className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 bg-[var(--neon-yellow)] rounded-full flex-shrink-0" />
                  <span className="text-white/80 text-sm">{title}</span>
                </div>
              ))}
            </motion.div>

            {/* Your Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-[var(--dark-navy)]/50 border border-[var(--neon-yellow)]/20 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="text-[var(--neon-yellow)] text-xs font-heading font-bold tracking-wider mb-4">
                💪 YOUR STRENGTHS
              </div>
              {results.strengths.map((strength, i) => (
                <div
                  key={i}
                  className="bg-[var(--neon-yellow)]/10 border border-[var(--neon-yellow)]/20 text-[var(--neon-yellow)] rounded-lg px-3 py-2 text-xs font-semibold mb-2"
                >
                  {strength}
                </div>
              ))}
            </motion.div>

            {/* Your Roadmap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-[var(--dark-navy)]/50 border border-[var(--neon-yellow)]/20 rounded-2xl p-6 backdrop-blur-sm md:col-span-3"
            >
              <div className="text-[var(--neon-yellow)] text-xs font-heading font-bold tracking-wider mb-6">
                📋 YOUR ROADMAP
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.roadmap.steps.map((step, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="bg-[var(--neon-yellow)] text-[var(--black)] font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div className="text-white/75 text-sm leading-relaxed">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => {
                setSubmitted(false);
                setCurrent(0);
                setAnswers({});
              }}
              className="px-6 py-3 border border-[var(--neon-yellow)]/40 text-[var(--neon-yellow)] rounded-xl font-semibold hover:bg-[var(--neon-yellow)]/10 transition-all"
            >
              Retake Quiz
            </button>
            <Link
              href="/"
              className="px-6 py-3 bg-[var(--neon-yellow)] text-[var(--black)] rounded-xl font-semibold hover:shadow-lg hover:shadow-[var(--neon-yellow)]/20 transition-all"
            >
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--black)] via-[var(--dark-navy)] to-[var(--black)] flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <div className="bg-[var(--dark-navy)]/50 border border-[var(--neon-yellow)]/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <Link href="/">
              <div className="text-[var(--neon-yellow)] font-heading font-bold text-sm tracking-wider cursor-pointer">
                LIFE AFTER SPORT
              </div>
            </Link>
            <div className="text-white/40 text-sm">
              Question {current + 1} of {questions.length}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-1 bg-white/10 rounded-full mb-10">
            <motion.div
              className="h-full bg-[var(--neon-yellow)] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-[var(--neon-yellow)]/10 font-heading font-bold text-7xl leading-none mb-2">
                0{current + 1}
              </div>
              <h2 className="text-white font-heading font-bold text-3xl md:text-4xl mb-3 leading-tight">
                {q.question}
              </h2>
              {q.type === "multi" && (
                <p className="text-[var(--neon-yellow)]/60 text-sm mb-8">
                  Select up to {q.max}
                </p>
              )}

              {/* Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10 mt-8">
                {q.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`text-left px-5 py-4 rounded-xl border transition-all ${
                      isSelected(option)
                        ? "bg-[var(--neon-yellow)]/10 border-[var(--neon-yellow)] text-[var(--neon-yellow)]"
                        : "bg-white/5 border-white/10 text-white hover:border-white/30"
                    }`}
                  >
                    {isSelected(option) && (
                      <span className="font-bold mr-2">✓</span>
                    )}
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            {current > 0 ? (
              <button
                onClick={back}
                className="text-white/40 hover:text-white transition-colors"
              >
                ← Back
              </button>
            ) : (
              <div />
            )}
            <button
              onClick={next}
              disabled={!canNext()}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${
                canNext()
                  ? "bg-[var(--neon-yellow)] text-[var(--black)] hover:shadow-lg hover:shadow-[var(--neon-yellow)]/20"
                  : "bg-white/10 text-white/30 cursor-not-allowed"
              }`}
            >
              {current === questions.length - 1 ? "See My Results →" : "Next →"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
