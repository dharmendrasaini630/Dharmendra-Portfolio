import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Users, Palette, MessageSquare, Target } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Business Analysis",
      icon: <Target className="h-6 w-6" />,
      color: "bg-teal-100 text-teal-600",
      skills: ["As-Is/To-Be Analysis", "BRD Creation", "FRD Documentation", "Requirements Gathering", "Requirement Elicitation", "Gap Analysis", "Risk Assessment"],
    },
    {
      title: "Project Management",
      icon: <Users className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600",
      skills: ["Agile/Scrum", "Azure DevOps", "JIRA", "Trello", "SDLC", "Release Management", "Delivery Excellence", "Impediments Management"],
    },
    {
      title: "API & Integration",
      icon: <Code className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-600",
      skills: ["REST APIs", "Postman", "API Testing", "API Troubleshooting", "System Integration", "Webhook Management"],
    },
    {
      title: "Data & Analytics",
      icon: <Database className="h-6 w-6" />,
      color: "bg-green-100 text-green-600",
      skills: ["SQL", "Advanced Excel", "Power BI", "Data Visualization", "Reporting"],
    },
    {
      title: "Testing & Quality",
      icon: <Palette className="h-6 w-6" />,
      color: "bg-pink-100 text-pink-600",
      skills: ["Manual Testing", "UAT", "Integration Testing", "Incident Management", "RCA"],
    },
    {
      title: "Documentation & Design",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "bg-orange-100 text-orange-600",
      skills: ["Use Cases", "User Stories", "Wireframing", "Workflow Optimization", "Digital Journey Design"],
    },
  ]

  const coreCompetencies = [
    {
      skill: "Business Analysis & Requirement Engineering",
      level: "Expert",
      experience: "4+ Years",
      description: "As-Is/To-Be analysis, BRD/FRD creation, user story writing, gap analysis, and risk assessment",
      color: "bg-emerald-50 border-emerald-200 text-emerald-800",
      dotColor: "bg-emerald-500",
    },
    {
      skill: "Project Management & Delivery",
      level: "Advanced",
      experience: "4+ Years",
      description: "SDLC, release management, delivery excellence, WBS development, and cross-functional team leadership",
      color: "bg-blue-50 border-blue-200 text-blue-800",
      dotColor: "bg-blue-500",
    },
    {
      skill: "API Analysis & Integration",
      level: "Expert",
      experience: "4+ Years",
      description: "REST APIs, Postman, API testing, troubleshooting, and enterprise system integrations",
      color: "bg-purple-50 border-purple-200 text-purple-800",
      dotColor: "bg-purple-500",
    },
    {
      skill: "Agile/Scrum Facilitation",
      level: "Advanced",
      experience: "4+ Years",
      description: "Scrum ceremonies, sprint planning, backlog grooming, impediments management, and stakeholder engagement",
      color: "bg-orange-50 border-orange-200 text-orange-800",
      dotColor: "bg-orange-500",
    },
    {
      skill: "Data Analysis & Power BI",
      level: "Proficient",
      experience: "3+ Years",
      description: "SQL, advanced Excel, Power BI dashboard development, data visualization, and reporting",
      color: "bg-teal-50 border-teal-200 text-teal-800",
      dotColor: "bg-teal-500",
    },
    {
      skill: "Testing & Incident Management",
      level: "Advanced",
      experience: "3+ Years",
      description: "Manual testing, UAT, integration testing, incident management, and root cause analysis (RCA)",
      color: "bg-indigo-50 border-indigo-200 text-indigo-800",
      dotColor: "bg-indigo-500",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit for modern business analysis and technical solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${category.color} mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCompetencies.map((competency, index) => (
              <Card
                key={index}
                className={`border-2 ${competency.color.split(" ")[1]} ${competency.color.split(" ")[2]} hover:shadow-lg transition-all duration-300`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${competency.dotColor}`}></div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${competency.color}`}>
                        {competency.level}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">{competency.experience}</span>
                  </div>

                  <h4 className="font-bold text-slate-800 mb-2 text-sm leading-tight">{competency.skill}</h4>

                  <p className="text-xs text-slate-600 leading-relaxed">{competency.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-6 bg-slate-50 rounded-full px-8 py-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-sm font-medium text-slate-700">Expert (5+ projects)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm font-medium text-slate-700">Advanced (3+ projects)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <span className="text-sm font-medium text-slate-700">Proficient (2+ projects)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
