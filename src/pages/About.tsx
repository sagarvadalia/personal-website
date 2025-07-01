import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";

const timeline = [
  {
    year: "Feb 2025 - Present",
    title: "Senior Software Engineer",
    company: "Harbor Health",
    description:
      "Swiss army knife IC designing AI booking bots, SSO integrations, and modernization efforts. Key contributor to SvelteKit adoption and observability tooling.",
    type: "work",
  },
  {
    year: "Feb 2025 - Present",
    title: "Founding Engineer",
    company: "Airvia",
    description:
      "Sole developer building travel planning application from ground up. Full-stack development with React, Express, MongoDB, and AI-powered itinerary generation.",
    type: "work",
  },
  {
    year: "May 2022 - Dec 2024",
    title: "Team Lead",
    company: "Memora Health",
    description:
      "Managed team of 5 engineers. Created Memora Design System improving developer velocity 2x. Led modernization initiatives and engineering excellence.",
    type: "work",
  },
  {
    year: "Jul 2021 - May 2022",
    title: "Full Stack Developer",
    company: "Fractal Analytics",
    description:
      "Created AI/ML model monitoring dashboard. Built UI tools for data scientists and executives. Received enterprise-wide recognition.",
    type: "work",
  },
  {
    year: "2020",
    title: "Bachelor of Computer Science",
    company: "SUNY Old Westbury",
    description:
      "Graduated with 3.78 GPA. Also completed Fullstack Academy Immersive Cohort and 70 credits at Cornell University.",
    type: "education",
  },
];

export function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Passionate full stack developer with a love for creating innovative
          solutions and bringing ideas to life through code.
        </p>
      </div>

      {/* Bio Section */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            My Story
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            I'm a Senior Frontend/Fullstack Engineer with 5+ years of experience
            scaling startups and leading engineering teams. My journey started
            with a Computer Science degree from SUNY Old Westbury and continued
            through Fullstack Academy, where I've built expertise in modern web
            technologies and team leadership.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I specialize in React, TypeScript, Node.js, and cloud technologies
            like AWS. I have a proven track record of delivering high-quality
            software solutions, from e-commerce platforms to data analytics
            dashboards. I'm passionate about writing clean, efficient code and
            implementing best practices for performance and scalability.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Beyond coding, I enjoy mentoring junior developers, contributing to
            open source projects, and staying current with emerging
            technologies. I believe in continuous learning and always strive to
            improve both my technical skills and collaboration.
          </p>
        </CardContent>
      </Card>

      {/* Skills & Interests */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
            <CardDescription>
              Technologies I work with regularly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Svelte",
                    "SvelteKit",
                    "TypeScript",
                    "Angular",
                    "Material UI",
                    "ShadCN",
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "Express",
                    "NestJS",
                    "Python",
                    "PostgreSQL",
                    "MongoDB",
                    "Prisma",
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Cloud & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AWS",
                    "GCP",
                    "Datadog",
                    "Sentry",
                    "PostHog",
                    "Logrocket",
                    "CI/CD",
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interests & Hobbies</CardTitle>
            <CardDescription>What I enjoy outside of coding</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>🎮 Gaming and game development</li>
              <li>📚 Reading tech blogs and books</li>
              <li>🏃‍♂️ Running and outdoor activities</li>
              <li>🎵 Music production and playing instruments</li>
              <li>📷 Photography and visual arts</li>
              <li>🌱 Contributing to open source projects</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Professional Journey
          </CardTitle>
          <CardDescription>My career timeline and milestones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      item.type === "work" ? "bg-primary/10" : "bg-secondary/10"
                    }`}
                  >
                    {item.type === "work" ? (
                      <Briefcase className="h-5 w-5 text-primary" />
                    ) : (
                      <GraduationCap className="h-5 w-5 text-secondary-foreground" />
                    )}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-px h-16 bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {item.year}
                    </Badge>
                  </div>
                  <p className="text-sm text-primary mb-2">{item.company}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
