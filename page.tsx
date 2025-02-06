import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Page() {
  return (
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
      <main className="container mx-auto px-6 mt-20 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          {/* Logo and Heading */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-purple-400">{"{"}</span>
              <span className="text-2xl text-white">NixtNode</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
              Is a Premier Web3
              <br />
              Infrastructure
              <br />
              Provider
            </h1>
            <div className="max-w-md">
              <p className="text-gray-300 mb-8">
                Renowned for powering the backbone of blockchain ecosystems with our state-of-the-art validation
                services, RPC endpoints & IBC relayers
              </p>
              <Link href="/contact">
                <Button className="bg-black text-white hover:bg-black/80 rounded-full px-8 py-6">GET IN TOUCH</Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 max-w-2xl">
            <div className="bg-black/40 rounded-3xl p-8">
              <span className="text-6xl md:text-7xl font-mono text-purple-400">192k</span>
            </div>
            <div className="bg-black/40 rounded-3xl p-8">
              <span className="text-6xl md:text-7xl font-mono text-purple-400">34</span>
              <p className="text-gray-300 mt-2">Unique delegators</p>
            </div>
          </div>
        </div>
      </main>

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
  )
}

