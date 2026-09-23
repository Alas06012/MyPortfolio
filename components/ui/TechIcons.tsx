import React from "react";
import { Code2 } from "lucide-react";

export function NextjsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
    </svg>
  );
}

export function ReactIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="-11.5 -10.23 23 20.46" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  );
}

export function TypescriptIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#FFFFFF" />
      <path
        fill="#3178C6"
        d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
      />
    </svg>
  );
}

export function TailwindIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8"/>
    </svg>
  );
}

export function FramerMotionIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF"/>
    </svg>
  );
}

export function HtmlCssIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 28 24" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* HTML5 Shield (Left) */}
      <g transform="translate(0, 0) scale(0.55)">
        <path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z" />
        <path fill="#EF652A" d="M12 22.02l6.86-1.95L20.47 2.18H12v19.84z" />
        <path fill="#FFFFFF" d="M12 9.75h4.84l-.33 3.43-4.51 1.25v2.24l7.15-1.98.74-8.19H12v3.25zm0-5.34h8.31l-.23 2.62H12V4.41z" />
        <path fill="#EBEBEB" d="M12 9.75H7.16l.33-3.43H12V4.41H4.41l.7 8.01H12V9.75zm0 6.92v2.24l-4.51-1.25-.29-3.25H4.8l.55 6.24L12 22.02v-5.35z" />
      </g>
      {/* CSS3 Shield (Right) */}
      <g transform="translate(13.5, 0) scale(0.55)">
        <path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0z" />
        <path fill="#33A9DC" d="M12 22.02l6.86-1.95L20.47 2.18H12v19.84z" />
        <path fill="#FFFFFF" d="M12 9.61h3.76l-.37 3.52-3.39.94v2.24l6.02-1.67.74-8.23H12v3.2zM12 4.41h8.31l-.21 2.62H12V4.41z" />
        <path fill="#EBEBEB" d="M12 9.61H7.16l.29-3.2H12V4.41H4.41l.24 2.62h6.64l-.24 2.58H4.65l.55 6.24L12 17.5v-2.24l-3.39-.94-.22-2.51H12V9.61z" />
      </g>
    </svg>
  );
}

export function SeoIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="7.5" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.5 20.5l-4.2-4.2" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 12l2.2-2.2 2 2 3-3" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.7 8.8h-2m2 0v2" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SupabaseIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="#3ECF8E" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z" />
    </svg>
  );
}

export function PythonIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M11.91 2c-5.26 0-4.93 2.28-4.93 2.28l.01 2.36h5.02v.71H4.97S2 7.02 2 12.3c0 5.27 2.59 5.09 2.59 5.09h1.54v-2.16s-.08-2.58 2.54-2.58h4.94v-.76H8.62s-2.42.06-2.42-2.42V7.44s-.22-2.48 2.52-2.48h5.68s2.32-.04 2.32 2.3v1.8h-2.4v.7h4.8s2.58-.29 2.58-5.05c0-4.75-4.39-4.71-4.39-4.71H11.91z" fill="#387EB8" />
      <path d="M12.09 22c5.26 0 4.93-2.28 4.93-2.28l-.01-2.36h-5.02v-.71h7.04s2.97.33 2.97-4.95c0-5.27-2.59-5.09-2.59-5.09h-1.54v2.16s.08 2.58-2.54 2.58h-4.94v.76h5.01s2.42-.06 2.42 2.42v4.33s.22 2.48-2.52 2.48H9.16s-2.32.04-2.32-2.3v-1.8h2.4v-.7h-4.8s-2.58.29-2.58 5.05c0 4.75 4.39 4.71 4.39 4.71h5.84z" fill="#FFE052" />
      <circle cx="8.9" cy="4.4" r="0.8" fill="#FFFFFF" />
      <circle cx="15.1" cy="19.6" r="0.8" fill="#FFFFFF" />
    </svg>
  );
}

export function NodejsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2z" fill="#5FA04E" />
      <path d="M12 4.1L5.1 8.1v7.8l6.9 4 6.9-4V8.1L12 4.1z" fill="#1e1e1e" />
      <path d="M12 6.5l4.8 2.8v5.4L12 17.5l-4.8-2.8V9.3L12 6.5z" fill="#5FA04E" />
    </svg>
  );
}

export function SqlServerIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="6" rx="9" ry="3.5" fill="#CC292B" />
      <path d="M3 6v6c0 1.93 4.03 3.5 9 3.5s9-1.57 9-3.5V6" stroke="#CC292B" strokeWidth="2" fill="none" />
      <path d="M3 12v6c0 1.93 4.03 3.5 9 3.5s9-1.57 9-3.5v-6" stroke="#CC292B" strokeWidth="2" fill="none" />
      <ellipse cx="12" cy="6" rx="6" ry="2" fill="#E63946" />
    </svg>
  );
}

export function PostgresIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#336791" />
      <path d="M13 17.5h-2v-4H9V11h2V8.5C11 7.12 12.12 6 13.5 6H16v2.5h-2.5c-.28 0-.5.22-.5.5V11h3l-.5 2.5H13v4z" fill="#FFFFFF" />
    </svg>
  );
}

