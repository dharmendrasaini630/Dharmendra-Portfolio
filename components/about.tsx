"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, GraduationCap, Heart, User, Eye } from "lucide-react"

export function About() {
  const handleViewResume = () => {
    window.open("/resume/Resume_Dharmendra_Kumar_Saini_Business_Analyst.pdf", "_blank")
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Passionate about bridging the gap between business needs and technology solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Professional Journey</h3>
                <p className="text-slate-600 leading-relaxed">
                  As a Business Analyst with over 3 years of experience, I specialize in API integrations, business
                  process optimization, and data analysis. My expertise lies in transforming complex business
                  requirements into smart technical solutions, particularly in hiring and payroll systems.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Education</h3>
                <p className="text-slate-600 leading-relaxed">
                  <strong>B.Tech</strong> - Modern Institute of Technology and Research Center (2019)
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Personal Interests</h3>
                <p className="text-slate-600 leading-relaxed">
                  I'm passionate about gadgets, cars, and continuous tech upskilling. Currently exploring advanced tools
                  like SQL, Power BI, UX design, and AI applications in business contexts.
                </p>
              </div>
            </div>

            <div className="pt-6 flex gap-4">
              <Button onClick={handleViewResume} className="bg-teal-600 hover:bg-teal-700">
                <Eye className="mr-2 h-6 w-6 text-white group-hover:text-teal-200 transition-colors duration-200" />
                View Resume
              </Button>
              <a href="/resume/Resume_Dharmendra_Kumar_Saini_Business_Analyst.pdf" download className="inline-block">
                <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF
                </Button>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-l-4 border-l-teal-600">
              <CardContent className="p-6">
                <h4 className="font-semibold text-slate-800 mb-2">Core Expertise</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• API Integration & System Connectivity</li>
                  <li>• Business Process Analysis & Optimization</li>
                  <li>• Data Analysis & Visualization</li>
                  <li>• Requirements Documentation (BRD/FRD)</li>
                  <li>• Agile Project Management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="p-6">
                <h4 className="font-semibold text-slate-800 mb-2">Current Focus</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Advanced SQL & Database Optimization</li>
                  <li>• Power BI Dashboard Development</li>
                  <li>• UX Design Principles</li>
                  <li>• AI Integration in Business Processes</li>
                  <li>• Modern API Architecture</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
