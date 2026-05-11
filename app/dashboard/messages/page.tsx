"use client";

import { useState, useEffect } from "react";
import DashboardShell from "@/components/dashboard/DashboardShell";
import { useAuth } from "@/contexts/AuthContext";

interface ThreadMessage {
  id: string;
  text: string;
  fromUser: boolean;
  time: string;
}

interface Thread {
  id: string;
  name: string;
  initials: string;
  role: string;
  lastMessage: string;
  time: string;
  unread: number;
  messages: ThreadMessage[];
}

const studentThreads: Thread[] = [
  {
    id: "1", name: "David Chen", initials: "DC", role: "VP of Strategy · Goldman Sachs",
    lastMessage: "Looking forward to our session tomorrow! I've reviewed your resume and have some suggestions.",
    time: "2h", unread: 1,
    messages: [
      { id: "m1", text: "Hi David, thanks for accepting my mentorship request! I'm really excited to learn from your experience in investment banking.", fromUser: true, time: "Apr 26, 2:00 PM" },
      { id: "m2", text: "Great to connect, Marcus! I see you're interested in finance — that's a great fit for former athletes. The discipline translates perfectly.", fromUser: false, time: "Apr 26, 2:15 PM" },
      { id: "m3", text: "That's exactly what I'm hoping. I've been doing some research on IB recruiting timelines. Could we go over that in our first session?", fromUser: true, time: "Apr 26, 3:30 PM" },
      { id: "m4", text: "Looking forward to our session tomorrow! I've reviewed your resume and have some suggestions.", fromUser: false, time: "Apr 28, 10:00 AM" },
    ],
  },
  {
    id: "2", name: "Sarah Okonkwo", initials: "SO", role: "Senior Brand Manager · Nike",
    lastMessage: "Happy to help with personal branding. Let me know when you'd like to chat!",
    time: "1d", unread: 0,
    messages: [
      { id: "m5", text: "Hi Sarah, I saw your profile and I'm really interested in brand marketing. Would you be open to mentoring?", fromUser: true, time: "Apr 25, 11:00 AM" },
      { id: "m6", text: "Happy to help with personal branding. Let me know when you'd like to chat!", fromUser: false, time: "Apr 25, 2:00 PM" },
    ],
  },
  {
    id: "3", name: "James Wright", initials: "JW", role: "Founder & CEO · PlaybookHQ",
    lastMessage: "Let me know if you have questions about the startup world!",
    time: "3d", unread: 0,
    messages: [
      { id: "m7", text: "Hi James, love what you're building at PlaybookHQ. I'm curious about entrepreneurship as a career path.", fromUser: true, time: "Apr 23, 9:00 AM" },
      { id: "m8", text: "Thanks Marcus! Former athletes make great founders — the resilience is unmatched. Let me know if you have questions about the startup world!", fromUser: false, time: "Apr 23, 11:00 AM" },
    ],
  },
];

const mentorThreads: Thread[] = [
  {
    id: "1", name: "Marcus Thompson", initials: "MT", role: "U of Michigan · Football",
    lastMessage: "Thank you for the resume feedback! I'll make those changes tonight.",
    time: "1h", unread: 1,
    messages: [
      { id: "m1", text: "Hi Marcus, I've reviewed your resume. Great foundation — a few tweaks will make it even stronger.", fromUser: true, time: "May 10, 10:00 AM" },
      { id: "m2", text: "Thank you for the resume feedback! I'll make those changes tonight.", fromUser: false, time: "May 10, 11:30 AM" },
    ],
  },
  {
    id: "2", name: "Alyssa Jordan", initials: "AJ", role: "Stanford · Soccer",
    lastMessage: "Can we discuss marketing vs. consulting in our next session?",
    time: "2d", unread: 1,
    messages: [
      { id: "m3", text: "Can we discuss marketing vs. consulting in our next session?", fromUser: false, time: "May 9, 3:00 PM" },
    ],
  },
  {
    id: "3", name: "Kevin Roberts", initials: "KR", role: "Ohio State · Basketball",
    lastMessage: "The networking event was super helpful. Thanks for the recommendation!",
    time: "4d", unread: 0,
    messages: [
      { id: "m4", text: "There's a finance networking event next week — I'd recommend going.", fromUser: true, time: "May 6, 9:00 AM" },
      { id: "m5", text: "The networking event was super helpful. Thanks for the recommendation!", fromUser: false, time: "May 7, 5:00 PM" },
    ],
  },
];

const employerThreads: Thread[] = [
  {
    id: "1", name: "Marcus Thompson", initials: "MT", role: "U of Michigan · Football",
    lastMessage: "Thank you for considering my application! I'm available for an interview anytime this week.",
    time: "3h", unread: 1,
    messages: [
      { id: "m1", text: "Hi Marcus, we were impressed by your application for the IB Analyst role. Could you come in for an interview?", fromUser: true, time: "May 10, 2:00 PM" },
      { id: "m2", text: "Thank you for considering my application! I'm available for an interview anytime this week.", fromUser: false, time: "May 10, 5:00 PM" },
    ],
  },
  {
    id: "2", name: "Sofia Perez", initials: "SP", role: "UCLA · Volleyball",
    lastMessage: "I've attached my updated portfolio as requested.",
    time: "1d", unread: 0,
    messages: [
      { id: "m3", text: "Could you send over your portfolio for the Wealth Management Associate position?", fromUser: true, time: "May 9, 10:00 AM" },
      { id: "m4", text: "I've attached my updated portfolio as requested.", fromUser: false, time: "May 9, 4:00 PM" },
    ],
  },
];

