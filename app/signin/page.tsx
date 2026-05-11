"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { Navbar, Footer } from "@/components/layout";
import Link from "next/link";

type Role = "athlete" | "mentor" | "employer";

const roleLabels: Record<Role, string> = {
  athlete: "Student-Athlete",
  mentor: "Mentor",
  employer: "Employer",
};

export default function SignInPage() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [role, setRole] = useState<Role>("athlete");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const authRole = role === "athlete" ? "student" : role;
    const success = signIn(email || "demo@lifeaftersport.com", password || "demo", authRole);
    if (success) {
      router.push("/dashboard");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

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
        <div style={{ width: "100%", maxWidth: 440 }}>
          {/* Eyebrow */}
          <div className="eyebrow">
            <span>Sign in as {roleLabels[role]}</span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontSize: 48,
              lineHeight: 0.95,
              marginBottom: 12,
              fontFamily: "var(--font-oswald)",
            }}
          >
            Welcome back.
          </h1>
          <p className="text-muted" style={{ marginBottom: 32 }}>
            Pick up where you left off.
          </p>

          {/* Role selector */}
          <div className="grid grid--3" style={{ gap: 8, marginBottom: 32 }}>
            {(["athlete", "mentor", "employer"] as Role[]).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className={r === role ? "btn btn--md btn--primary" : "btn btn--md btn--secondary"}
                style={{ width: "100%" }}
              >
                {roleLabels[r]}
              </button>
            ))}
          </div>

          {/* Error */}
          {error && (
            <div
              className="card"
              style={{
                background: "rgba(248,113,113,0.08)",
                borderColor: "rgba(248,113,113,0.3)",
                marginBottom: 24,
                padding: 16,
              }}
            >
              <p style={{ color: "var(--danger)", fontSize: 14 }}>{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 20 }}>
              <label className="field-label" htmlFor="email">
                Email
              </label>
              <input
                className="input"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>

            <div style={{ marginBottom: 20 }}>
              <label className="field-label" htmlFor="password">
                Password
              </label>
              <input
                className="input"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>

            {/* Remember + Forgot */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 28,
              }}
            >
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>
              <Link
                href="#"
                className="text-accent"
                style={{ fontSize: 14, fontWeight: 500 }}
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn--primary btn--lg btn--full">
              Sign In
            </button>
          </form>

          {/* Demo notice */}
          <p
            className="text-subtle"
            style={{
              fontSize: 13,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Demo mode: any email/password will sign you in
          </p>

          {/* Footer link */}
          <p
            className="text-muted"
            style={{
              textAlign: "center",
              marginTop: 32,
              fontSize: 14,
            }}
          >
            New here?{" "}
            <Link
              href="/register"
              className="text-accent"
              style={{ fontWeight: 500 }}
            >
              Create an account
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
