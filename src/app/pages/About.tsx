import { motion } from "motion/react";
import { Target, Eye, Heart, Users, Globe, Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Integrity",
      description: "We conduct business with the highest ethical standards and transparency in all our dealings.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Reliability",
      description: "Our clients trust us to deliver on our promises consistently and maintain long-term partnerships.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Efficiency",
      description: "We optimize processes to ensure swift and cost-effective solutions for our clients.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Partnerships",
      description: "Building strong relationships worldwide to create value for all stakeholders.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759310610775-b298f34f73aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwYnVzaW5lc3MlMjBtZWV0aW5nJTIwY29ycG9yYXRlJTIwb2ZmaWNlfGVufDF8fHx8MTc3MzQxMjU2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About Hennu Trade"
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
              About Hennu Trade Company
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Building bridges in international trade since our inception in Dubai
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl mb-6 text-[#0A1F44]">
                Who We Are
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Hennu Trade Company is a dynamic and forward-thinking trading enterprise based in the heart of Dubai, United Arab Emirates. We specialize in facilitating international trade across diverse industries, connecting businesses with quality products and reliable suppliers worldwide.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our strategic location in Dubai positions us at the crossroads of global commerce, enabling us to serve clients across the Middle East, Africa, Asia, and Europe with unparalleled efficiency. We pride ourselves on our deep understanding of international markets, regulatory requirements, and cultural nuances that influence successful trade operations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through our extensive network of trusted partners and suppliers, we deliver comprehensive trading solutions that encompass sourcing, procurement, logistics coordination, and wholesale distribution. Our commitment to excellence and customer satisfaction drives everything we do.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1726533765275-a69cfd7f9897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMGNpdHlzY2FwZSUyMHNreWxpbmUlMjBtb2Rlcm4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NzM0MTI1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dubai Business Hub"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center text-[#0A1F44] mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl mb-4 text-[#0A1F44]">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To deliver reliable, efficient, and cost-effective trading solutions that connect businesses worldwide with quality products and trusted suppliers. We are committed to facilitating seamless international trade through integrity, expertise, and exceptional customer service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center text-[#0A1F44] mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-3xl mb-4 text-[#0A1F44]">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To become a globally recognized and trusted partner in international trading, known for our unwavering commitment to excellence, innovation, and sustainable business practices. We aspire to be the bridge that connects businesses across continents, fostering growth and prosperity through strategic partnerships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0A1F44]">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our business and shape our relationships with clients and partners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#0A1F44] to-[#0F2A54] p-8 rounded-xl text-white hover:shadow-2xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-lg flex items-center justify-center text-[#0A1F44] mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Dubai */}
      <section className="py-16 md:py-20 bg-[#0A1F44] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">
                Why Dubai?
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Dubai's strategic location at the crossroads of Europe, Asia, and Africa makes it the ideal hub for international trade. As one of the world's fastest-growing business centers, Dubai offers:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#0A1F44]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">World-class infrastructure and logistics facilities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#0A1F44]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Free trade zones with attractive business incentives</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#0A1F44]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Access to emerging markets across three continents</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#0A1F44]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Business-friendly regulations and zero corporate tax</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#0A1F44]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Multicultural business environment fostering global connections</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1742415105376-43d3a5fd03fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMGdsb2JlJTIwYnVzaW5lc3MlMjBpbnRlcm5hdGlvbmFsfGVufDF8fHx8MTc3MzQxMjU2OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Global Business Network"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
