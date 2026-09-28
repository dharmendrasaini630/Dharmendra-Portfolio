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
      title: "SITA Billing Application",
      summary:
        "Leading the analysis and delivery of an enterprise Billing Application for SITA, the ICT agency of the South African government, managing a cross-functional team of 16-18 members.",
      description:
        "Led the analysis and delivery of an enterprise Billing Application for SITA (State Information Technology Agency), South Africa. The application lets SITA capture customer details and raise monthly bills to its clients for the services provided. Travelled onsite to Johannesburg for 3 months for requirement gathering and elicitation. Prepared BRD and FRD, built interactive prototypes, and developed a Work Breakdown Structure (WBS) for modular delivery.",
      tools: ["Azure DevOps", "JIRA", "BRD/FRD", "Prototyping", "Agile/Scrum", "Stakeholder Management"],
      results: [
        "Onsite requirement engineering in Johannesburg, South Africa",
        "Managed cross-functional team of 16-18 members",
        "Developed comprehensive BRD and FRD documentation",
        "Built interactive prototypes for stakeholder visualization",
        "Facilitated Scrum ceremonies and removed impediments",
        "Weekly status calls and demos with external stakeholders",
      ],
      challenges: [
        "Onsite stakeholder management in international environment",
        "Complex government/public sector requirements",
        "Cross-functional team coordination across time zones",
        "Modular delivery sequencing with WBS",
        "Agile delivery in government sector context",
      ],
      icon: <TrendingDown className="h-5 w-5" />,
    },
    {
      title: "Partner Self-Service Portal",
      summary:
        "Built an intuitive portal for third-party partners to monitor and manage integrations, reducing support ticket queries by 50% through enhanced self-service capabilities.",
      description:
        "Developed a comprehensive self-service portal for partners to monitor and manage integrations efficiently. Delivered graphical insights on live stores integrated with brands such as Little Caesars, Pizza Hut & McDonald's over 7/30-day periods. Enabled video uploads, document signing, and sharing of essential updates, improving partner engagement and accessibility.",
      tools: ["Any Connector", "ADP WFN", "SQL", "Power BI", "REST APIs"],
      results: [
        "50% reduction in support ticket queries",
        "Partner dashboard with live store insights",
        "Resource Centre with video and document management",
        "Improved partner engagement and accessibility",
        "Enhanced self-service capabilities",
      ],
      challenges: [
        "Integration with legacy systems",
        "Complex authentication requirements",
        "Real-time data synchronization",
        "Multi-brand partner management",
      ],
      icon: <TrendingDown className="h-5 w-5" />,
    },
    {
      title: "Employee IN Integration via AC",
      summary:
        "Streamlined employee onboarding process through automated data integration, reducing onboarding time for new employees by 30%.",
      description:
        "Streamlined the Employee IN Integration process to onboard employees in Altametrics Enterprise Office using REST APIs. Eliminated internal processing layers, allowing direct ingestion of partner data via Any Connector service. Built a flexible, secure processing framework supporting partner-specific requirements including encrypted SSN handling and rotational API key management.",
      tools: ["Any Connector", "HRIS Integration", "Workflow Automation", "REST APIs", "Data Validation"],
      results: [
        "30% reduction in onboarding time",
        "Partner-configurable architecture",
        "Encrypted SSN handling for select clients",
        "Rotational API key management",
        "Direct data ingestion without internal layers",
      ],
      challenges: [
        "Multiple system integrations",
        "Data format standardization",
        "Security requirements for SSN handling",
        "Partner-specific customization needs",
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
