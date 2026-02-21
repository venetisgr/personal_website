import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const socialLinks = [
  { href: profile.social.github, icon: Github, label: "GitHub" },
  { href: profile.social.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: profile.social.email, icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={link.label}
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
