import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="max-w-[600px] mx-auto">
      {/* Contact Card */}
      <div className="bg-black/40 rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <Input id="name" placeholder="Your Name" className="bg-black/50 border-purple-500 text-white" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="bg-black/50 border-purple-500 text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Your message here..."
              className="bg-black/50 border-purple-500 text-white"
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full bg-purple-600 text-white hover:bg-purple-700 rounded-full px-8 py-6">
            SEND MESSAGE
          </Button>
        </form>
      </div>
    </div>
  )
}

