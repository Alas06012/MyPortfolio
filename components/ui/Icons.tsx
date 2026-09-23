import React from "react";

export function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function SpainFlagIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="spain-flag-clip">
          <circle cx="16" cy="16" r="16" />
        </clipPath>
      </defs>
      <g clipPath="url(#spain-flag-clip)">
        {/* Top Red Stripe */}
        <rect x="0" y="0" width="32" height="8" fill="#AA151B" />
        {/* Middle Yellow Stripe */}
        <rect x="0" y="8" width="32" height="16" fill="#F1BF00" />
        {/* Bottom Red Stripe */}
        <rect x="0" y="24" width="32" height="8" fill="#AA151B" />
        {/* Spanish Emblem Silhouette */}
        <g transform="translate(8, 11) scale(0.4)">
          {/* Crown */}
          <path d="M4 2 L6 5 L10 2 L14 5 L16 2 L15 7 L5 7 Z" fill="#AA151B" />
          {/* Shield */}
          <rect x="5" y="7" width="10" height="10" rx="2" fill="#AA151B" />
          <rect x="7" y="9" width="6" height="6" fill="#F1BF00" />
          <path d="M7 12 H13 M10 9 V15" stroke="#AA151B" strokeWidth="1" />
        </g>
      </g>
    </svg>
  );
}

export function UsaFlagIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="usa-flag-clip">
          <circle cx="16" cy="16" r="16" />
        </clipPath>
      </defs>
      <g clipPath="url(#usa-flag-clip)">
        {/* Red Base */}
        <rect width="32" height="32" fill="#B22234" />
        {/* White Stripes */}
        <rect y="4.57" width="32" height="4.57" fill="#FFFFFF" />
        <rect y="13.71" width="32" height="4.57" fill="#FFFFFF" />
        <rect y="22.85" width="32" height="4.57" fill="#FFFFFF" />
        {/* Blue Canton */}
        <rect width="14" height="18" fill="#3C3B6E" />
        {/* Stars */}
        <circle cx="4" cy="4.5" r="1" fill="#FFFFFF" />
        <circle cx="10" cy="4.5" r="1" fill="#FFFFFF" />
        <circle cx="7" cy="9" r="1" fill="#FFFFFF" />
        <circle cx="4" cy="13.5" r="1" fill="#FFFFFF" />
        <circle cx="10" cy="13.5" r="1" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

export function GooglePlayIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M3.609 1.814L13.793 12 3.61 22.186a1.597 1.597 0 0 1-.61-.918c-.08-.34-.08-18.196 0-18.536.096-.408.312-.734.61-.918z"
        fill="#00D3FF"
      />
      <path
        d="M17.221 8.572L4.62 1.303l9.173 10.697 3.428-3.428z"
        fill="#00F076"
      />
      <path
        d="M17.221 15.428l-3.428-3.428-9.173 10.697 12.601-7.269z"
        fill="#FF3B30"
      />
      <path
        d="M17.221 15.428l3.42-1.975a1.86 1.86 0 0 0 0-3.218l-3.42-1.975-2.029 3.584 2.029 3.584z"
        fill="#FFBE00"
      />
    </svg>
  );
}
