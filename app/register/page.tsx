"use client";

import { useState, useEffect, Suspense, ReactNode } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { Navbar, Footer } from "@/components/layout";
import Link from "next/link";
import { Users, Target, Briefcase } from "lucide-react";

type Role = "athlete" | "mentor" | "employer";

interface RoleOption {
  id: Role;
  icon: ReactNode;
  label: string;
  description: string;
}

const roles: RoleOption[] = [
  {
    id: "athlete",
    icon: <Users size={28} />,
    label: "Student-Athlete",
    description: "Currently competing or recently finished your sport.",
  },
  {
    id: "mentor",
    icon: <Target size={28} />,
    label: "Mentor",
    description: "Guide athletes through their career transition.",
  },
  {
    id: "employer",
    icon: <Briefcase size={28} />,
    label: "Employer",
    description: "Hire driven former athletes for your team.",
  },
];

const orgFieldLabel: Record<Role, string> = {
  athlete: "School / University",
  mentor: "Company / Organization",
  employer: "Company",
};

const orgFieldPlaceholder: Record<Role, string> = {
  athlete: "e.g., UCLA, Ohio State",
  mentor: "e.g., Deloitte, self-employed",
  employer: "e.g., Nike, Goldman Sachs",
};

function RegisterContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { signUp } = useAuth();

  const [step, setStep] = useState<1 | 2>(1);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [org, setOrg] = useState("");

  // Pre-select role from URL param
  useEffect(() => {
    const roleParam = searchParams.get("role") as Role | null;
    if (roleParam && ["athlete", "mentor", "employer"].includes(roleParam)) {
      setSelectedRole(roleParam);
      setStep(2);
    }
  }, [searchParams]);

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signUp({
      name: `${firstName} ${lastName}`.trim(),
      email,
      password,
      sport: "",
      university: selectedRole === "athlete" ? org : "",
      graduationYear: "",
      status: "current-athlete",
    });
    router.push("/dashboard");
  };

  const currentRole = roles.find((r) => r.id === selectedRole);

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
        <div style={{ width: "100%", maxWidth: 520 }}>
          {step === 1 && (
            <>
              {/* Step 1: Role Selection */}
              <div className="eyebrow">
                <span>Step 1 of 2</span>
              </div>

              <h1
                style={{
                  fontSize: 48,
                  lineHeight: 0.95,
                  marginBottom: 12,
                  fontFamily: "var(--font-oswald)",
                }}
              >
                Who are you?
              </h1>
              <p className="text-muted" style={{ marginBottom: 40 }}>
                Choose the role that fits you best.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {roles.map((role) => (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => handleRoleSelect(role.id)}
                    className="card card--interactive"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      textAlign: "left",
                      width: "100%",
                    }}
                  >
                    <span style={{ color: "var(--accent)" }}>{role.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          color: "var(--text-strong)",
                          marginBottom: 4,
                        }}
                      >
                        {role.label}
                      </div>
                      <div className="text-muted" style={{ fontSize: 14 }}>
                        {role.description}
                      </div>
                    </div>
                    <span className="text-subtle" style={{ fontSize: 20 }}>
                      &rarr;
                    </span>
                  </button>
                ))}
              </div>

              <p
                className="text-muted"
                style={{ textAlign: "center", marginTop: 40, fontSize: 14 }}
              >
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="text-accent"
                  style={{ fontWeight: 500 }}
                >
                  Sign in
                </Link>
              </p>
            </>
          )}

          {step === 2 && selectedRole && (
            <>
              {/* Step 2: Registration Form */}
              <div className="eyebrow">
                <span>
                  Step 2 of 2 &middot; {currentRole?.label} form
                </span>
              </div>

              <h1
                style={{
                  fontSize: 48,
                  lineHeight: 0.95,
                  marginBottom: 12,
                  fontFamily: "var(--font-oswald)",
                }}
              >
                Create your account.
              </h1>
              <p className="text-muted" style={{ marginBottom: 32 }}>
                Fill in your details to get started.
              </p>

              <div className="card card--lg">
                <form onSubmit={handleSubmit}>
                  {/* First + Last name */}
                  <div className="grid grid--2" style={{ marginBottom: 20 }}>
                    <div>
                      <label className="field-label" htmlFor="firstName">
                        First Name
                      </label>
                      <input
                        className="input"
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Jane"
                        required
                      />
                    </div>
                    <div>
                      <label className="field-label" htmlFor="lastName">
                        Last Name
                      </label>
                      <input
                        className="input"
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
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
                      required
                    />
                  </div>

                  {/* Password */}
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
                      placeholder="Create a password"
                      required
                    />
                  </div>

                  {/* School / Company field */}
                  <div style={{ marginBottom: 24 }}>
                    <label className="field-label" htmlFor="org">
                      {orgFieldLabel[selectedRole]}
                    </label>
                    <input
                      className="input"
                      type="text"
                      id="org"
                      value={org}
                      onChange={(e) => setOrg(e.target.value)}
                      placeholder={orgFieldPlaceholder[selectedRole]}
                      required
                    />
                  </div>

                  {/* Agreement text */}
                  <p
                    className="text-subtle"
                    style={{ fontSize: 13, marginBottom: 24, lineHeight: 1.5 }}
                  >
                    By creating an account you agree to our{" "}
                    <Link href="/terms" className="text-accent">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-accent">
                      Privacy Policy
                    </Link>
                    .
                  </p>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn btn--primary btn--lg btn--full"
                  >
                    Create Account
                  </button>
                </form>

                {/* Back to step 1 */}
                <div style={{ textAlign: "center", marginTop: 20 }}>
                  <button
                    type="button"
                    className="btn btn--ghost btn--sm"
                    onClick={() => setStep(1)}
                  >
                    &larr; Change role
                  </button>
                </div>
              </div>

              <p
                className="text-muted"
                style={{ textAlign: "center", marginTop: 32, fontSize: 14 }}
              >
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="text-accent"
                  style={{ fontWeight: 500 }}
                >
                  Sign in
                </Link>
              </p>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", background: "var(--bg)" }} />}>
      <RegisterContent />
    </Suspense>
  );
}
