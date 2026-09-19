export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  features?: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}
