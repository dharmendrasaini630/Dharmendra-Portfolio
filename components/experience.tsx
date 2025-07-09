import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "ANR Software Pvt. Ltd.",
      period: "June 2023 – Present",
      location: "Current Position",
      description:
        "Leading API integration projects and business process optimization initiatives. Specializing in complex system integrations and data analysis solutions.",
      responsibilities: [
        "Design and implement API integration solutions",
        "Analyze business requirements and create technical specifications",
        "Optimize existing business processes for improved efficiency",
        "Collaborate with cross-functional teams on system implementations",
        "Provide technical training and support to team members",
      ],
      tools: ["Any Connector", "ADP WFN", "SQL", "Power BI", "Jira", "Agile/Scrum"],
    },
    {
      title: "Professional Services",
      company: "ANR Software Pvt. Ltd.",
      period: "June 2022 – May 2023",
      location: "Foundation Role",
      description:
        "Started my journey in business analysis and API integrations. Focused on learning core technologies and contributing to client projects.",
      responsibilities: [
        "Assisted in API integration projects",
        "Documented business requirements and processes",
        "Supported data analysis and reporting initiatives",
        "Participated in client meetings and requirement gathering",
        "Contributed to process improvement initiatives",
      ],
      tools: ["Excel", "SQL Basics", "Documentation Tools", "Process Mapping"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Professional Experience</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My journey in business analysis and technical solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal-200 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-teal-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                  <Card className="md:ml-16 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-800 mb-1">{exp.title}</h3>
                          <div className="flex items-center text-teal-600 font-semibold mb-2">
                            <Building className="h-4 w-4 mr-2" />
                            {exp.company}
                          </div>
                        </div>
                        <div className="flex flex-col sm:items-end space-y-1">
                          <div className="flex items-center text-slate-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            {exp.period}
                          </div>
                          <div className="flex items-center text-slate-500">
                            <MapPin className="h-4 w-4 mr-2" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-600 mb-6 leading-relaxed">{exp.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-800 mb-3">Key Responsibilities:</h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="text-slate-600 flex items-start">
                              <span className="text-teal-600 mr-2">•</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-800 mb-3">Tools & Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.tools.map((tool, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-teal-100 text-teal-700">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
