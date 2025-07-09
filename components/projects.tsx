"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, TrendingDown, Clock } from "lucide-react"

export function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Partner Self-Service Portal",
      summary:
        "Developed a comprehensive self-service portal for partners to manage their accounts, reducing support ticket volume by 20%.",
      description:
        "Led the end-to-end development of a partner self-service portal that revolutionized how external partners interact with our systems. The portal provides comprehensive account management capabilities, real-time data access, and automated workflows that significantly reduced the burden on our support team.",
      tools: ["Any Connector", "ADP WFN", "SQL", "Power BI", "REST APIs"],
      results: [
        "20% reduction in support tickets",
        "Improved partner satisfaction scores",
        "Automated 80% of routine partner requests",
        "Reduced response time from 24 hours to real-time",
      ],
      challenges: [
        "Integration with legacy systems",
        "Complex authentication requirements",
        "Real-time data synchronization",
        "Multi-tenant architecture design",
      ],
      icon: <TrendingDown className="h-5 w-5" />,
    },
    {
      title: "Employee IN via AC (Any Connector)",
      summary:
        "Streamlined employee onboarding process through automated data integration, reducing onboarding time by 30%.",
      description:
        "Designed and implemented an automated employee onboarding system using Any Connector to integrate multiple HR systems. The solution creates a seamless flow from initial employee data entry to complete system provisioning, eliminating manual data entry and reducing errors.",
      tools: ["Any Connector", "HRIS Integration", "Workflow Automation", "Data Validation"],
      results: [
        "30% reduction in onboarding time",
        "95% reduction in data entry errors",
        "Improved new hire experience",
        "Standardized onboarding process across departments",
      ],
      challenges: [
        "Multiple system integrations",
        "Data format standardization",
        "Error handling and rollback procedures",
        "Compliance with data privacy regulations",
      ],
      icon: <Clock className="h-5 w-5" />,
    },
  ]

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index)
  }

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real-world solutions that drive business value and operational efficiency
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">{project.title}</h3>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleProject(index)}
                    className="flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    {expandedProject === index ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">{project.summary}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-teal-100 text-teal-700">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {expandedProject === index && (
                  <div className="space-y-6 pt-6 border-t border-slate-200">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Project Overview:</h4>
                      <p className="text-slate-600 leading-relaxed">{project.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-3">Key Results:</h4>
                        <ul className="space-y-2">
                          {project.results.map((result, idx) => (
                            <li key={idx} className="text-slate-600 flex items-start">
                              <span className="text-green-600 mr-2">✓</span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-800 mb-3">Challenges Overcome:</h4>
                        <ul className="space-y-2">
                          {project.challenges.map((challenge, idx) => (
                            <li key={idx} className="text-slate-600 flex items-start">
                              <span className="text-orange-600 mr-2">•</span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
