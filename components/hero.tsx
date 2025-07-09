"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-teal-600 font-medium text-lg">Hi, I'm Dharmendra —</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  Turning Business Needs Into <span className="text-teal-600">Scalable Tech Solutions</span>
                </h1>
              </div>

              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Business Analyst | API & Data Enthusiast
              </p>

              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                With over 3+ years of experience in API integrations, business process optimization, and data analysis.
                I specialize in transforming complex requirements into smart technical solutions—especially in hiring
                and payroll systems.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700"
                  onClick={() => scrollToSection("#projects")}
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection("#contact")}>
                  Let's Connect
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/dharmendra-profile-professional.png"
                  alt="Dharmendra Kumar Saini - Business Analyst"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-white">
                <div className="text-white text-xs font-semibold tracking-wider">EXPERT</div>
                <div className="text-white text-lg font-bold">BA</div>
                <div className="text-teal-100 text-xs">Since '22</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
