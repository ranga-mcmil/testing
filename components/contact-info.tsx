import { CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactInfo() {
  return (
    <>
      <CardContent className="grid gap-6">
        <div className="flex items-center space-x-4">
          <Phone className="h-6 w-6" style={{ color: '#169d52' }} />
          <div>
        <p className="text-sm font-medium" style={{ color: '#1a3652' }}>Phone</p>
        <p className="text-sm text-muted-foreground">+263 71 838 9657</p>
        <p className="text-sm text-muted-foreground">+263 77 809 5000</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Mail className="h-6 w-6" style={{ color: '#169d52' }} />
          <div>
        <p className="text-sm font-medium" style={{ color: '#1a3652' }}>Email</p>

        <a href="mailto:info@fiscit.co.zw" className="text-sm text-muted-foreground hover:underline">
          info@fiscit.co.zw
        </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <MapPin className="h-6 w-6" style={{ color: '#169d52' }} />
          <div>
        <p className="text-sm font-medium" style={{ color: '#1a3652' }}>Address</p>

        <p className="text-sm text-muted-foreground">27 Langley Avenue , Avondale West , Harare</p>
          </div>
        </div>
      </CardContent>
    </>
  )
}

