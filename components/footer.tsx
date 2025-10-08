import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Image from "next/image";
export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <Image 
                      src="/pic/l.jpeg" 
                      alt="logo" 
                      width={40}
                    height={30}
                      className="rounded-md object-cover"
                    />
              <span className="font-bold text-lg">Sizwan Pharma</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Trusted pharmaceutical company providing quality medicines at affordable prices across India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Home
              </Link>
              <Link
                href="/products"
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Products
              </Link>
              <Link
                href="/about"
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+91 99967 95899</span>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">info@sizwanpharma.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                GANPATI VIHAR CHHACHHROULI ROAD
Bilaspur District yamuna nagar haryana pin code 
135102.
                </span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground text-sm">Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
              <div className="text-muted-foreground text-sm ml-6">Sat: 9:00 AM - 2:00 PM</div>
              <div className="text-muted-foreground text-sm ml-6">Sun: Closed</div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Sizwan Pharma. All rights reserved. | Licensed Pharmaceutical Distributor
          </p>
        </div>
      </div>
    </footer>
  )
}
