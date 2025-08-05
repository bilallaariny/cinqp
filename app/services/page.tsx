"use client"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import { useEffect, useState } from "react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import AnimatedButton from "@/components/animated-button"
import { motion } from "framer-motion" // Import motion

// Define animation variants
const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}

const fadeInFromTopVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const fadeInFromBottomVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const fadeInFromLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

const fadeInFromRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger animation for children
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ServicesPage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    // Set initial value
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const services = [
    {
      title: "Aménagement Professionnel",
      description: "Optimisez vos espaces de travail avec des solutions fonctionnelles et esthétiques.",
      image: "/amenagement-bureau-1600x1200.jpg",
      link: "/amenagement/professionnel",
    },
    {
      title: "Aménagement Particulier",
      description: "Créez votre cocon personnel unique et harmonieux, adapté à votre style de vie.",
      image: "/GWXN1741.jpg",
      link: "/amenagement/particulier",
    },
    {
      title: "Décoration Intérieure",
      description: "Fusionnez esthétique et praticité pour créer des espaces qui vous ressemblent.",
      image: "/WVEBLSJVIMDGHKFBH6EW6WFXMU.jpg",
      link: "/decoration",
    },
    {
      title: "Événements & Décoration Spéciale",
      description: "Transformez vos idées en expériences mémorables et élégantes pour vos événements.",
      image: "/9c966843fa2f8304be4e922646a14787.jpg",
      link: "/decoration/evenements",
    },
  ]
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-[#B18C45]/10 to-white py-20 lg:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <div className="container mx-auto px-4 lg:px-16 max-w-6xl">
          {!isMobile ? ( // Apply animation only on PC
            <motion.div className="max-w-4xl mx-auto text-center space-y-6" variants={fadeInFromTopVariants}>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#282828] leading-tight">Nos Services Complets</h1>
              <p className="text-lg text-[#282828]/80 leading-relaxed">
                Découvrez l'étendue de notre expertise en aménagement et décoration, conçue pour transformer chaque
                espace en une œuvre d'art fonctionnelle et inspirante.
              </p>
            </motion.div>
          ) : (
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#282828] leading-tight">Nos Services Complets</h1>
              <p className="text-lg text-[#282828]/80 leading-relaxed">
                Découvrez l'étendue de notre expertise en aménagement et décoration, conçue pour transformer chaque
                espace en une œuvre d'art fonctionnelle et inspirante.
              </p>
            </div>
          )}
        </div>
      </motion.section>
      {/* Services Section - Mobile Slider / Desktop Grid */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <div className="container mx-auto px-4 lg:px-16 max-w-6xl">
          {isMobile ? (
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper pb-12"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  {/* No motion.div for mobile Swiper slides */}
                  <Link href={service.link} className="group cursor-pointer block">
                    <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-[350px]">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
                      <div className="absolute bottom-8 left-8 right-8">
                        <h3 className="text-2xl font-bold text-white mb-4 uppercase">{service.title}</h3>
                        <p className="text-white/90 text-lg leading-relaxed mb-6">{service.description}</p>
                        <AnimatedButton className="bg-[#B18C45] hover:bg-[#B18C45]/90 text-white">
                          En savoir plus
                        </AnimatedButton>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <motion.div className="grid md:grid-cols-2 gap-8" variants={containerVariants}>
              {services.map((service, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Link href={service.link} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-[350px]">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
                      <div className="absolute bottom-8 left-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 uppercase">{service.title}</h3>
                        <p className="text-white/90 text-lg leading-relaxed mb-6">{service.description}</p>
                        <AnimatedButton className="bg-[#B18C45] hover:bg-[#B18C45]/90 text-white">
                          En savoir plus
                        </AnimatedButton>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.section>
      {/* Call to Action */}
      <motion.section
        className="py-20 bg-gradient-to-r from-[#B18C45]/10 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <div className="container mx-auto px-4 lg:px-16 max-w-6xl">
          {!isMobile ? ( // Apply animation only on PC
            <motion.div className="max-w-4xl mx-auto text-center space-y-8" variants={fadeInFromBottomVariants}>
              <div className="flex items-center justify-center space-x-2 text-[#B18C45] font-medium text-lg">
                <span>📞</span>
                <span>
                  Prêt à concrétiser votre vision ? Contactez 5P pour une consultation personnalisée et un devis
                  gratuit.
                </span>
              </div>
              <div className="pt-6 flex justify-center">
                <Link href="/contact">
                  <AnimatedButton className="bg-[#B18C45] hover:bg-[#B18C45]/90 text-white px-12 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Demandez votre devis
                  </AnimatedButton>
                </Link>
              </div>
            </motion.div>
          ) : (
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="flex items-center justify-center space-x-2 text-[#B18C45] font-medium text-lg">
                <span>📞</span>
                <span>
                  Prêt à concrétiser votre vision ? Contactez 5P pour une consultation personnalisée et un devis
                  gratuit.
                </span>
              </div>
              <div className="pt-6 flex justify-center">
                <Link href="/contact">
                  <AnimatedButton className="bg-[#B18C45] hover:bg-[#B18C45]/90 text-white px-12 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Demandez votre devis
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          )}
        </div>
      </motion.section>
      <Footer />
    </div>
  )
}
