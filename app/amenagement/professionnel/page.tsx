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

export default function ProfessionnelPage() {
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

  const professionalProjects = [
    {
      src: "/bechieau11.jpg",
      alt: "Aménagement de pharmacie et officines",
      title: "Aménagement de pharmacie et officines",
      description:
        "L'agencement de votre pharmacie joue un rôle clé dans sa réussite. Nous aménageons votre officine selon les normes et pour une organisation optimale.",
      height: "650px",
    },
    {
      src: "/vue-angle-eleve-plante-pot-table_1048944-24063525.avif",
      alt: "Parquet design et unique",
      title: "Parquet design et unique",
      description:
        "Vous cherchez un parquet à Marrakech qui allie design et qualité ? 5P vous propose une sélection variée et tendance adaptée à tous vos espaces.",
      height: "200px",
    },
    {
      src: "/19_05_2021-10_02_02.jpeg",
      alt: "Aménagement et agencement de magasin",
      title: "Aménagement et agencement de magasin",
      description:
        "Optimisez la présentation de votre magasin pour attirer les clients et valoriser vos produits, en rendant l'espace accueillant et bien organisé.",
      height: "750px",
    },
    {
      src: "/banque_accueil_vercors_01_815x935.jpg",
      alt: "Banques d'accueil et comptoirs",
      title: "Banques d'accueil et comptoirs",
      description:
        "L'accueil est le premier contact avec vos clients. Nous concevons des banques d'accueil professionnelles qui reflètent votre sérieux dès l'entrée.",
      height: "300px",
    },
    {
      src: "/trimat_specialiste_amenagement_espace_agencement.jpg",
      alt: "Aménagement de bureaux opérateurs",
      title: "Aménagement de bureaux opérateurs",
      description:
        "Un espace de travail agréable améliore la motivation de vos collaborateurs. Nous créons des bureaux fonctionnels et confortables pour booster leur productivité.",
      height: "220px",
    },
    {
      src: "/bureau-direction-design-retour-sergio.webp",
      alt: "Bureau de direction design",
      title: "Bureau de direction design",
      description:
        "Un bureau de direction élégant et bien pensé vous aide à prendre les bonnes décisions avec confiance et clarté.",
      height: "550px",
    },
    {
      src: "/c1641428b67e4ca9ac4e22b18aac5a10.jpg",
      alt: "Espaces de réunion",
      title: "Espaces de réunion",
      description:
        "Des salles de réunion bien aménagées facilitent les échanges et la créativité au sein de votre équipe.",
      height: "250px",
    },
    {
      src: "/d0f1223b97e80aaf86544523d397742c.jpg",
      alt: "Salles d'attente confortables",
      title: "Salles d'attente confortables",
      description:
        "Offrez à vos clients une salle d'attente chaleureuse et apaisante, pour une expérience positive dès leur arrivée.",
      height: "280px",
    },
    {
      src: "/1-Banniere-cuisine.jpg",
      alt: "Espace restauration pour professionnels",
      title: "Espace restauration pour professionnels",
      description:
        "Un coin repas convivial permet à vos collaborateurs de se détendre, échanger et recharger leurs batteries pendant la pause.",
      height: "700px",
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
          {/* Apply animation only on PC */}
          {!isMobile ? (
            <motion.div className="max-w-4xl mx-auto text-center space-y-6" variants={fadeInFromTopVariants}>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#282828] leading-tight">
                Quel est votre projet d'aménagement professionnel ?
              </h1>
              <p className="text-lg text-[#282828]/80 leading-relaxed">
                5P est spécialiste de l'aménagement des espaces professionnels à Marrakech. Nous proposons des services
                d'agencement sur mesure de vos bureaux, commerces et espaces professionnels, adaptés à vos besoins
                spécifiques. Notre objectif est de vous livrer des espaces ergonomiques, fonctionnels et esthétiques,
                qui favorisent la productivité et l'image de votre entreprise.
              </p>
            </motion.div>
          ) : (
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#282828] leading-tight">
                Quel est votre projet d'aménagement professionnel ?
              </h1>
              <p className="text-lg text-[#282828]/80 leading-relaxed">
                5P est spécialiste de l'aménagement des espaces professionnels à Marrakech. Nous proposons des services
                d'agencement sur mesure de vos bureaux, commerces et espaces professionnels, adaptés à vos besoins
                spécifiques. Notre objectif est de vous livrer des espaces ergonomiques, fonctionnels et esthétiques,
                qui favorisent la productivité et l'image de votre entreprise.
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
                  {professionalProjects.map((project, index) => (
                    <CarouselItem key={index} className="pl-4 basis-full">
                      {/* No motion.div for mobile carousel items */}
                      <Card className="border-0 shadow-lg h-full">
                        <CardContent className="p-0 text-center space-y-4 flex flex-col h-full">
                          <div className="relative overflow-hidden rounded-t-lg" style={{ height: "250px" }}>
                            {" "}
                            {/* Fixed height for mobile carousel images */}
                            <Image
                              src={project.src || "/placeholder.svg"}
                              alt={project.alt}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-2 text-[#282828]">{project.title}</h3>
                            <p className="text-sm text-[#282828]/90 flex-grow">{project.description}</p>
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
              {professionalProjects.map((project, index) => (
                <motion.div key={index} className="break-inside-avoid group cursor-pointer" variants={itemVariants}>
                  <div
                    className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ height: project.height }}
                  >
                    <Image
                      src={project.src || "/placeholder.svg"}
                      alt={project.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                        <p className="text-sm text-white/90">{project.description}</p>
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
        <div className="container mx-auto px-16 max-w-6xl">
          {/* Apply animation only on PC */}
          {!isMobile ? (
            <motion.div className="max-w-4xl mx-auto text-center space-y-8" variants={fadeInFromBottomVariants}>
              <div className="flex items-center justify-center space-x-2 text-[#B18C45] font-medium text-lg">
                <span>📞</span>
                <span>
                  Prêt à donner vie à votre espace professionnel ? Contactez 5P pour un devis personnalisé et sans
                  engagement.
                </span>
              </div>
              <a href="/contact" className="pt-6 justify-center flex">
                <AnimatedButton className="bg-[#B18C45] hover:bg-[#B18C45]/90 text-white px-12 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Demandez un devis
                </AnimatedButton>
              </a>
            </motion.div>
          ) : (
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="flex items-center justify-center space-x-2 text-[#B18C45] font-medium text-lg">
                <span>📞</span>
                <span>
                  Prêt à donner vie à votre espace professionnel ? Contactez 5P pour un devis personnalisé et sans
                  engagement.
                </span>
              </div>
              <a href="/contact" className="pt-6 justify-center flex">
                <AnimatedButton className="bg-[#B18C45] hover:bg-[#B18C45]/90 text-white px-12 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Demandez un devis
                </AnimatedButton>
              </a>
            </div>
          )}
        </div>
      </motion.section>
      <Footer />
    </div>
  )
}
