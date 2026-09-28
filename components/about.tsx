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
                  Strategic & delivery-focused Business Analyst and Project Manager with 4+ years of experience in the
                  IT/software domain. Currently leading a government digital transformation program for SITA, South Africa.
                  Well-rounded across both product-based and service-based environments with hands-on strength in
                  As-Is/To-Be analysis, BRD/FRD, user stories, prototyping, and end-to-end project governance.
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
                  <li>• Business Analysis & As-Is/To-Be Analysis</li>
                  <li>• Requirement Gathering & Elicitation</li>
                  <li>• API Analysis & Integration (REST APIs)</li>
                  <li>• Project Management & Delivery Excellence</li>
                  <li>• SDLC & Release Management</li>
                  <li>• BRD & FRD Documentation</li>
                  <li>• Change Management & Process Improvement</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="p-6">
                <h4 className="font-semibold text-slate-800 mb-2">Current Focus</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Government Digital Transformation (SITA Project)</li>
                  <li>• Enterprise Billing Application Delivery</li>
                  <li>• Cross-functional Team Leadership (16-18 members)</li>
                  <li>• Onsite Requirement Engineering (Johannesburg)</li>
                  <li>• Agile Facilitation & Scrum Ceremonies</li>
                  <li>• Client & Stakeholder Engagement</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
