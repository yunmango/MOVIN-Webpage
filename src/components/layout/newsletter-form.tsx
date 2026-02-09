"use client";

export function NewsletterForm() {
  return (
    <form
      className="flex h-14 max-w-xs items-center rounded-xl border border-[rgb(223,223,223)] bg-[rgb(249,249,249)] pl-3 pr-1"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Enter your email address"
        className="flex-1 bg-transparent px-2 py-2 font-body text-sm text-black placeholder:text-gray-400 focus:outline-none"
      />
      <button
        type="submit"
        className="p-2 text-black transition-colors hover:text-gray-600"
        aria-label="Subscribe"
      >
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
      </button>
    </form>
  );
}
