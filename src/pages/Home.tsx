import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Database, Globe, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, Svelte, TypeScript, Angular, Material UI, ShadCN",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Express, MongoDB, PostgreSQL, Prisma, NestJS",
  },
  {
    icon: Globe,
    title: "Cloud & DevOps",
    description: "AWS, GCP, CI/CD, Docker, Observability Tools",
  },
  {
    icon: Smartphone,
    title: "Team Leadership",
    description: "Engineering Management, Mentoring, Process Optimization",
  },
];

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Hi, I'm <span className="text-primary">Sagar Vadalia</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Senior Frontend/Fullstack Engineer with 5+ years of experience
            scaling startups and leading engineering teams, passionate about
            delivering impactful user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/projects">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I specialize in building scalable web applications with a focus on
              performance, user experience, and maintainable code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{skill.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Technologies I Work With
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React",
              "Svelte",
              "TypeScript",
              "JavaScript",
              "Node.js",
              "Express",
              "PostgreSQL",
              "MongoDB",
              "AWS",
              "GCP",
              "Prisma",
              "NestJS",
              "Python",
              "Angular",
              "Material UI",
              "ShadCN",
            ].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-sm py-1 px-3"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to work together?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            I'm always interested in hearing about new opportunities and
            exciting projects.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">
              Let's Connect <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
