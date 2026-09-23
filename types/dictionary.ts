export type Language = "en" | "es";

export interface Dictionary {
  common: {
    availableForWork: string;
    viewProject: string;
    liveDemo: string;
    sourceCode: string;
    copyEmail: string;
    emailCopied: string;
    downloadCv: string;
    contactMe: string;
    switchTheme: string;
    switchLanguage: string;
    allRightsReserved: string;
    previousProject: string;
    nextProject: string;
    playStore: string;
    visitWebsite: string;
  };
  hero: {
    greeting: string;
    role: string;
    title: string;
    titles: string[];
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  profile: {
    tag: string;
    name: string;
    role: string;
    location: string;
    status: string;
    bio: string;
    quote: string;
  };
  featuredProjects: {
    sectionBadge: string;
    items: {
      id: string;
      badge: string;
      title: string;
      tagline: string;
      description: string;
      keyFeatures: string[];
      metrics: {
        label: string;
        value: string;
      }[];
      tags: string[];
      liveUrl?: string;
      liveUrlLabel?: string;
      playStoreUrl?: string;
      githubUrl?: string;
      statusBadge?: string;
    }[];
  };
  featuredProject?: {
    badge: string;
    title: string;
    tagline: string;
    description: string;
    keyFeatures: string[];
    metrics: {
      label: string;
      value: string;
    }[];
    tags: string[];
    liveUrl: string;
    githubUrl: string;
  };
  techStack: {
    badge: string;
    title: string;
    subtitle: string;
    categories: {
      name: string;
      skills: string[];
    }[];
  };
  experience: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      role: string;
      company: string;
      period: string;
      description: string;
      highlights?: string[];
    }[];
    education?: {
      badge: string;
      degree: string;
      institution: string;
      period: string;
    };
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    email: string;
    scheduleCall: string;
    socials: {
      name: string;
      url: string;
      label: string;
    }[];
  };
  notFound: {
    title: string;
    description: string;
    backHome: string;
  };
  error: {
    title: string;
    description: string;
    retry: string;
  };
}
