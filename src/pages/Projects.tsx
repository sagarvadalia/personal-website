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
import { ExternalLink, Github, Calendar } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Healthcare Booking Bot",
    description:
      "Developed an intelligent booking bot that automates patient scheduling and reduces administrative overhead by 40%. Implemented natural language processing to understand patient requests and automatically schedule appropriate appointments with healthcare providers.",
    image: "/api/placeholder/400/250",
    technologies: [
      "SvelteKit",
      "TypeScript",
      "OpenAI API",
      "Node.js",
      "PostgreSQL",
      "WebSockets",
    ],
    liveUrl: "",
    githubUrl: "",
    date: "2025",
    status: "Production",
    company: "Harbor Health",
  },
  {
    title: "SSO Integration Platform",
    description:
      "Built comprehensive single sign-on integrations with CapRx and mPulse systems for Harbor Health. Streamlined user authentication across multiple healthcare platforms and improved security compliance for patient data access.",
    image: "/api/placeholder/400/250",
    technologies: [
      "SvelteKit",
      "SAML",
      "OAuth 2.0",
      "JWT",
      "Node.js",
      "Redis",
      "Auth0",
    ],
    liveUrl: "",
    githubUrl: "",
    date: "2025",
    status: "Production",
    company: "Harbor Health",
  },
  {
    title: "Healthcare Observability Infrastructure",
    description:
      "Configured and implemented comprehensive observability solution using Datadog for Harbor Health's healthcare systems. Set up monitoring, alerting, and performance tracking across microservices to ensure 99.9% uptime for critical patient systems.",
    image: "/api/placeholder/400/250",
    technologies: [
      "Datadog",
      "APM",
      "Log Management",
      "Infrastructure Monitoring",
      "SvelteKit",
      "Node.js",
    ],
    liveUrl: "",
    githubUrl: "",
    date: "2025",
    status: "Production",
    company: "Harbor Health",
  },
  {
    title: "Airvia - AI Travel Itinerary Platform",
    description:
      "Built a comprehensive travel application from the ground up as the founding engineer. Features AI-powered itinerary generation, real-time booking integration, and personalized travel recommendations based on user preferences and budget.",
    image: "/api/placeholder/400/250",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "AI/ML APIs",
      "MongoDB",
      "Stripe",
      "Google Maps API",
    ],
    liveUrl: "",
    githubUrl: "",
    date: "2025",
    status: "In Development",
    company: "Airvia",
  },
  {
    title: "Memora Health Design System",
    description:
      "Led the creation of a comprehensive design system and component library that improved developer velocity by 2x across multiple teams. Implemented standardized UI components, design tokens, and documentation that serves 5+ engineering teams.",
    image: "/api/placeholder/400/250",
    technologies: [
      "React",
      "TypeScript",
      "Storybook",
      "Figma",
      "NPM",
      "Jest",
      "CSS-in-JS",
    ],
    liveUrl: "",
    githubUrl: "",
    date: "2023-2024",
    status: "Production",
    company: "Memora Health",
  },
  {
    title: "Healthcare Messaging Platform",
    description:
      "As Team Lead at Memora Health, managed a team of 5 engineers building scalable messaging infrastructure for healthcare providers. Implemented real-time communication features and improved system performance by 40%.",
    image: "/api/placeholder/400/250",
    technologies: [
      "React",
      "Node.js",
      "WebSockets",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
    ],
    liveUrl: "",
    githubUrl: "",
    date: "2022-2024",
    status: "Production",
    company: "Memora Health",
  },
  {
    title: "AI/ML Model Monitoring Dashboard",
    description:
      "Developed a comprehensive monitoring dashboard for AI/ML models at Fractal Analytics. Tracks model performance, data drift, and prediction accuracy in real-time. Received enterprise-wide recognition for innovation and impact.",
    image: "/api/placeholder/400/250",
    technologies: [
      "React",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "D3.js",
      "Docker",
      "AWS",
    ],
    liveUrl: "",
    githubUrl: "",
    date: "2021-2022",
    status: "Production",
    company: "Fractal Analytics",
  },
  {
    title: "Automated Testing Framework",
    description:
      "Built a comprehensive test automation framework for React applications at Zebra Technology. Implemented end-to-end testing pipelines that reduced manual testing time by 60% and improved deployment confidence.",
    image: "/api/placeholder/400/250",
    technologies: [
      "React",
      "TypeScript",
      "Cypress",
      "Jest",
      "GitHub Actions",
      "Docker",
    ],
    liveUrl: "",
    githubUrl: "",
    date: "2020-2021",
    status: "Production",
    company: "Zebra Technology",
  },
  {
    title: "Enterprise React Applications",
    description:
      "Developed multiple React-based applications for Zebra Technology's enterprise clients. Built responsive, accessible interfaces for warehouse management and inventory tracking systems used by Fortune 500 companies.",
    image: "/api/placeholder/400/250",
    technologies: [
      "React",
      "TypeScript",
      "Material-UI",
      "Redux",
      "REST APIs",
      "Webpack",
    ],
    liveUrl: "",
    githubUrl: "",
    date: "2020-2021",
    status: "Production",
    company: "Zebra Technology",
  },
  {
    title: "Real-Time Analytics Platform",
    description:
      "Personal project building a real-time analytics platform for web applications. Features event tracking, user behavior analysis, and customizable dashboards. Implemented using modern observability tools and practices.",
    image: "/api/placeholder/400/250",
    technologies: [
      "React",
      "Node.js",
      "ClickHouse",
      "Redis",
      "Datadog",
      "PostHog",
      "Sentry",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/sagarvadalia",
    date: "2024",
    status: "In Development",
    company: "Personal Project",
  },
];

export function Projects() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Featured Projects
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A showcase of impactful projects from my 5+ years as a Senior
          Frontend/Fullstack Engineer, spanning AI integration, team leadership,
          and scalable system architecture.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col h-full hover:shadow-lg transition-shadow"
          >
            {/* Project Image Placeholder */}
            <div className="h-48 bg-muted rounded-t-lg flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <div className="text-lg font-semibold mb-1">
                  {project.company}
                </div>
                <div className="text-sm">Project Preview</div>
              </div>
            </div>

            <CardHeader className="flex-grow">
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      project.status === "Production" ? "default" : "secondary"
                    }
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {project.date}
                  </span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {project.company}
                </Badge>
              </div>
              <CardDescription className="text-sm leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
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

              {/* Actions */}
              <div className="flex gap-2">
                {project.liveUrl && (
                  <Button size="sm" className="flex-1" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    size="sm"
                    variant="outline"
                    className={project.liveUrl ? "flex-1" : "w-full"}
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      View Code
                    </a>
                  </Button>
                )}
                {!project.liveUrl && !project.githubUrl && (
                  <div className="w-full text-center text-sm text-muted-foreground py-2">
                    Proprietary Project
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Want to see more?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            These projects represent highlights from my professional experience.
            I'm always working on new challenges and would love to discuss
            potential collaborations.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <a href="/contact">Let's Connect</a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/sagarvadalia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
