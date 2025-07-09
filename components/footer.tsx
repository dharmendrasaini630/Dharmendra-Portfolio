import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Dharmendra Kumar Saini</h3>
            <p className="text-slate-300">Business Analyst | API & Data Enthusiast</p>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400 flex items-center justify-center">
              Made with <Heart className="h-4 w-4 mx-2 text-red-500" /> by Dharmendra Kumar Saini
            </p>
            <p className="text-slate-500 text-sm mt-2">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
