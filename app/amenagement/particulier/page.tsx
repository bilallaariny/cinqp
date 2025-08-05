"use client"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedButton from "@/components/animated-button"
import { motion } from "framer-motion" // Import motion

// Define animation variants (reusing from previous examples)
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

export default function ParticulierPage() {
  const [isMobile, setIsMobile] = useState(false)
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [autoScroll, setAutoScroll] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    // Set the initial value
    handleResize()
    // Add event listener
    window.addEventListener("resize", handleResize)
    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto-scroll effect for the carousel
  useEffect(() => {
    if (!carouselApi || !autoScroll) return
    const interval = setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext()
      } else {
        carouselApi.scrollTo(0)
      }
    }, 3000) // Adjust scroll speed as needed
    return () => clearInterval(interval)
  }, [carouselApi, autoScroll])

  const particularServices = [
    {
      src: "/37a442b6a6342cc4faec356b07a766e9.jpg",
      alt: "Aménagement cuisine et salle à manger",
      title: "Aménagement cuisine et salle à manger",
      description:
        "De la sélection des matériaux à la disposition des équipements, nous créons une cuisine fonctionnelle qui correspond à vos goûts et à votre style de vie.",
      height: "450px",
    },
    {
      src: "/istockphoto-1141212809-612x612.jpg",
      alt: "Placards, dressing et rangements",
      title: "Placards, dressing et rangements",
      description:
        "Profitez de notre expertise pour aménager et organiser vos placards, dressings et espaces de rangement, afin de ne jamais manquer de place.",
      height: "240px",
    },
    {
      src: "/media-97375709-001-1280x853.webp",
      alt: "Aménagement salle de bain",
      title: "Aménagement salle de bain",
      description:
        "Nous proposons des solutions pratiques et sur mesure pour votre salle de bain, quelle que soit sa taille, pour un espace fonctionnel et agréable.",
      height: "680px",
    },
    {
      src: "/agencement-et-decoration-d-une-villa-laura-djabourian-architecture-d-interieur-img~32b157c20fc62304_14-3461-1-dea82ce.jpg",
      alt: "Salon et séjour",
      title: "Salon et séjour",
      description:
        "Que ce soit pour vous détendre ou recevoir vos invités, nous aménageons votre salon pour qu'il soit confortable, élégant et adapté à votre mode de vie.",
      height: "300px",
    },
    {
      src: "/cuisine.jpg",
      alt: "Cuisine accessible pour personnes à mobilité réduite",
      title: "Cuisine accessible pour personnes à mobilité réduite",
      description:
        "Nous concevons des cuisines intelligentes, accessibles et faciles à utiliser, adaptées aux besoins des personnes à mobilité réduite.",
      height: "280px",
    },
    {
      src: "/55ec100180934ac3a3c72a9581d3eb7a (1).jpg",
      alt: "Salon marocain",
      title: "Salon marocain",
      description:
        "Pièce traditionnelle par excellence, le salon marocain peut être aménagé dans un style moderne ou classique, selon vos préférences et votre budget.",
      height: "720px",
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
        <div className="container mx-auto px-16 max-w-6xl">
          {!isMobile ? ( // Apply animation only on PC
            <motion.div className="max-w-4xl mx-auto text-center space-y-6" variants={fadeInFromTopVariants}>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#282828] leading-tight">
                Aménagements et rénovations pour maison et appartement à Marrakech
              </h1>
              <p className="text-lg text-[#282828]/80 leading-relaxed">
                5P réalise tous vos aménagements d'intérieur pour votre appartement, villa ou maison à Marrakech. Nous
                vous proposons un agencement sur mesure de vos espaces privés pour plus de confort et de fonctionnalité
                au quotidien. Nos conceptions uniques optimisent votre espace tout en le rendant chaleureux, fonctionnel
                et esthétique.
              </p>
            </motion.div>
          ) : (
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#282828] leading-tight">
                Aménagements et rénovations pour maison et appartement à Marrakech
              </h1>
              <p className="text-lg text-[#282828]/80 leading-relaxed">
                5P réalise tous vos aménagements d'intérieur pour votre appartement, villa ou maison à Marrakech. Nous
                vous proposons un agencement sur mesure de vos espaces privés pour plus de confort et de fonctionnalité
                au quotidien. Nos conceptions uniques optimisent votre espace tout en le rendant chaleureux, fonctionnel
                et esthétique.
              </p>
            </div>
          )}
        </div>
      </motion.section>
      {/* Masonry Grid / Carousel */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <div className="container mx-auto px-16 max-w-6xl">
          {isMobile ? (
            <div className="px-4">
              <Carousel
                setApi={setCarouselApi}
                opts={{
                  align: "start",
                  loop: true,
                  slidesToScroll: 1,
                }}
                className="w-full"
              >
                <CarouselContent
                  className="-ml-4"
                  onMouseEnter={() => setAutoScroll(false)}
                  onMouseLeave={() => setAutoScroll(true)}
                >
                  {particularServices.map((service, index) => (
                    <CarouselItem key={index} className="pl-4 basis-full">
                      {/* No motion.div for mobile carousel items */}
                      <Card className="border-0 shadow-lg h-full">
                        <CardContent className="p-0 text-center space-y-4 flex flex-col h-full">
                          <div className="relative overflow-hidden rounded-t-lg" style={{ height: "250px" }}>
                            <Image
                              src={service.src || "/placeholder.svg"}
                              alt={service.alt}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-2 text-[#282828]">{service.title}</h3>
                            <p className="text-sm text-[#282828]/90 flex-grow">{service.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          ) : (
            <motion.div
              className="columns-1 md:columns-2 lg:columns-3 xl:columns-3 gap-6 space-y-6 mx-auto"
              variants={containerVariants}
            >
              {particularServices.map((service, index) => (
                <motion.div key={index} className="break-inside-avoid group cursor-pointer" variants={itemVariants}>
                  <div
                    className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ height: service.height }}
                  >
                    <Image
                      src={service.src || "/placeholder.svg"}
                      alt={service.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                        <p className="text-sm text-white/90">{service.description}</p>
                      </div>
                    </div>
                  </div>
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
        <div className="container mx-auto px-4">
          {!isMobile ? ( // Apply animation only on PC
            <motion.div className="max-w-4xl mx-auto text-center space-y-8" variants={fadeInFromBottomVariants}>
              <div className="flex items-center justify-center space-x-2 text-[#B18C45] font-medium text-lg">
                <span>📞</span>
                <span>
                  Envie de transformer votre intérieur ? Contactez 5P pour un accompagnement personnalisé et un devis
                  gratuit.
                </span>
              </div>
              <div className="pt-6">
                <a href="/contact" className="pt-6 justify-center flex">
                  <AnimatedButton className="bg-[#B18C45] hover:bg-[#B18C45]/90 text-white px-12 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Demandez un devis
                  </AnimatedButton>
                </a>
              </div>
            </motion.div>
          ) : (
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="flex items-center justify-center space-x-2 text-[#B18C45] font-medium text-lg">
                <span>📞</span>
                <span>
                  Envie de transformer votre intérieur ? Contactez 5P pour un accompagnement personnalisé et un devis
                  gratuit.
                </span>
              </div>
              <div className="pt-6">
                <a href="/contact" className="pt-6 justify-center flex">
                  <AnimatedButton className="bg-[#B18C45] hover:bg-[#B18C45]/90 text-white px-12 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Demandez un devis
                  </AnimatedButton>
                </a>
              </div>
            </div>
          )}
        </div>
      </motion.section>
      <Footer />
    </div>
  )
}
