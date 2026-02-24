"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { LoadingSpinner } from "@/components/shared/loading-spinner";

export function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <form
      className="flex h-14 max-w-xs items-center rounded-xl border border-[rgb(223,223,223)] bg-[rgb(249,249,249)] pl-3 pr-1"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        placeholder={isSubmitted ? "Subscribed!" : "Enter your email address"}
        disabled={isSubmitted}
        className="flex-1 bg-transparent px-2 py-2 font-body text-sm text-black placeholder:text-gray-400 focus:outline-none disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className="p-2 text-black transition-colors hover:text-gray-600 disabled:opacity-50"
        aria-label="Subscribe"
      >
        {isSubmitting ? (
          <LoadingSpinner className="h-5 w-5" />
        ) : isSubmitted ? (
          <Check className="h-5 w-5 text-[#2e7d32]" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        )}
      </button>
    </form>
  );
}
