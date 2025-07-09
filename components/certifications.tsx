"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink, Download } from "lucide-react"

export function Certifications() {
  const certifications = [
    {
      title: "Professional Scrum Master™ I (PSM I)",
      issuer: "Scrum.org",
      date: "January 22, 2025",
      description:
        "Globally recognized certification demonstrating fundamental level of Scrum mastery, including concepts of applying Scrum and proven understanding of Scrum as described in the Scrum Guide.",
      credlyLink: "https://www.credly.com/badges/3f3760a5-d10a-409b-bb8b-781e18ab61cf/linked_in_profile",
      certificateUrl: "https://scrum.org/certificates/1182218",
      certificateId: "1182218",
      status: "Verified",
      skills: ["Scrum Framework", "Agile Methodology", "Team Leadership", "Sprint Planning", "Scrum Events"],
      type: "psm",
    },
    {
      title: "Complete Guide to Power BI for Data Analysts",
      issuer: "Microsoft Press",
      date: "May 18, 2025",
      description:
        "Comprehensive course covering advanced Power BI techniques for data analysis, dashboard creation, and business intelligence solutions. Completed 7 hours 14 minutes of intensive training.",
      certificateId: "19c1265cd6d81f57e3e0e08e30fb697fbe3c5cf7a4f5bf396f06d506df29f04c",
      status: "Completed",
      skills: [
        "Data Analysis",
        "Microsoft Power BI",
        "Business Intelligence",
        "Dashboard Development",
        "Data Visualization",
      ],
      type: "powerbi",
    },
  ]

  const handleDownloadPSM = () => {
    import("jspdf").then(({ jsPDF }) => {
      const doc = new jsPDF()

      // Header
      doc.setFontSize(18)
      doc.setFont("helvetica", "bold")
      doc.text("Professional Scrum Master™ I (PSM I) Certificate", 20, 30)

      // Certificate details
      doc.setFontSize(14)
      doc.setFont("helvetica", "normal")
      doc.text("Name: Dharmendra Kumar Saini", 20, 50)
      doc.text("Date Issued: January 22, 2025", 20, 65)
      doc.text("Issued by: Scrum.org", 20, 80)
      doc.text("Certificate ID: 1182218", 20, 95)
      doc.text("Certificate URL: https://scrum.org/certificates/1182218", 20, 110)

      // Description
      doc.setFontSize(12)
      doc.setFont("helvetica", "bold")
      doc.text("Certification Details:", 20, 130)

      doc.setFontSize(11)
      doc.setFont("helvetica", "normal")
      const description =
        "This certifies that Dharmendra Kumar Saini has successfully completed the Professional Scrum Master™ I (PSM I) assessment and has demonstrated a fundamental level of Scrum mastery."
      const splitDesc = doc.splitTextToSize(description, 170)
      doc.text(splitDesc, 20, 140)

      // Skills validated
      doc.setFontSize(12)
      doc.setFont("helvetica", "bold")
      doc.text("Skills Validated:", 20, 170)

      doc.setFontSize(11)
      doc.setFont("helvetica", "normal")
      doc.text("• Understanding of Scrum as described in the Scrum Guide", 20, 180)
      doc.text("• Consistent use of Scrum terminology and approach", 20, 190)
      doc.text("• Ability to apply Scrum in real-world scenarios", 20, 200)
      doc.text("• Fundamental Scrum mastery skills", 20, 210)

      doc.text("Verification: https://scrum.org/certificates/1182218", 20, 230)

      doc.save("PSM-I-Certificate-Dharmendra-Kumar-Saini.pdf")
    })
  }

  const handleDownloadPowerBI = () => {
    import("jspdf").then(({ jsPDF }) => {
      const doc = new jsPDF()

      // Header
      doc.setFontSize(18)
      doc.setFont("helvetica", "bold")
      doc.text("Complete Guide to Power BI for Data Analysts", 20, 30)
      doc.text("by Microsoft Press", 20, 45)

      // Certificate details
      doc.setFontSize(14)
      doc.setFont("helvetica", "normal")
      doc.text("Course completed by: Dharmendra Saini", 20, 65)
      doc.text("Completion Date: May 18, 2025 at 09:19PM UTC", 20, 80)
      doc.text("Course Duration: 7 hours 14 minutes", 20, 95)
      doc.text("Certificate ID: 19c1265cd6d81f57e3e0e08e30fb697fbe3c5cf7a4f5bf396f06d506df29f04c", 20, 110)

      // Course content
      doc.setFontSize(12)
      doc.setFont("helvetica", "bold")
      doc.text("Course Content Covered:", 20, 130)

      doc.setFontSize(11)
      doc.setFont("helvetica", "normal")
      doc.text("• Advanced Power BI techniques for data analysis", 20, 140)
      doc.text("• Dashboard creation and design principles", 20, 150)
      doc.text("• Business intelligence solutions development", 20, 160)
      doc.text("• Data visualization best practices", 20, 170)
      doc.text("• Power BI service and desktop applications", 20, 180)
      doc.text("• Data modeling and transformation", 20, 190)
      doc.text("• DAX formulas and calculations", 20, 200)
      doc.text("• Report sharing and collaboration", 20, 210)

      // Footer
      doc.setFontSize(10)
      doc.text("Issued by: Microsoft Press - Head of Global Content, Learning", 20, 240)
      doc.text("This certification demonstrates proficiency in Microsoft Power BI for data analysis", 20, 250)
      doc.text("and business intelligence applications.", 20, 260)

      doc.save("PowerBI-Certificate-Dharmendra-Kumar-Saini.pdf")
    })
  }

  const handleDownload = (type: string) => {
    if (type === "psm") {
      // Download the PSM I certificate image
      const link = document.createElement("a");
      link.href = "/resume/psm-certificate.jpg";
      link.download = "PSM-I-Certificate-Dharmendra-Kumar-Saini.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (type === "powerbi") {
      // Download the Power BI certificate image
      const link = document.createElement("a");
      link.href = "/resume/power-bi-certificate.jpg";
      link.download = "PowerBI-Certificate-Dharmendra-Kumar-Saini.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  return (
    <section id="certifications" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Certifications</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional certifications validating expertise and commitment to continuous learning
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4">
          <div className="grid gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 w-full">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4 md:gap-0">
                    <div className="flex items-start space-x-2 sm:space-x-4 mb-4 md:mb-0 w-full md:w-auto">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base sm:text-lg md:text-2xl font-bold text-slate-800 mb-1 break-words">{cert.title}</h3>
                        <p className="text-slate-600 mb-2 text-xs sm:text-sm md:text-base">
                          <span className="font-semibold">Issued by:</span> {cert.issuer} • {cert.date}
                        </p>
                        <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs sm:text-sm px-2 py-1">
                          {cert.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 sm:flex-row sm:gap-3 w-full md:w-auto">
                      {/* Only show View Certificate for non-PSM certifications */}
                      {cert.certificateUrl && cert.type !== "psm" && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(cert.certificateUrl, "_blank")}
                          className="flex items-center w-full sm:w-auto justify-center"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Certificate
                        </Button>
                      )}
                      <Button
                        size="sm"
                        onClick={() => handleDownload(cert.type)}
                        className="bg-teal-600 hover:bg-teal-700 flex items-center w-full sm:w-auto justify-center"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed text-xs sm:text-sm md:text-base break-words">{cert.description}</p>
                  <div className="mb-4">
                    <p className="text-xs sm:text-sm text-slate-500 break-words overflow-x-auto">
                      <span className="font-semibold">Certificate ID:</span> {cert.certificateId}
                      {cert.certificateUrl && (
                        <>
                          {" • "}
                          <a
                            href={cert.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-600 hover:text-teal-700"
                          >
                            Verify Online
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3 text-xs sm:text-sm md:text-base">Validated Skills:</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {cert.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="bg-teal-50 text-teal-700 border-teal-200 text-xs sm:text-sm px-2 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-sm">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600" />
              <span className="text-slate-700 font-medium text-xs sm:text-base">Committed to continuous professional development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
