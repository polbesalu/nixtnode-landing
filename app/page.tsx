import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LandingPage() {
  return (
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
            Renowned for powering the backbone of blockchain ecosystems with our state-of-the-art validation services,
            RPC endpoints & IBC relayers
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
  )
}

