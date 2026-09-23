"use client";

import React, { useState } from "react";
import { Mail, Check, Copy, Send, ExternalLink, MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function ContactCard() {
  const { dictionary } = useLanguage();
  const contact = dictionary.contact;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <SpotlightCard id="contact-section" className="p-6 sm:p-7">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{contact.badge}</span>
          </div>
          <span className="text-xs text-muted-foreground font-mono">Open Inbox</span>
        </div>

        <h3 className="text-xl font-bold tracking-tight text-foreground mb-1">
          {contact.title}
        </h3>
        <p className="text-xs text-muted-foreground mb-6">
          {contact.subtitle}
        </p>

        {/* Email Box with Copy Action */}
        <div className="p-3.5 rounded-2xl bg-card border border-border/90 flex items-center justify-between gap-3 mb-5 hover:border-primary/40 transition-colors">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <span className="text-xs sm:text-sm font-mono text-foreground truncate">
              {contact.email}
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={handleCopyEmail}
              type="button"
              aria-label={copied ? dictionary.common.emailCopied : dictionary.common.copyEmail}
              title={copied ? dictionary.common.emailCopied : dictionary.common.copyEmail}
              className="p-2 rounded-xl bg-muted hover:bg-border text-foreground transition-all duration-200 hover:scale-105 active:scale-95 text-xs font-medium cursor-pointer"
            >
              {copied ? (
                <span className="flex items-center gap-1 text-emerald-500 font-semibold">
                  <Check className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{dictionary.common.emailCopied}</span>
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{dictionary.common.copyEmail}</span>
                </span>
              )}
            </button>

            <a
              href={`mailto:${contact.email}`}
              aria-label="Send email"
              className="p-2 rounded-xl bg-primary text-white hover:opacity-90 transition-all duration-200 hover:scale-105 active:scale-95 text-xs font-medium"
            >
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-3 gap-2">
          {contact.socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-card border border-border/80 hover:border-primary/40 hover:bg-muted/40 transition-all duration-200 text-xs font-medium text-foreground group/link"
            >
              <span>{social.name}</span>
              <ExternalLink className="w-3 h-3 text-muted-foreground group-hover/link:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </div>

      {/* Footer copyright */}
      <div className="mt-6 pt-4 border-t border-border/70 flex items-center justify-between text-[11px] text-muted-foreground">
        <span>Diego Alas</span>
        <span>{dictionary.common.allRightsReserved}</span>
      </div>
    </SpotlightCard>
  );
}
