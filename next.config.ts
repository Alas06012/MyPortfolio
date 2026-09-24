import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// For GitHub Pages project site (https://alas06012.github.io/MyPortfolio)
// Can be customized or cleared for custom domains via NEXT_PUBLIC_BASE_PATH
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : isProd
    ? "/MyPortfolio"
    : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./lib/imageLoader.ts",
  },
};

export default nextConfig;