function getThreadsForRole(role?: string): Thread[] {
  if (role === "mentor") return mentorThreads;
  if (role === "employer") return employerThreads;
  return studentThreads;
}

export default function DashboardMessagesPage() {
  const { user } = useAuth();
  const [activeThread, setActiveThread] = useState<Thread | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [threads, setThreads] = useState<Thread[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (user) {
      setThreads(getThreadsForRole(user.role));
    }
  }, [user]);

  useEffect(() => {
    if (threads.length > 0 && !activeThread) {
      setActiveThread(threads[0]);
    }
  }, [threads, activeThread]);

  const filteredThreads = threads.filter((t) =>
    t.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSend = () => {
    if (!messageInput.trim() || !activeThread) return;
    const newMsg: ThreadMessage = {
      id: `m${Date.now()}`,
      text: messageInput,
      fromUser: true,
      time: "Just now",
    };
    const updated = threads.map((t) =>
      t.id === activeThread.id
        ? { ...t, messages: [...t.messages, newMsg], lastMessage: messageInput, time: "now" }
        : t
    );
    setThreads(updated);
    setActiveThread({ ...activeThread, messages: [...activeThread.messages, newMsg] });
    setMessageInput("");
  };

  return (
    <DashboardShell>
      <div style={{ display: "flex", height: "calc(100vh - 32px)", margin: "-24px", borderRadius: 0 }}>
        {/* Threads List */}
        <div style={{ width: 300, borderRight: "1px solid #1f1f1f", display: "flex", flexDirection: "column", flexShrink: 0 }}>
          <div style={{ padding: 16, borderBottom: "1px solid #1f1f1f" }}>
            <h2 style={{ fontSize: 18, fontFamily: "var(--font-oswald), Impact, sans-serif", textTransform: "uppercase", marginBottom: 12, color: "var(--text-strong)" }}>Messages</h2>
            <input
              type="text"
              className="input"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ height: 36, fontSize: 13 }}
            />
          </div>
          <div style={{ flex: 1, overflowY: "auto" }}>
            {filteredThreads.map((thread) => (
              <button
                key={thread.id}
                onClick={() => setActiveThread(thread)}
                style={{
                  display: "flex", gap: 12, padding: "14px 16px", width: "100%", textAlign: "left",
                  border: "none", borderBottom: "1px solid #1f1f1f", cursor: "pointer", fontFamily: "inherit",
                  background: activeThread?.id === thread.id ? "rgba(250,204,21,0.05)" : "transparent",
                  borderLeft: activeThread?.id === thread.id ? "2px solid var(--accent)" : "2px solid transparent",
                }}
              >
                <div className="avatar avatar--md" style={{ flexShrink: 0 }}>{thread.initials}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                    <span style={{ fontWeight: 600, color: "#c8c8c8", fontSize: 14 }}>{thread.name}</span>
                    <span style={{ fontSize: 12, color: "var(--text-subtle)" }}>{thread.time}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "var(--text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", margin: 0 }}>
                    {thread.lastMessage}
                  </p>
                </div>
                {thread.unread > 0 && (
                  <div className="dashboard-sidebar__nav-badge" style={{ alignSelf: "center" }}>{thread.unread}</div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Thread Detail */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {activeThread ? (
            <>
              {/* Header */}
              <div style={{ padding: "14px 24px", borderBottom: "1px solid #1f1f1f", display: "flex", alignItems: "center", gap: 12 }}>
                <div className="avatar avatar--md">{activeThread.initials}</div>
                <div>
                  <div style={{ fontWeight: 600, color: "#c8c8c8", fontSize: 14 }}>{activeThread.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{activeThread.role}</div>
                </div>
              </div>

              {/* Messages */}
              <div style={{ flex: 1, overflowY: "auto", padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
                {activeThread.messages.map((msg, i) => {
                  const showDate = i === 0 || activeThread.messages[i - 1].time.split(",")[0] !== msg.time.split(",")[0];
                  return (
                    <div key={msg.id}>
                      {showDate && i === 0 && (
                        <div style={{ textAlign: "center", fontSize: 12, color: "var(--text-subtle)", margin: "8px 0 16px" }}>
                          {msg.time.split(",")[0]}
                        </div>
                      )}
                      <div style={{ display: "flex", justifyContent: msg.fromUser ? "flex-end" : "flex-start" }}>
                        <div style={{
                          maxWidth: "70%", padding: "12px 16px",
                          borderRadius: msg.fromUser ? "12px 12px 4px 12px" : "12px 12px 12px 4px",
                          background: msg.fromUser ? "rgba(250,204,21,0.1)" : "var(--bg-card)",
                          border: `1px solid ${msg.fromUser ? "rgba(250,204,21,0.3)" : "var(--border)"}`,
                          fontSize: 14, color: "var(--text)", lineHeight: 1.5,
                        }}>
                          <p style={{ margin: 0 }}>{msg.text}</p>
                          <div style={{ fontSize: 11, color: "var(--text-subtle)", marginTop: 8, textAlign: msg.fromUser ? "right" : "left" }}>
                            {msg.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Input */}
              <div style={{ padding: 16, borderTop: "1px solid #1f1f1f", display: "flex", gap: 12 }}>
                <input
                  type="text"
                  className="input"
                  placeholder="Type a message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  style={{ flex: 1 }}
                />
                <button onClick={handleSend} className="btn btn--primary btn--md">Send</button>
              </div>
            </>
          ) : (
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>&#9993;</div>
                <h3 style={{ fontSize: 20, marginBottom: 8 }}>Select a conversation</h3>
                <p style={{ color: "var(--text-muted)" }}>Choose a thread from the left to view messages.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardShell>
  );
}
