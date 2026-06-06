import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, ExternalLink, Bot, Wand2 } from "lucide-react";

const AIPlaygroundSection: React.FC = () => {
  const experiments = [
    {
      title: "STELLAR — Interactive Particle Demo",
      description:
        "A live interactive HTML experiment built with Kimi K2.6 to explore AI-assisted creative coding, motion systems, and futuristic interface design.",
      highlights: [
        "Built as a real-time particle playground with multiple visual formation modes, immersive motion, and glowing sci-fi controls.",
        "Demonstrates my AI sense through prompt direction, iteration quality, aesthetic judgment, and the ability to turn model output into a polished experience.",
        "Represents the beginning of a growing collection of AI-assisted experiments that showcase how I use modern models to prototype and ship ideas quickly."
      ],
      technologies: [
        "Kimi K2.6",
        "Interactive HTML",
        "Creative Coding",
        "Particle Animation",
        "UI/UX",
        "Prompt Engineering"
      ],
      link: "/demos/starfield-particles.html",
      status: "AI Experiment"
    }
  ];

  return (
    <section
      id="ai-playground"
      className="py-12 md:py-16 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm mb-4">
            <Sparkles className="h-4 w-4" />
            <span>AI-Native Experiments</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            AI Playground
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mb-4"></div>

          <p className="max-w-2xl text-slate-300 text-base md:text-lg">
            Interactive experiments, AI-assisted builds, and creative prototypes
            that showcase how I use modern models to design, ship, and explore new ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {experiments.map((project, index) => (
            <Card
              key={index}
              className="border border-cyan-400/20 bg-white/5 backdrop-blur-md shadow-2xl overflow-hidden"
            >
              <CardContent className="p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-cyan-500/10 border border-cyan-400/20">
                        <Bot className="h-5 w-5 text-cyan-300" />
                      </div>

                      <Badge className="bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 hover:bg-cyan-500/20">
                        {project.status}
                      </Badge>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {project.highlights.map((item, i) => (
                        <li key={i} className="text-slate-300 flex gap-3">
                          <Wand2 className="h-4 w-4 mt-1 text-cyan-300 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="border-cyan-400/20 text-cyan-200 bg-cyan-500/5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-6 shadow-xl">
                    <div className="aspect-[16/10] rounded-xl border border-cyan-400/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-40">
                        <div className="absolute top-8 left-10 w-24 h-24 bg-cyan-400/20 blur-2xl rounded-full"></div>
                        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/20 blur-2xl rounded-full"></div>
                      </div>

                      <div className="relative z-10 text-center px-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 text-xs mb-4">
                          <Sparkles className="h-3.5 w-3.5" />
                          Live HTML Demo
                        </div>

                        <h4 className="text-2xl font-bold tracking-[0.25em] text-cyan-300 mb-3">
                          STELLAR
                        </h4>

                        <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
                          Interactive particle system with dynamic forms, motion-driven visuals,
                          and an AI-assisted creative coding workflow.
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm mt-4 text-center">
                      Opens as a standalone interactive HTML experience.
                    </p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="px-6 md:px-8 pb-6 pt-0">
                <Button
                  asChild
                  className="bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-semibold"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Launch Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIPlaygroundSection;