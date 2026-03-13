import { Link } from "react-router";
import { motion } from "motion/react";
import { 
  Globe, 
  DollarSign, 
  Users, 
  Truck, 
  CheckCircle, 
  Award,
  TrendingUp,
  Shield
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "General Trading",
      description: "Comprehensive trading solutions across multiple industries worldwide",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Import & Export",
      description: "Seamless international shipping and customs clearance services",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Global Sourcing",
      description: "Access to a vast network of reliable suppliers and manufacturers",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Supply Chain Management",
      description: "Efficient logistics coordination and inventory optimization",
    },
  ];

  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Reliable Global Sourcing",
      description: "Access to vetted suppliers across continents",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Pricing",
      description: "Best market rates with transparent cost structures",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Strong Supplier Network",
      description: "Established relationships with leading manufacturers",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Efficient Logistics",
      description: "Streamlined shipping and delivery processes",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Rigorous quality control and inspection standards",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expert Team",
      description: "Experienced professionals dedicated to your success",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760566050127-d8c22131df32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjB0cmFkZSUyMGNhcmdvJTIwY29udGFpbmVycyUyMGludGVybmF0aW9uYWwlMjBzaGlwcGluZ3xlbnwxfHx8fDE3NzM0MTI1NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Global Trading"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/95 via-[#0A1F44]/80 to-[#0A1F44]/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
                Global Trading Solutions You Can Trust
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Your reliable partner in international trade, connecting businesses worldwide with quality products and seamless logistics.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A1F44] px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Contact Us for Business Opportunities
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2UlMjBidXNpbmVzcyUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc3MzM0NDYyMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business Partnership"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl mb-6 text-[#0A1F44]">
                Welcome to Hennu Trade Company
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Based in Dubai, United Arab Emirates, Hennu Trade Company is your trusted partner in international trading and global sourcing. We specialize in connecting businesses with quality products and reliable suppliers across multiple industries.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With our extensive network of international partners and deep understanding of global markets, we facilitate seamless trade operations between the Middle East, Africa, Asia, and Europe. Our commitment to excellence, integrity, and efficiency makes us the preferred choice for businesses seeking reliable trading solutions.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-[#D4AF37] hover:text-[#0A1F44] font-semibold transition-colors"
              >
                Learn More About Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Services */}
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
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive trading solutions tailored to meet your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-lg flex items-center justify-center text-[#0A1F44] mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl mb-3 text-[#0A1F44]">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-block bg-[#0A1F44] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0F2A54] transition-colors"
            >
              Explore All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-[#0A1F44] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Why Choose Hennu Trade Company
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We deliver excellence through our commitment to quality, reliability, and customer satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-lg flex items-center justify-center text-[#0A1F44]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Global Partners" },
              { number: "50+", label: "Countries Served" },
              { number: "1000+", label: "Successful Shipments" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl text-[#D4AF37] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#0A1F44] to-[#0F2A54]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-white">
              Ready to Expand Your Business Globally?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Partner with Hennu Trade Company for reliable international trading solutions that drive your business forward.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A1F44] px-10 py-4 rounded-lg font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
