import { motion } from "motion/react";
import { Globe, MapPin, Users, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function GlobalMarkets() {
  const regions = [
    {
      name: "Middle East",
      description: "Strategic partnerships across the Gulf Cooperation Council (GCC) countries and broader Middle East region, leveraging Dubai's position as a global trade hub.",
      countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain", "Jordan", "Lebanon"],
      icon: "🏜️"
    },
    {
      name: "Africa",
      description: "Growing presence in African markets with focus on North, East, and West African trade corridors, supporting regional development and growth.",
      countries: ["Egypt", "South Africa", "Kenya", "Nigeria", "Morocco", "Ghana", "Tanzania", "Ethiopia"],
      icon: "🌍"
    },
    {
      name: "Asia",
      description: "Extensive network across Asian manufacturing hubs and emerging markets, facilitating trade between East and West.",
      countries: ["China", "India", "Singapore", "Malaysia", "Thailand", "Vietnam", "Indonesia", "Pakistan"],
      icon: "🏯"
    },
    {
      name: "Europe",
      description: "Established connections with European markets ensuring smooth trade operations and regulatory compliance.",
      countries: ["Turkey", "Germany", "United Kingdom", "France", "Italy", "Spain", "Netherlands", "Poland"],
      icon: "🏰"
    }
  ];

  const strengths = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Network",
      description: "Partnerships with suppliers and distributors across 50+ countries"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Strategic Location",
      description: "Dubai's position enables quick access to multiple time zones and markets"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Local Expertise",
      description: "Understanding of regional regulations, culture, and business practices"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Intelligence",
      description: "Real-time insights into market trends and opportunities"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1742415105376-43d3a5fd03fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMGdsb2JlJTIwYnVzaW5lc3MlMjBpbnRlcm5hdGlvbmFsfGVufDF8fHx8MTc3MzQxMjU2OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Global Markets"
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
              Global Markets
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Connecting businesses across continents with our extensive international network
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
              Our Global Reach
            </h2>
            <p className="text-gray-600 leading-relaxed">
              From our strategic base in Dubai, Hennu Trade Company operates across four major continents, serving clients in over 50 countries. Our international presence enables us to facilitate seamless trade operations, navigate diverse regulatory environments, and provide localized solutions for global challenges.
            </p>
          </motion.div>

          {/* Global Strengths */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center text-[#0A1F44] mx-auto mb-4">
                  {strength.icon}
                </div>
                <h3 className="text-xl mb-2 text-[#0A1F44]">{strength.title}</h3>
                <p className="text-gray-600 text-sm">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Markets */}
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
              Markets We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive coverage across key global regions
            </p>
          </motion.div>

          <div className="space-y-8">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="bg-gradient-to-br from-[#0A1F44] to-[#0F2A54] p-8 lg:p-10 text-white">
                    <div className="text-6xl mb-4">{region.icon}</div>
                    <h3 className="text-3xl mb-4">{region.name}</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {region.description}
                    </p>
                  </div>
                  <div className="lg:col-span-2 p-8 lg:p-10">
                    <h4 className="text-xl mb-6 text-[#0A1F44]">Key Markets:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {region.countries.map((country, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 bg-gray-50 px-4 py-3 rounded-lg"
                        >
                          <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{country}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Network */}
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
                src="https://images.unsplash.com/photo-1760566050127-d8c22131df32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjB0cmFkZSUyMGNhcmdvJTIwY29udGFpbmVycyUyMGludGVybmF0aW9uYWwlMjBzaGlwcGluZ3xlbnwxfHx8fDE3NzM0MTI1NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="International Trade Network"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl mb-6 text-[#0A1F44]">
                International Supplier & Partner Network
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our success is built on strong relationships with a diverse network of suppliers, manufacturers, and logistics partners worldwide. These partnerships enable us to offer:
              </p>
              <ul className="space-y-4">
                {[
                  "Access to quality products at competitive prices",
                  "Reliable and consistent supply chains",
                  "Flexible procurement options tailored to your needs",
                  "Fast turnaround times and efficient delivery",
                  "Comprehensive support throughout the trading process",
                  "Local expertise in each market we serve"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trade Corridors */}
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
              Key Trade Corridors
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Facilitating seamless trade across major international routes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Asia - Middle East",
                description: "Strong connections between Asian manufacturing hubs and Middle Eastern markets",
                volume: "40% of trade"
              },
              {
                title: "Africa - Asia",
                description: "Growing trade corridor supporting African development and Asian expansion",
                volume: "25% of trade"
              },
              {
                title: "Europe - Middle East",
                description: "Established routes connecting European suppliers with Gulf markets",
                volume: "20% of trade"
              },
              {
                title: "Middle East - Africa",
                description: "Regional trade supporting economic integration and growth",
                volume: "10% of trade"
              },
              {
                title: "Asia - Europe",
                description: "East-West trade facilitating global supply chains",
                volume: "3% of trade"
              },
              {
                title: "Emerging Markets",
                description: "New opportunities in developing regions worldwide",
                volume: "2% of trade"
              }
            ].map((corridor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0F2A54] p-6 rounded-xl"
              >
                <h3 className="text-xl mb-3 text-[#D4AF37]">{corridor.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {corridor.description}
                </p>
                <div className="text-[#D4AF37] font-semibold">{corridor.volume}</div>
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
              Ready to Expand to New Markets?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let us help you navigate international markets and connect with the right partners for your business growth.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A1F44] px-10 py-4 rounded-lg font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Start Your Global Journey
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
