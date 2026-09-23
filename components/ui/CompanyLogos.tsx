import React from "react";
import Image from "next/image";
import { Briefcase } from "lucide-react";

export function CompanyLogo({ name, className = "w-10 h-10" }: { name: string; className?: string }) {
  const n = name.toLowerCase();

  let src = "";
  let alt = name;

  if (n.includes("blackhawk")) {
    src = "/companies/blackhawk.png";
    alt = "Blackhawk Network";
  } else if (n.includes("datasphere") || n.includes("technosal") || n.includes("simov")) {
    src = "/companies/datasphere.png";
    alt = "Datasphere / Technosal";
  } else if (n.includes("teleperformance")) {
    src = "/companies/teleperformance.png";
    alt = "Teleperformance";
  } else if (n.includes("itca")) {
    src = "/companies/itca.png";
    alt = "ITCA";
  }

  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-xl bg-white flex items-center justify-center p-1 shadow-xs border border-border/60 ${className}`}>
        <Image
          src={src}
          alt={alt}
          width={40}
          height={40}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center bg-muted/60 rounded-xl ${className}`}>
      <Briefcase className="w-4 h-4 text-primary" />
    </div>
  );
}
