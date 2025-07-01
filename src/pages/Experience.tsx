import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  MapPin,
  ExternalLink,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";

const experiences = [
  {
    company: "Harbor Health",
    position: "Senior Software Engineer",
    duration: "February 2025 - Present",
    location: "Remote",
    type: "Full-time",
    description:
      "Swiss army knife IC, designing, developing, and maintaining several high-value features including AI booking bot and SSO integrations.",
    achievements: [
      "Designed and developed AI booking bot using AWS Bedrock",
      "Implemented SSO with enterprise partners MPulse and CapRX",
      "Led internationalization efforts in marketing site and patient portal",
      "Key contributor to SvelteKit and Svelte 4 → 5 modernization efforts",
      "Assessed and configured observability tools like Datadog",
    ],
    technologies: [
      "Svelte",
      "SvelteKit",
      "TypeScript",
      "AWS Bedrock",
      "Datadog",
      "Sentry",
    ],
    companyUrl: "https://harborhealth.com",
  },
  {
    company: "Airvia",
    position: "Founding Engineer",
    duration: "February 2025 - Present",
    location: "Remote",
    type: "Full-time",
    description:
      "Sole developer responsible for building the Airvia travel planning application from the ground up.",
    achievements: [
      "Architected and implemented entire stack: React frontend, Express backend, MongoDB database",
      "Led all infrastructure and DevOps: monorepo architecture, CI/CD pipelines, Render deployment",
      "Integrated observability tooling: Sentry for error monitoring, PostHog for product insights",
      "Designed AI-powered itinerary generation using LLMs",
      "Made all critical technical decisions from stack selection to deployment strategies",
    ],
    technologies: [
      "React",
      "Express",
      "MongoDB",
      "TailwindCSS",
      "ShadCN",
      "Sentry",
      "PostHog",
    ],
    companyUrl: "https://airvia.com",
  },
  {
    company: "Memora Health",
    position: "Team Lead",
    duration: "May 2022 - December 2024",
    location: "Remote",
    type: "Full-time",
    description:
      "Managed a team of 5 engineers as a technical lead, driving modernization initiatives and engineering excellence.",
    achievements: [
      "Created and maintained Memora Design System, leading to 2x improvement in developer velocity",
      "Led modernization initiatives: Storybook, TypeScript, Tanstack Query, Vite",
      "Overhauled frontend testing strategy with Nock, leading to 10x drop in flaky test cases",
      "Built analytics metrics dashboard and widget factory for dynamic UI components",
      "Optimized websocket infrastructure for real-time chat",
      "Interviewed, onboarded, and mentored several newer engineers",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tanstack Query",
      "Storybook",
      "WebSockets",
      "BigQuery",
    ],
    companyUrl: "https://memorahealth.com",
  },
  {
    company: "Fractal Analytics",
    position: "Full Stack Developer",
    duration: "July 2021 - May 2022",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Created AI/ML model monitoring dashboard and built UI tools for data scientists and executives.",
    achievements: [
      "Built AI/ML model monitoring dashboard to analyze machine learning model results",
      "Designed and developed UI tools for data scientists, governance teams, marketing, and executives",
      "Received enterprise-wide recognition at Verizon and Fractal town hall meetings",
      "Mentored several junior engineers",
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Figma"],
    companyUrl: "https://fractal.ai",
  },
  {
    company: "Zebra Technology",
    position: "Software Engineer",
    duration: "June 2020 - July 2021",
    location: "Holtsville, NY",
    type: "Full-time",
    description:
      "Maintained Zebra Device Farm and built full-stack website for automated test data analysis.",
    achievements: [
      "Built full-stack website to display and analyze automated test data",
      "Used Python and Flask to gather data from CLM Analyzer and applied machine learning",
      "Developed intuitive, modern single-page application in React.js",
      "Redesigned CLM Analyzer improving UX, load time, and functionality",
    ],
    technologies: [
      "React",
      "Python",
      "Flask",
      "Machine Learning",
      "JavaScript",
    ],
    companyUrl: "https://zebra.com",
  },
];

const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "Svelte",
      "SvelteKit",
      "TypeScript",
      "Angular",
      "Material UI",
    ],
    level: 95,
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Python", "Flask", "Django"],
    level: 90,
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Prisma", "TypeORM", "Sequelize"],
    level: 85,
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "GCP", "CI/CD", "Render", "Firebase"],
    level: 80,
  },
  {
    category: "Observability",
    items: ["Datadog", "Sentry", "PostHog", "LogRocket"],
    level: 75,
  },
];

export function Experience() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Experience</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          5+ years of professional experience scaling startups and leading
          engineering teams, with expertise in modern web technologies and
          AI-powered applications.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Experience Timeline */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-8">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.position}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-semibold text-primary">
                          {exp.company}
                        </span>
                        {exp.companyUrl && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-0 h-auto"
                            asChild
                          >
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                    <Badge
                      variant={
                        exp.type === "Full-time" ? "default" : "secondary"
                      }
                    >
                      {exp.type}
                    </Badge>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <span className="hidden sm:inline">•</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Technical Skills
                </CardTitle>
                <CardDescription>
                  Proficiency levels in key technologies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">
                        {skillGroup.category}
                      </h4>
                      <span className="text-xs text-muted-foreground">
                        {skillGroup.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 mb-3">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${skillGroup.level}%` }}
                      />
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {skillGroup.items.map((item, itemIndex) => (
                        <Badge
                          key={itemIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Leadership & Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Team Members Mentored
                  </span>
                  <span className="font-semibold">8+</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Projects Delivered
                  </span>
                  <span className="font-semibold">50+</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Years of Experience
                  </span>
                  <span className="font-semibold">
                    {new Date().getFullYear() - 2019}+
                  </span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Code Reviews</span>
                  <span className="font-semibold">1000+</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
