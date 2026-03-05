"use client";

/**
 * Rounded SVG flag icons for language switcher.
 * French flag: blue | white | red vertical stripes
 * UK flag: simplified Union Jack
 */
export function FlagFR({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} rounded-md overflow-hidden shrink-0`}
      aria-hidden="true"
    >
      <rect width="8" height="24" fill="#002395" />
      <rect x="8" width="8" height="24" fill="#fff" />
      <rect x="16" width="8" height="24" fill="#ED2939" />
    </svg>
  );
}

export function FlagUK({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} rounded-md overflow-hidden shrink-0`}
      aria-hidden="true"
    >
      <rect width="24" height="24" fill="#012169" />
      <path
        d="M0 0l24 24M24 0L0 24"
        stroke="#fff"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M12 0v24M0 12h24"
        stroke="#fff"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M0 0l24 24M24 0L0 24"
        stroke="#C8102E"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 0v24M0 12h24"
        stroke="#C8102E"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
