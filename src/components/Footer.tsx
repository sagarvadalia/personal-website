import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/sagarvadalia",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sagarvadalia",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/sagarvadalia",
      label: "Twitter",
    },
    {
      icon: Mail,
      href: "mailto:sv344@cornell.edu",
      label: "Email",
    },
  ];

  return (
    <footer className="w-full border-t bg-muted/50 mt-auto">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link
              to="/"
              className="text-lg font-bold hover:text-primary transition-colors"
            >
              Sagar Vadalia
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              Senior Frontend/Fullstack Engineer
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              to="/about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/experience"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Experience
            </Link>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex items-center space-x-2">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="h-9 w-9 p-0 hover:bg-primary/10"
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} Sagar Vadalia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