export function MysqlIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3C7 3 3 7 3 12s4 9 9 9c4.2 0 7.8-2.9 8.8-6.9.2-.8-.4-1.6-1.2-1.6h-3.1c-.8 0-1.5.6-1.6 1.4-.4 1.8-2 3.1-3.9 3.1-2.2 0-4-1.8-4-4s1.8-4 4-4c1.5 0 2.8.8 3.5 2h3.5C18.1 5.8 15.3 3 12 3z" fill="#00758F" />
      <path d="M18 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" fill="#F29111" />
    </svg>
  );
}

export function MongodbIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1.5s-6 5.5-6 11.5c0 4.5 3.5 7.5 6 9.5 2.5-2 6-5 6-9.5 0-6-6-11.5-6-11.5z" fill="#47A248" />
      <path d="M12 2.5v19.5c.2-.2.5-.4.7-.6 2.3-1.9 4.8-4.5 4.8-8.4 0-5.2-4.8-9.8-5.5-10.5z" fill="#499D4A" />
      <path d="M12 22.5c-.2 0-.4-.2-.5-.4-.5-1.5-1-3.5-1-5.6 0-3.5 1-6.5 1.5-8.5V22.5z" fill="#FFFFFF" opacity="0.3" />
    </svg>
  );
}

export function PrismaIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M19.7 18.3L13.2 2.8c-.4-.9-1.6-.9-2 0L4.3 18.3c-.4.9.3 1.9 1.3 1.9h12.8c1 0 1.7-1 1.3-1.9zm-7.7-12l4.8 11.4H7.2L12 6.3z" fill="#2D3748" />
      <path d="M12 6.3l4.8 11.4H12V6.3z" fill="#5A67D8" />
    </svg>
  );
}

export function RestApiIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="12" r="3" fill="#6366F1" />
      <circle cx="18" cy="6" r="3" fill="#8B5CF6" />
      <circle cx="18" cy="18" r="3" fill="#EC4899" />
      <path d="M8.7 10.6l6.6-3.2M8.7 13.4l6.6 3.2" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PowerBiIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="12" width="4.5" height="9" rx="1.5" fill="#F2C811" />
      <rect x="9.5" y="7" width="4.5" height="14" rx="1.5" fill="#F2C811" />
      <rect x="16" y="3" width="4.5" height="18" rx="1.5" fill="#F2C811" />
      <path d="M9.5 7h4.5v14h-4.5z" fill="#E0B000" opacity="0.3" />
    </svg>
  );
}

export function PandasIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="6" height="7" rx="1" fill="#150458" />
      <rect x="4" y="13" width="6" height="7" rx="1" fill="#FFD43B" />
      <rect x="14" y="4" width="6" height="7" rx="1" fill="#E70488" />
      <rect x="14" y="13" width="6" height="7" rx="1" fill="#150458" />
    </svg>
  );
}

export function SplunkIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#000000" />
      <path d="M7 6l6 6-6 6" stroke="#ED5D29" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 18h4" stroke="#65A637" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function EtlIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6h7m-7 6h11m-11 6h7" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M16 4l4 4-4 4m2-4H11" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="18" cy="18" r="3" fill="#10B981" />
    </svg>
  );
}

export function SsasIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l9 5.2v9.6L12 22l-9-5.2V7.2L12 2z" fill="#7C3AED" opacity="0.2" />
      <path d="M12 2l9 5.2-9 5.2-9-5.2L12 2z" fill="#8B5CF6" />
      <path d="M3 7.2l9 5.2v9.6l-9-5.2V7.2z" fill="#6D28D9" />
      <path d="M21 7.2l-9 5.2v9.6l9-5.2V7.2z" fill="#5B21B6" />
    </svg>
  );
}

export function DataWarehouseIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M3 4a2 2 0 012-2h14a2 2 0 012 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm0 8a2 2 0 012-2h14a2 2 0 012 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3zm0 8a2 2 0 012-2h14a2 2 0 012 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1z" fill="#3B82F6" />
      <circle cx="7" cy="5.5" r="1" fill="#FFFFFF" />
      <circle cx="7" cy="13.5" r="1" fill="#FFFFFF" />
      <circle cx="7" cy="20.5" r="1" fill="#FFFFFF" />
    </svg>
  );
}

export function GitGithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M21.6 10.9L13.1 2.4c-.5-.5-1.4-.5-1.9 0L8.8 4.8l2.4 2.4c.5-.2 1.2-.1 1.6.4.5.5.5 1.2.3 1.8l2.3 2.3c.6-.2 1.3-.2 1.8.3.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.5-.5-.6-1.3-.3-1.8L12 10.5V16c.3.2.6.5.7.9.4.8.1 1.8-.7 2.2-.8.4-1.8.1-2.2-.7-.4-.8-.1-1.8.7-2.2.3-.2.6-.2.9-.2v-5.6L8.8 8.1 2.4 14.5c-.5.5-.5 1.4 0 1.9l8.5 8.5c.5.5 1.4.5 1.9 0l8.8-8.8c.5-.5.5-1.4 0-1.9z" fill="#F05032" />
    </svg>
  );
}

