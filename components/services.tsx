import { Card, CardContent } from "@/components/ui/card"
import { FileText, Zap, BarChart3, Users } from "lucide-react"

export function Services() {
  const services = [
    {
      title: "Business Documentation & Analysis",
      description: "BRD/FRD creation, process mapping, and workflow optimization for seamless business operations.",
      icon: <FileText className="h-8 w-8" />,
      color: "bg-teal-100 text-teal-600",
    },
    {
      title: "API Integration Consulting",
      description: "Expert API architecture design, system connectivity, and data flow optimization solutions.",
      icon: <Zap className="h-8 w-8" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Data Analysis & Visualization",
      description: "SQL optimization, Power BI dashboards, and comprehensive reporting for actionable insights.",
      icon: <BarChart3 className="h-8 w-8" />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Agile Project Support",
      description: "Sprint planning, stakeholder management, and team coordination using Agile methodologies.",
      icon: <Users className="h-8 w-8" />,
      color: "bg-green-100 text-green-600",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Services I Offer</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive business analysis and technical consulting services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center ${service.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
