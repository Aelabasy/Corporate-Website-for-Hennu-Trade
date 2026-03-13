import { Link } from "react-router";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1F44] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-lg flex items-center justify-center">
                <span className="text-[#0A1F44] font-bold text-xl">HT</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Hennu Trade</span>
                <span className="text-[#D4AF37] text-xs leading-tight">Company</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Your trusted partner in international trading, connecting businesses worldwide with reliable sourcing and logistics solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#D4AF37] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/global-markets" className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm">
                  Global Markets
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#D4AF37] font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>General Trading</li>
              <li>Import & Export</li>
              <li>Global Sourcing</li>
              <li>Supply Chain Management</li>
              <li>Wholesale Distribution</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#D4AF37] font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin size={16} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail size={16} className="text-[#D4AF37] flex-shrink-0" />
                <a
                  href="mailto:hennuco@gmail.com"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  hennuco@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone size={16} className="text-[#D4AF37] flex-shrink-0" />
                <a
                  href="tel:+201021565623"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  +201021565623
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex items-center space-x-3 mt-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#0F2A54] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0A1F44] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#0F2A54] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0A1F44] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#0F2A54] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0A1F44] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#0F2A54] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0A1F44] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Hennu Trade Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
