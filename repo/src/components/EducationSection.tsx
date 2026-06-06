
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from 'lucide-react';

interface EducationProps {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  details: string[];
}

const EducationItem: React.FC<EducationProps> = ({ 
  degree, 
  institution, 
  location, 
  period, 
  gpa,
  details 
}) => {
  return (
    <div className="mb-12 last:mb-0 group">
      <div className="timeline-dot bg-portfolio-blue group-hover:scale-125 transition-all duration-300"></div>
      <Card className="border-none shadow-md group-hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-50 to-white h-2"></div>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
            <div>
              <div className="flex items-center mb-2">
                <GraduationCap className="h-5 w-5 text-portfolio-blue mr-2" />
                <h3 className="text-xl font-bold text-portfolio-navy">{degree}</h3>
              </div>
              <p className="text-portfolio-gray flex items-center">
                <Award className="h-4 w-4 inline mr-2 text-portfolio-gray" />
                {institution} | {location}
              </p>
              {gpa && <p className="text-portfolio-blue font-medium mt-1 flex items-center">
                <span className="inline-block w-4 h-4 bg-portfolio-blue text-white text-xs rounded-full mr-2 text-center">A</span>
                GPA: {gpa}</p>}
            </div>
            <span className="time-period mt-2 md:mt-0 flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {period}
            </span>
          </div>
          
          <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-portfolio-blue">
            {details.map((detail, index) => (
              <li key={index} className="text-portfolio-gray">
                {detail}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

const EducationSection: React.FC = () => {
  const educationItems = [
    {
      degree: "High School Diploma",
      institution: "Millburn High School",
      location: "Millburn, United States",
      period: "Sep '22 — June '26",
      gpa: "4.3",
      details: [
        "AP Statistics, AP Precalculus, AP Chemistry, AP Biology, AP Computer Science,  AP Computer Science Principles, AP Chinese Language, AP Calculus BC, AP Physics 1, AP Physics 2, AP Macro, AP Micro, AP Psychology "
      ]
    },
    {
      degree: "Science Honors Program",
      institution: "The Columbia University",
      location: "New York, United States",
      period: "Sep '25 — Present",
      details: [
        "Classical and Quantum Computing Devices"
      ]
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
            <GraduationCap className="h-8 w-8 text-portfolio-blue" />
          </div>
          <h2 className="section-title mb-0">Education</h2>
        </div>
        <p className="section-subtitle">
          Driven by continuous learning and a passion for emerging technologies, I am committed to expanding my technical expertise through curiosity and innovation.
        </p>
        
        <div className="mt-16 timeline-container">
          {educationItems.map((education, index) => (
            <EducationItem
              key={index}
              degree={education.degree}
              institution={education.institution}
              location={education.location}
              period={education.period}
              gpa={education.gpa}
              details={education.details}
            />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-portfolio-navy mb-6 text-center">Watch & Create</h3>
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-gradient-to-r from-portfolio-blue to-blue-400 h-1"></div>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-portfolio-blue" />
                  </div>
                <div className="mt-6 text-center">
  <a
    href="https://www.youtube.com/@LukeZ-888/shorts"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-portfolio-blue text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 transition-all duration-300 shadow-md"
  >
    🎬 Visit My YouTube Channel
  </a>
  <p className="text-portfolio-gray mt-2">
    Watch my latest videos on AI, creativity, and innovation.
  </p>
</div>
                </div>
                <Badge className="bg-portfolio-blue mt-2 md:mt-0 px-4 py-1 animate-pulse">Active</Badge>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
