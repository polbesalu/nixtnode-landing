import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NixtNode",
  description: "Premier Web3 Infrastructure Provider",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-[#1A1A1A] overflow-hidden relative">
          {/* Navigation */}
          <nav className="container mx-auto px-6 py-4 flex items-center justify-between relative z-10">
            <Link href="/" className="flex items-center text-white">
              <span className="text-xl">
                Nixt<span className="text-purple-400">Node</span>
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-white hover:text-purple-200 text-sm">
                SERVICES <sup className="text-[10px]">7</sup>
              </Link>
              <Link href="/" className="text-white hover:text-purple-200 text-sm">
                TEAM <sup className="text-[10px]">9</sup>
              </Link>
              <Link href="/" className="text-white hover:text-purple-200 text-sm">
                NETWORKS WE SUPPORT <sup className="text-[10px]">35</sup>
              </Link>
            </div>
          </nav>

          {/* Main Content */}
          <main className="container mx-auto px-6 mt-20 relative z-10">{children}</main>

          {/* Background Gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-purple-800/50 via-purple-600/30 to-transparent"
            style={{
              background: `radial-gradient(circle at 50% 50%, 
                rgba(168, 85, 247, 0.2) 0%, 
                rgba(168, 85, 247, 0.1) 30%, 
                rgba(0, 0, 0, 0) 70%)`,
            }}
          />
        </div>
      </body>
    </html>
  )
}

