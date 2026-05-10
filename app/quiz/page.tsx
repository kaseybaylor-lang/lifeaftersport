"use client";

import { useState } from "react";
import { Navbar, Footer } from "@/components/layout";
import Link from "next/link";

interface QuizQuestion {
  id: number;
  text: string;
  options: string[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    text: "What energises you most?",
    options: [
      "Leading a team towards a shared goal",
      "Solving a complex problem alone",
      "Persuading someone to see your point",
      "Building something from scratch",
      "Helping others improve",
    ],
  },
  {
    id: 2,
    text: "Pick the setting you thrive in.",
    options: [
      "Fast-paced office with lots of people",
      "Quiet space where I can focus deeply",
      "Client meetings and travel",
      "A workshop or lab environment",
      "Outdoors or on-the-move",
    ],
  },
  {
    id: 3,
    text: "How do you handle pressure?",
    options: [
      "I step up and take charge",
      "I stay calm and analyse the situation",
      "I rally the people around me",
      "I push through with brute effort",
      "I adapt and find a new angle",
    ],
  },
  {
    id: 4,
    text: "What role did you play on your team?",
    options: [
      "Captain or vocal leader",
      "The strategist or playmaker",
      "The motivator and hype person",
      "The reliable grinder",
      "The wildcard or x-factor",
    ],
  },
  {
    id: 5,
    text: "Which skill are you proudest of?",
    options: [
      "Public speaking and presence",
      "Analysing data and spotting trends",
      "Building relationships quickly",
      "Staying disciplined over long periods",
      "Creative thinking and innovation",
    ],
  },
  {
    id: 6,
    text: "What sounds most like a win?",
    options: [
      "Closing a big deal or partnership",
      "Delivering a report that changes strategy",
      "Coaching someone to a breakthrough",
      "Shipping a product people love",
      "Earning a promotion for leadership",
    ],
  },
  {
    id: 7,
    text: "Pick a weekend activity.",
    options: [
      "Networking at an industry event",
      "Reading or learning a new skill",
      "Volunteering or coaching youth sports",
      "Working on a side project",
      "Organising a group outing",
    ],
  },
  {
    id: 8,
    text: "What frustrates you most?",
    options: [
      "Lack of clear direction",
      "Being micromanaged",
      "Dishonesty or politics",
      "Moving too slowly",
      "Not being challenged",
    ],
  },
  {
    id: 9,
    text: "Which value matters most to you?",
    options: [
      "Impact and influence",
      "Knowledge and mastery",
      "Connection and community",
      "Freedom and autonomy",
      "Growth and competition",
    ],
  },
  {
    id: 10,
    text: "Where do you see yourself in five years?",
    options: [
      "Running a team or department",
      "Deep expertise in a niche field",
      "Mentoring the next generation",
      "Building my own business",
      "Climbing fast in a top company",
    ],
  },
];

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const total = quizQuestions.length;
  const question = quizQuestions[currentIndex];
  const progress = ((currentIndex + 1) / total) * 100;
  const selectedOption = answers[question?.id];

  const handleSelect = (optionIndex: number) => {
    setAnswers({ ...answers, [question.id]: optionIndex });
  };

  const handleNext = () => {
    if (selectedOption === undefined) return;
    if (currentIndex < total - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (showResults) {
    return (
      <>
        <Navbar />
        <main
          className="section"
          style={{
            paddingTop: 160,
            display: "flex",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          <div style={{ width: "100%", maxWidth: 720 }}>
            <div className="eyebrow">
              <span>Your results</span>
            </div>

            <h2
              style={{
                fontSize: 48,
                lineHeight: 0.95,
                marginBottom: 16,
                fontFamily: "var(--font-oswald)",
              }}
            >
              You&rsquo;re a natural leader.
            </h2>
            <p
              className="text-muted"
              style={{ marginBottom: 40, maxWidth: 560, lineHeight: 1.6 }}
            >
              Your answers point to strong communication skills, a drive to
              influence outcomes, and an instinct for rallying people. You
              perform best in high-visibility roles where your competitiveness
              becomes a strategic advantage.
            </p>

            <h3
              style={{
                fontSize: 20,
                fontFamily: "var(--font-oswald)",
                marginBottom: 20,
                letterSpacing: "0.05em",
              }}
            >
              Top career fits
            </h3>

            <div className="grid grid--3" style={{ marginBottom: 48 }}>
              {/* Best match */}
              <div className="stat-box stat-box--accent">
                <div className="stat-box__label">Best Match</div>
                <div className="stat-box__value">Sales 94%</div>
              </div>
              {/* Strong match 1 */}
              <div className="stat-box">
                <div className="stat-box__label">Strong Match</div>
                <div className="stat-box__value">Consulting 87%</div>
              </div>
              {/* Strong match 2 */}
              <div className="stat-box">
                <div className="stat-box__label">Strong Match</div>
                <div className="stat-box__value">Management 81%</div>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/jobs" className="btn btn--primary btn--lg">
                Browse Sales Jobs
              </Link>
              <Link href="/mentors" className="btn btn--secondary btn--lg">
                Find a Mentor
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main
        className="section"
        style={{
          paddingTop: 160,
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div style={{ width: "100%", maxWidth: 720 }}>
          {/* Eyebrow */}
          <div className="eyebrow">
            <span>
              Career Assessment &middot; Question {currentIndex + 1} of {total}
            </span>
          </div>

          {/* Question */}
          <h1
            style={{
              fontSize: 40,
              lineHeight: 1,
              marginBottom: 12,
              fontFamily: "var(--font-oswald)",
            }}
          >
            {question.text}
          </h1>
          <p className="text-muted" style={{ marginBottom: 24 }}>
            No right answers. Be honest.
          </p>

          {/* Progress bar */}
          <div className="progress-bar" style={{ marginBottom: 32 }}>
            <div
              className="progress-bar__fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Options */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
            {question.options.map((option, i) => {
              const isActive = selectedOption === i;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSelect(i)}
                  className="card card--interactive"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    textAlign: "left",
                    width: "100%",
                    borderColor: isActive
                      ? "var(--accent)"
                      : "var(--border)",
                    background: isActive
                      ? "rgba(250,204,21,0.05)"
                      : "var(--bg-card)",
                  }}
                >
                  {/* Radio circle */}
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      border: isActive
                        ? "2px solid var(--accent)"
                        : "2px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {isActive && (
                      <span
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          background: "var(--accent)",
                        }}
                      />
                    )}
                  </span>
                  <span
                    style={{
                      fontSize: 15,
                      color: isActive
                        ? "var(--text-strong)"
                        : "var(--text)",
                    }}
                  >
                    {option}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Navigation */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {currentIndex > 0 ? (
              <button
                type="button"
                className="btn btn--secondary btn--md"
                onClick={handleBack}
              >
                Back
              </button>
            ) : (
              <div />
            )}
            <button
              type="button"
              className="btn btn--primary btn--md"
              onClick={handleNext}
              disabled={selectedOption === undefined}
            >
              {currentIndex === total - 1 ? "See Results" : "Next Question"}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
