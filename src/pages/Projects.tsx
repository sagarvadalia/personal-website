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
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.",
    image: "/api/placeholder/400/250",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/sagarvadalia/ecommerce-platform",
    date: "2024",
    status: "Live",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern web technologies.",
    image: "/api/placeholder/400/250",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Socket.io",
      "Tailwind CSS",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/sagarvadalia/task-management-app",
    date: "2023",
    status: "Live",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application that displays current conditions, forecasts, and historical data. Features location-based weather and interactive charts.",
    image: "/api/placeholder/400/250",
    technologies: [
      "React",
      "JavaScript",
      "OpenWeather API",
      "Chart.js",
      "CSS3",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/sagarvadalia/weather-dashboard",
    date: "2023",
    status: "Live",
  },
  {
    title: "Social Media Analytics Tool",
    description:
      "A comprehensive analytics dashboard for social media performance tracking. Includes data visualization, reporting features, and integration with multiple platforms.",
    image: "/api/placeholder/400/250",
    technologies: ["Vue.js", "Python", "FastAPI", "PostgreSQL", "D3.js"],
    liveUrl: "",
    githubUrl: "https://github.com/sagarvadalia/social-analytics",
    date: "2023",
    status: "In Development",
  },
  {
    title: "Personal Blog Platform",
    description:
      "A custom-built blog platform with markdown support, comment system, and admin panel. Features SEO optimization and responsive design.",
    image: "/api/placeholder/400/250",
    technologies: ["Next.js", "TypeScript", "Prisma", "MySQL", "NextAuth.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/sagarvadalia/blog-platform",
    date: "2022",
    status: "Live",
  },
  {
    title: "Cryptocurrency Tracker",
    description:
      "A real-time cryptocurrency price tracking application with portfolio management, price alerts, and market analysis features.",
    image: "/api/placeholder/400/250",
    technologies: [
      "React",
      "JavaScript",
      "CoinGecko API",
      "Redux",
      "Material-UI",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/sagarvadalia/crypto-tracker",
    date: "2022",
    status: "Live",
  },
];

export function Projects() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A collection of projects that showcase my skills in full-stack
          development, from simple web applications to complex enterprise
          solutions.
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
              Project Screenshot
            </div>

            <CardHeader className="flex-grow">
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      project.status === "Live" ? "default" : "secondary"
                    }
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {project.date}
                </span>
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
                <Button size="sm" variant="outline" className="flex-1" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Interested in working together?</CardTitle>
            <CardDescription>
              I'm always open to discussing new opportunities and exciting
              projects.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" asChild>
              <a href="/contact">Get In Touch</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