export function DockerIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M22.5 10.5c-.3-.2-1.3-.3-2.3.2-.2-1.1-1-2-1.9-2.5l-.6.5c.6.5 1 1.2 1.1 2.1-.8.5-1.8.8-2.8.8H2c-.5 2 0 4.1 1.3 5.8 1.6 2 4.1 3.1 7.2 3.1 6.8 0 11.5-4.4 12-10z" fill="#2496ED" />
      <rect x="6" y="8" width="2" height="2" rx="0.3" fill="#2496ED" />
      <rect x="9" y="8" width="2" height="2" rx="0.3" fill="#2496ED" />
      <rect x="12" y="8" width="2" height="2" rx="0.3" fill="#2496ED" />
      <rect x="9" y="5" width="2" height="2" rx="0.3" fill="#2496ED" />
      <rect x="12" y="5" width="2" height="2" rx="0.3" fill="#2496ED" />
      <rect x="15" y="8" width="2" height="2" rx="0.3" fill="#2496ED" />
    </svg>
  );
}

export function VercelIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1L24 22H0L12 1Z" />
    </svg>
  );
}

export function LinuxIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8 2 6 5 6 9v5c0 4 3 8 6 8s6-4 6-8V9c0-4-2-7-6-7z" fill="#333333" />
      <ellipse cx="12" cy="14" rx="4" ry="5" fill="#FFFFFF" />
      <circle cx="10" cy="8" r="1" fill="#FFFFFF" />
      <circle cx="14" cy="8" r="1" fill="#FFFFFF" />
      <circle cx="10" cy="8" r="0.5" fill="#000000" />
      <circle cx="14" cy="8" r="0.5" fill="#000000" />
      <path d="M10 10c0 1 1 2 2 2s2-1 2-2H10z" fill="#FFA500" />
      <path d="M5 19c2 0 3-1 3-2H4c0 1 1 2 1 2zm14 0c-2 0-3-1-3-2h4c0 1-1 2-1 2z" fill="#FFA500" />
    </svg>
  );
}

export function PostmanIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="#FF6C37" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z" />
    </svg>
  );
}

export function OpenAiIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="#10A37F" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  );
}

export function RedshiftIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l8 4.6v9.2L12 20.4 4 15.8V6.6L12 2z" fill="#CC292B" opacity="0.2" />
      <path d="M12 2l8 4.6-8 4.6-8-4.6L12 2z" fill="#E63946" />
      <path d="M4 6.6l8 4.6v9.2l-8-4.6V6.6z" fill="#CC292B" />
      <path d="M20 6.6l-8 4.6v9.2l8-4.6V6.6z" fill="#8F1D20" />
    </svg>
  );
}

export function TechIcon({ name, className = "w-5 h-5" }: { name: string; className?: string }) {
  const n = name.toLowerCase();

  if (n.includes("supabase")) return <SupabaseIcon className={className} />;
  if (n.includes("seo")) return <SeoIcon className={className} />;
  if (n.includes("redshift")) return <RedshiftIcon className={className} />;
  if (n.includes("next")) return <NextjsIcon className={className} />;
  if (n.includes("react")) return <ReactIcon className={className} />;
  if (n.includes("typescript") || n === "ts") return <TypescriptIcon className={className} />;
  if (n.includes("tailwind")) return <TailwindIcon className={className} />;
  if (n.includes("framer")) return <FramerMotionIcon className={className} />;
  if (n.includes("html") || n.includes("css")) return <HtmlCssIcon className={className} />;
  if (n.includes("python") || n.includes("flask")) return <PythonIcon className={className} />;
  if (n.includes("node")) return <NodejsIcon className={className} />;
  if (n.includes("sql server")) return <SqlServerIcon className={className} />;
  if (n.includes("postgres")) return <PostgresIcon className={className} />;
  if (n.includes("mysql")) return <MysqlIcon className={className} />;
  if (n.includes("mongo")) return <MongodbIcon className={className} />;
  if (n.includes("prisma")) return <PrismaIcon className={className} />;
  if (n.includes("openai")) return <OpenAiIcon className={className} />;
  if (n.includes("rest") || n.includes("api")) return <RestApiIcon className={className} />;
  if (n.includes("power bi")) return <PowerBiIcon className={className} />;
  if (n.includes("pandas")) return <PandasIcon className={className} />;
  if (n.includes("splunk")) return <SplunkIcon className={className} />;
  if (n.includes("etl") || n.includes("ssis") || n.includes("pentaho")) return <EtlIcon className={className} />;
  if (n.includes("ssas") || n.includes("cube")) return <SsasIcon className={className} />;
  if (n.includes("warehouse") || n.includes("warehousing")) return <DataWarehouseIcon className={className} />;
  if (n.includes("git")) return <GitGithubIcon className={className} />;
  if (n.includes("docker")) return <DockerIcon className={className} />;
  if (n.includes("vercel")) return <VercelIcon className={className} />;
  if (n.includes("linux")) return <LinuxIcon className={className} />;
  if (n.includes("postman")) return <PostmanIcon className={className} />;

  return <Code2 className={className || "w-5 h-5 text-primary"} />;
}
