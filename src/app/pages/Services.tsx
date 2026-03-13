import { motion } from "motion/react";
import { 
  Globe, 
  Package, 
  Search, 
  Truck, 
  BarChart3, 
  ShoppingCart,
  Ship,
  FileCheck,
  Clock,
  Shield
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Services() {
  const mainServices = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "General Trading",
      description: "Comprehensive trading solutions across multiple industries including consumer goods, industrial supplies, construction materials, and agricultural commodities. We handle all aspects of the trading process from sourcing to delivery.",
      features: [
        "Multi-industry expertise",
        "Quality product sourcing",
        "Competitive pricing",
        "Flexible terms and conditions"
      ]
    },
    {
      icon: <Ship className="w-10 h-10" />,
      title: "Import & Export Solutions",
      description: "Seamless international shipping and customs clearance services connecting businesses worldwide. Our experienced team navigates complex regulations to ensure smooth cross-border transactions.",
      features: [
        "Customs documentation",
        "Regulatory compliance",
        "Freight forwarding",
        "Door-to-door delivery"
      ]
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "Global Sourcing & Procurement",
      description: "Access to an extensive network of vetted suppliers and manufacturers worldwide. We identify and connect you with the right partners for your specific needs at competitive prices.",
      features: [
        "Supplier identification",
        "Product verification",
        "Negotiation support",
        "Quality assurance"
      ]
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: "Supply Chain & Logistics Coordination",
      description: "End-to-end supply chain management ensuring efficient movement of goods from source to destination. We optimize logistics to reduce costs and delivery times.",
      features: [
        "Inventory management",
        "Warehousing solutions",
        "Route optimization",
        "Real-time tracking"
      ]
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: "Wholesale Distribution",
      description: "Large-scale distribution services for businesses looking to expand their market reach. We handle bulk orders with efficiency and reliability.",
      features: [
        "Bulk order handling",
        "Market expansion support",
        "Flexible distribution networks",
        "Competitive volume pricing"
      ]
    },
    {
      icon: <FileCheck className="w-10 h-10" />,
      title: "Custom Sourcing",
      description: "Tailored sourcing solutions based on your specific requirements. Whether you need specialized products or unique specifications, we find the right suppliers for you.",
      features: [
        "Requirement analysis",
        "Custom product sourcing",
        "Specification matching",
        "Dedicated account management"
      ]
    }
  ];

  const serviceFeatures = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Turnaround",
      description: "Efficient processes ensure quick delivery times"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Guaranteed",
      description: "Rigorous quality control and inspection standards"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Transparent Pricing",
      description: "Clear cost structures with no hidden fees"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Secure Packaging",
      description: "Professional packaging for safe transportation"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3MlMjBzdXBwbHklMjBjaGFpbiUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzczNDEyNTYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Our Services"
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
              Our Services
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive trading solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-[#0A1F44]">
              End-to-End Trading Solutions
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Hennu Trade Company, we offer a complete suite of international trading services designed to simplify global commerce. From sourcing and procurement to logistics and distribution, our experienced team handles every aspect of your trading operations with professionalism and efficiency.
            </p>
          </motion.div>

          {/* Main Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-lg flex items-center justify-center text-[#0A1F44] mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl mb-4 text-[#0A1F44]">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
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
              Why Choose Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver excellence through our commitment to quality and customer satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center text-[#0A1F44] mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-2 text-[#0A1F44]">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A streamlined approach to international trading
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Understanding your requirements and business goals"
              },
              {
                step: "02",
                title: "Sourcing",
                description: "Identifying the best suppliers and products for your needs"
              },
              {
                step: "03",
                title: "Negotiation",
                description: "Securing competitive prices and favorable terms"
              },
              {
                step: "04",
                title: "Delivery",
                description: "Coordinating logistics and ensuring timely delivery"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-[#D4AF37] opacity-20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-[#D4AF37]"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#0A1F44] to-[#0F2A54] rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              Ready to Start Trading?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your trading needs and discover how we can help grow your business globally.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A1F44] px-10 py-4 rounded-lg font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
