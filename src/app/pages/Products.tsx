import { motion } from "motion/react";
import { 
  Wrench, 
  ShoppingBag, 
  HardHat, 
  Wheat,
  Package,
  CheckCircle
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Products() {
  const industries = [
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Industrial Supplies",
      description: "High-quality industrial equipment, machinery parts, tools, and manufacturing supplies for various industrial applications.",
      products: [
        "Machinery and equipment",
        "Industrial tools and hardware",
        "Safety equipment and gear",
        "Manufacturing components",
        "Electrical and mechanical parts",
        "Industrial chemicals and materials"
      ],
      image: "https://images.unsplash.com/photo-1768796372629-a4e7db99e474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JrbGlmdCUyMHdhcmVob3VzZSUyMG9wZXJhdGlvbnMlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc3MzQxMjU2NXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: <ShoppingBag className="w-10 h-10" />,
      title: "Consumer Goods",
      description: "Wide range of consumer products including electronics, household items, textiles, and personal care products.",
      products: [
        "Electronics and appliances",
        "Household and kitchenware",
        "Textiles and apparel",
        "Personal care products",
        "Toys and entertainment",
        "Office supplies and stationery"
      ],
      image: "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2UlMjBidXNpbmVzcyUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc3MzM0NDYyMnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: <HardHat className="w-10 h-10" />,
      title: "Construction Materials",
      description: "Premium construction materials and building supplies for residential, commercial, and industrial projects.",
      products: [
        "Steel and metal products",
        "Cement and concrete materials",
        "Lumber and wood products",
        "Plumbing and sanitary ware",
        "Electrical fixtures and fittings",
        "Flooring and finishing materials"
      ],
      image: "https://images.unsplash.com/photo-1763926025678-95d196d0ab28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBtYXRlcmlhbHMlMjBpbmR1c3RyaWFsJTIwc3VwcGxpZXMlMjBzdGVlbHxlbnwxfHx8fDE3NzM0MTI1NjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: <Wheat className="w-10 h-10" />,
      title: "Agricultural Commodities",
      description: "Fresh and processed agricultural products including grains, spices, and other food commodities.",
      products: [
        "Grains and cereals",
        "Rice and wheat products",
        "Spices and seasonings",
        "Edible oils and fats",
        "Dried fruits and nuts",
        "Sugar and sweeteners"
      ],
      image: "https://images.unsplash.com/photo-1661762406676-8b21999d011e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBjb21tb2RpdGllcyUyMGZhcm1pbmclMjBncmFpbiUyMGhhcnZlc3R8ZW58MXx8fHwxNzczNDEyNTY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const customSourcing = [
    "Specialized product requirements",
    "Custom specifications and standards",
    "Private label and branding solutions",
    "Bulk order customization",
    "Quality control and inspection",
    "Regulatory compliance support"
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1761426112156-21305e806344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBvY2VhbiUyMGZyZWlnaHQlMjB0cmFuc3BvcnRhdGlvbnxlbnwxfHx8fDE3NzM0MTI1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Products and Industries"
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
              Products & Industries
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Quality products across diverse industries, sourced from trusted suppliers worldwide
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
              Diverse Product Portfolio
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Hennu Trade Company offers an extensive range of products across multiple industries. Our global network enables us to source high-quality products at competitive prices, meeting the diverse needs of our international clientele. From industrial equipment to consumer goods, we ensure every product meets rigorous quality standards.
            </p>
          </motion.div>

          {/* Industries Grid */}
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-lg flex items-center justify-center text-[#0A1F44] mb-6">
                    {industry.icon}
                  </div>
                  <h3 className="text-3xl mb-4 text-[#0A1F44]">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {industry.products.map((product, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <ImageWithFallback
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="py-16 md:py-20 bg-[#0A1F44] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-lg flex items-center justify-center text-[#0A1F44] mb-6">
                <Package className="w-10 h-10" />
              </div>
              <h2 className="text-3xl md:text-4xl mb-6">
                Custom Sourcing Solutions
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Can't find what you're looking for? We offer custom sourcing services tailored to your specific requirements. Our team works closely with you to understand your needs and connects you with the right suppliers and manufacturers worldwide.
              </p>
              <ul className="space-y-3 mb-8">
                {customSourcing.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-[#0A1F44]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A1F44] px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Request Custom Sourcing
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-[#0F2A54] p-6 rounded-xl">
                  <div className="text-4xl text-[#D4AF37] mb-2">1000+</div>
                  <div className="text-gray-300">Products Sourced</div>
                </div>
                <div className="bg-[#0F2A54] p-6 rounded-xl">
                  <div className="text-4xl text-[#D4AF37] mb-2">50+</div>
                  <div className="text-gray-300">Industries Served</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-[#0F2A54] p-6 rounded-xl">
                  <div className="text-4xl text-[#D4AF37] mb-2">500+</div>
                  <div className="text-gray-300">Verified Suppliers</div>
                </div>
                <div className="bg-[#0F2A54] p-6 rounded-xl">
                  <div className="text-4xl text-[#D4AF37] mb-2">24/7</div>
                  <div className="text-gray-300">Customer Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-[#0A1F44]">
              Quality Assurance
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Every product we source undergoes rigorous quality control and inspection processes. We work only with verified suppliers and manufacturers who meet international quality standards. Our commitment to quality ensures that you receive products that meet or exceed your expectations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Supplier Verification",
                  description: "All suppliers undergo thorough vetting processes"
                },
                {
                  title: "Quality Inspection",
                  description: "Pre-shipment inspection and quality checks"
                },
                {
                  title: "Compliance Certified",
                  description: "International standards and certifications verified"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-xl mb-3 text-[#0A1F44]">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Looking for Specific Products?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let us know what you need, and we'll source it for you at the best possible price.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A1F44] px-10 py-4 rounded-lg font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
