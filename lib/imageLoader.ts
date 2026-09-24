"use client";

interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

const defaultBasePath = process.env.NODE_ENV === "production" ? "/MyPortfolio" : "";
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : defaultBasePath;

export default function imageLoader({ src }: ImageLoaderProps): string {
  // If the image is an external URL, return as-is
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }

  const cleanSrc = src.startsWith("/") ? src : `/${src}`;

  // Avoid duplicate prefixing if already prefixed
  if (basePath && cleanSrc.startsWith(basePath)) {
    return cleanSrc;
  }

  return `${basePath}${cleanSrc}`;
}
