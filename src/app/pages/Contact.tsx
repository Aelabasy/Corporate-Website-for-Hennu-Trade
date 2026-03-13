import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log("Form submitted:", formData);
    setFormStatus("success");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: ""
    });
    
    setTimeout(() => {
      setFormStatus("idle");
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["Dubai, United Arab Emirates"],
      link: null
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["hennuco@gmail.com"],
      link: "mailto:hennuco@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+201021565623"],
      link: "tel:+201021565623"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Sunday - Thursday: 9:00 AM - 6:00 PM", "Friday - Saturday: Closed"],
      link: null
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1726533765275-a69cfd7f9897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMGNpdHlzY2FwZSUyMHNreWxpbmUlMjBtb2Rlcm4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NzM0MTI1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A1F44]/85"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Get in touch with our team to discuss your trading needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center text-[#0A1F44] mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg mb-3 text-[#0A1F44]">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <div key={idx}>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-[#D4AF37] transition-colors text-sm block"
                      >
                        {detail}
                      </a>
                    ) : (
                      <p className="text-gray-600 text-sm">{detail}</p>
                    )}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl mb-6 text-[#0A1F44]">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm mb-2 text-gray-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm mb-2 text-gray-700">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="sourcing">Product Sourcing</option>
                    <option value="import">Import/Export Services</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="quote">Request a Quote</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                {formStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A1F44] px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl mb-6 text-[#0A1F44]">
                Why Partner With Us?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Hennu Trade Company is committed to providing exceptional service and building long-term partnerships. When you reach out to us, you can expect:
              </p>

              <div className="space-y-6 mb-8">
                {[
                  {
                    title: "Quick Response Time",
                    description: "Our team responds to all inquiries within 24 hours"
                  },
                  {
                    title: "Personalized Solutions",
                    description: "Tailored trading solutions designed for your specific needs"
                  },
                  {
                    title: "Expert Consultation",
                    description: "Free consultation with our experienced trade specialists"
                  },
                  {
                    title: "Transparent Communication",
                    description: "Clear and honest communication throughout the process"
                  },
                  {
                    title: "Competitive Pricing",
                    description: "Best market rates with no hidden fees"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#0A1F44]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg mb-1 text-[#0A1F44]">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[#0A1F44] to-[#0F2A54] p-8 rounded-2xl text-white">
                <Globe className="w-12 h-12 text-[#D4AF37] mb-4" />
                <h3 className="text-2xl mb-3">Global Trading Partner</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  With operations spanning across four continents and partnerships in over 50 countries, we're ready to help you expand your business globally.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-[#0F2A54] p-4 rounded-lg">
                    <div className="text-2xl text-[#D4AF37] mb-1">50+</div>
                    <div className="text-gray-300 text-sm">Countries</div>
                  </div>
                  <div className="bg-[#0F2A54] p-4 rounded-lg">
                    <div className="text-2xl text-[#D4AF37] mb-1">500+</div>
                    <div className="text-gray-300 text-sm">Partners</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0A1F44]">
              Visit Our Office
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Dubai's business district
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.68282703604!2d54.89782823469286!3d25.076280141851903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1647890123456!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Dubai Location"
              ></iframe>
            </div>
            <div className="p-6 bg-gradient-to-r from-[#0A1F44] to-[#0F2A54] text-white">
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
                <span>Dubai, United Arab Emirates</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
