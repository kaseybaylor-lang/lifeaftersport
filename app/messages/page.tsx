"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { getMessages, markMessageAsRead, type Message } from "@/lib/mentors";
import Link from "next/link";

export default function MessagesPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push("/signin");
    }
  }, [user, loading, router]);

  // Load messages from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const allMessages = getMessages();
      setMessages(allMessages.sort((a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      ));
    }
  }, []);

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

  const handleSelectMessage = (message: Message) => {
    setSelectedMessage(message);
    if (!message.read && !message.fromUser) {
      markMessageAsRead(message.id);
      // Update local state
      setMessages(messages.map(msg =>
        msg.id === message.id ? { ...msg, read: true } : msg
      ));
    }
  };

  const unreadCount = messages.filter(m => !m.fromUser && !m.read).length;

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = diff / (1000 * 60 * 60);

    if (hours < 24) {
      return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--black)] pt-24 pb-16">
      <div className="content-container">
        {/* Header */}
        <div className="mb-12">
          <Link href="/">
            <div className="text-[var(--neon-yellow)] font-heading font-bold text-sm tracking-wider mb-4 inline-block cursor-pointer hover:underline">
              ← BACK TO HOME
            </div>
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                Messages
              </h1>
              <p className="text-[var(--text-secondary)] text-lg">
                {unreadCount > 0 && (
                  <span className="text-[var(--neon-yellow)]">
                    {unreadCount} unread {unreadCount === 1 ? 'message' : 'messages'}
                  </span>
                )}
                {unreadCount === 0 && "All caught up!"}
              </p>
            </div>
            <Link href="/mentors">
              <button className="px-6 py-3 bg-[var(--neon-yellow)] text-[var(--black)] rounded-xl font-semibold hover:shadow-lg hover:shadow-[var(--neon-yellow)]/20 transition-all">
                Find Mentors
              </button>
            </Link>
          </div>
        </div>

        {messages.length === 0 ? (
          <div className="bg-[var(--dark-navy)]/50 border border-[var(--neon-yellow)]/20 rounded-2xl p-12 text-center">
            <div className="text-6xl mb-4">💬</div>
            <h3 className="text-2xl font-heading font-bold text-white mb-2">
              No messages yet
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              Connect with mentors and start conversations to see your messages here.
            </p>
            <Link href="/mentors">
              <button className="px-6 py-3 bg-[var(--neon-yellow)] text-[var(--black)] rounded-xl font-semibold hover:shadow-lg hover:shadow-[var(--neon-yellow)]/20 transition-all">
                Browse Mentors
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Message List */}
            <div className="lg:col-span-1 space-y-2">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleSelectMessage(message)}
                  className={`p-4 rounded-xl cursor-pointer transition-all ${
                    selectedMessage?.id === message.id
                      ? "bg-[var(--neon-yellow)]/10 border border-[var(--neon-yellow)]"
                      : "bg-[var(--dark-navy)]/50 border border-[var(--neon-yellow)]/20 hover:border-[var(--neon-yellow)]/40"
                  }`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white text-sm">
                        {message.fromUser ? "To: " : "From: "}
                        {message.mentorName}
                      </span>
                      {!message.read && !message.fromUser && (
                        <div className="w-2 h-2 rounded-full bg-[var(--neon-yellow)]" />
                      )}
                    </div>
                    <span className="text-xs text-[var(--text-secondary)]">
                      {formatDate(message.timestamp)}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] truncate">
                    {message.subject}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Message Detail */}
            <div className="lg:col-span-2">
              {selectedMessage ? (
                <div className="bg-[var(--dark-navy)]/50 border border-[var(--neon-yellow)]/20 rounded-2xl p-8">
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-heading font-bold text-white mb-2">
                          {selectedMessage.subject}
                        </h2>
                        <p className="text-[var(--text-secondary)]">
                          {selectedMessage.fromUser ? "To" : "From"}: {selectedMessage.mentorName}
                        </p>
                      </div>
                      <span className="text-sm text-[var(--text-secondary)]">
                        {new Date(selectedMessage.timestamp).toLocaleString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                          hour: 'numeric',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                  </div>

                  <div className="prose prose-invert max-w-none">
                    <p className="text-[var(--text-primary)] leading-relaxed whitespace-pre-wrap">
                      {selectedMessage.content}
                    </p>
                  </div>

                  {!selectedMessage.fromUser && (
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <Link href="/mentors">
                        <button className="px-6 py-3 bg-[var(--neon-yellow)] text-[var(--black)] rounded-xl font-semibold hover:shadow-lg hover:shadow-[var(--neon-yellow)]/20 transition-all">
                          Reply to {selectedMessage.mentorName}
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-[var(--dark-navy)]/50 border border-[var(--neon-yellow)]/20 rounded-2xl p-12 text-center">
                  <div className="text-6xl mb-4">📧</div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    Select a message
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    Choose a conversation from the list to view details
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
