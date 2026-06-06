
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection: React.FC = () => {
  const qualities = [
    { title: "Problem Solver", description: "Analytical approach to complex problems" },
    { title: "Empathy‑led innovator", description: "Committed to knowledge sharing" },
    { title: "All‑State Clarinetist", description: "Lighting up more lives with music" },
    { title: "AI Tech Enthusiast", description: "Continuously upskilling in new technologies" }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-8 border-blue-300"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full border-8 border-blue-300"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-blue-200"></div>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title relative inline-block">
          About Me
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-portfolio-blue"></span>
        </h2>
        <p className="section-subtitle">
          Student technologist, AI innovator, and lifelong learner dedicated to designing meaningful tools and inspiring curiosity through technology.
        </p>
        
        <div className="mt-12">
          <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-r from-white to-blue-50">
            <CardContent className="p-8">
              <div className="prose max-w-none">
                <p className="mb-4 text-lg leading-relaxed">
                   <span className="highlight font-semibold">Curiosity drives everything</span>—how code shapes behavior, how music sharpens attention, and how empathy turns ideas into impact. At Millburn High School (GPA 4.322; ACT 36), learning is a daily habit, from AP CS and Physics to leading clarinet in state and regional ensembles, where disciplined practice meets creative problem‑solving. Aspiring computer scientist and innovator with experience in AI, web development, and automation, committed to building technologies that connect people and make the world smarter and kinder
                </p>
                
                <p className="mb-4 text-lg leading-relaxed">
                   <span className="highlight font-semibold">Care shows up in the users chosen:</span> co‑founder of Guardians of the Generations, designing digital‑safety workshops that help older adults spot scams, secure devices, and feel confident online. Coaching youth tennis and volunteering at Turtle Back Zoo deepen patience, clear communication, and a respect for how people learn differently—principles carried into every project brief and code review. The goal is always the same: listen first, build second, iterate until it serves real needs with clarity and reliability.                </p>

                <p className="mb-6 text-lg leading-relaxed">
                  <span className="highlight font-semibold">Learning is the throughline—</span>Columbia SHP coursework in advanced computing, hands‑on builds with Python/React/cloud basics, and client websites that turn constraints into clean, scalable solutions. Recent work includes AI tools and workflow automations for small businesses, with write‑ups that show decisions, metrics, and reflections rather than just results. If admitted, that same curiosity, care, and momentum will strengthen communities on campus—through human‑centered engineering, music, and mentorship that make technology more inclusive in practice, not just in promise.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                  {qualities.map((quality, index) => (
                    <Card key={index} className="border-none bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
                      <CardContent className="p-4 text-center">
                        <h3 className="font-bold text-lg text-portfolio-blue mb-1">{quality.title}</h3>
                        <p className="text-sm text-portfolio-gray">{quality.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 p-5 border-l-4 border-portfolio-blue bg-blue-50 rounded">
                  <p className="text-lg italic text-portfolio-navy">
                    "Sharing knowledge while continually upskilling in AI to turn complex challenges into clear, reliable systems that help people.
</p>                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
