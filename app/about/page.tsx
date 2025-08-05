"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Palette, Calendar, Star, Users, Lightbulb, Home, Brush, Layout, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
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

const itemVariantsFromTop = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(false)
  const [pourquoiChoisirCarouselApi, setPourquoiChoisirCarouselApi] = useState<CarouselApi>()
  const [pourquoiChoisirAutoScroll, setPourquoiChoisirAutoScroll] = useState(true)
  const [domainesInterventionCarouselApi, setDomainesInterventionCarouselApi] = useState<CarouselApi>()
  const [domainesInterventionAutoScroll, setDomainesInterventionAutoScroll] = useState(true)

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

  // Auto-scroll effect for Pourquoi choisir 5P
  useEffect(() => {
    if (!pourquoiChoisirCarouselApi || !pourquoiChoisirAutoScroll) return
    const interval = setInterval(() => {
      if (pourquoiChoisirCarouselApi.canScrollNext()) {
        pourquoiChoisirCarouselApi.scrollNext()
      } else {
        pourquoiChoisirCarouselApi.scrollTo(0)
      }
    }, 3000) // Adjust scroll speed as needed
    return () => clearInterval(interval)
  }, [pourquoiChoisirCarouselApi, pourquoiChoisirAutoScroll])

  // Auto-scroll effect for Nos domaines d'intervention
  useEffect(() => {
    if (!domainesInterventionCarouselApi || !domainesInterventionAutoScroll) return
    const interval = setInterval(() => {
      if (domainesInterventionCarouselApi.canScrollNext()) {
        domainesInterventionCarouselApi.scrollNext()
      } else {
        domainesInterventionCarouselApi.scrollTo(0)
      }
    }, 3000) // Adjust scroll speed as needed
    return () => clearInterval(interval)
  }, [domainesInterventionCarouselApi, domainesInterventionAutoScroll])

  const pourquoiChoisirCards = [
    {
      icon: <Star className="w-8 h-8 text-white" />,
      title: "Expertise locale reconnue",
    },
    {
      icon: <Palette className="w-8 h-8 text-white" />,
      title: "Des projets sur mesure, adaptés à vos besoins",
    },
    {
      icon: <Calendar className="w-8 h-8 text-white" />,
      title: "Respect strict des délais et des budgets",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Équipe professionnelle et à l'écoute",
    },
    {
      icon: <Building2 className="w-8 h-8 text-white" />,
      title: "Utilisation de matériaux de qualité",
    },
  ]
  const domainesInterventionCards = [
    {
      icon: <Home className="w-10 h-10 text-white" />,
      title: "Aménagement intérieur",
      description: "Optimisation et transformation complète de vos espaces intérieurs",
    },
    {
      icon: <Brush className="w-10 h-10 text-white" />,
      title: "Décoration personnalisée",
      description: "Création d'ambiances uniques qui reflètent votre personnalité",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-white" />,
      title: "Conseil en design",
      description: "Accompagnement expert pour vos choix esthétiques et fonctionnels",
    },
    {
      icon: <Layout className="w-10 h-10 text-white" />,
      title: "Optimisation d'espace",
      description: "Maximisation de la functionality and comfort of your spaces",
    },
    {
      icon: <ShoppingBag className="w-10 h-10 text-white" />,
      title: "Sélection de mobilier et matériaux",
      description:
        "Choix minutieux des éléments qui composeront votre intérieur, alliant qualité, esthétique et durabilité",
    },
  ]
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section - Qui sommes-nous */}
      <motion.section
        className="relative bg-gradient-to-r from-[#B18C45]/10 to-white py-20 lg:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <div className="container mx-auto px-16 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-6" variants={fadeInFromTopVariants}>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#282828] leading-tight">Qui sommes-nous ?</h1>
              <p className="text-lg text-[#282828]/80 leading-relaxed">
                5P est une entreprise spécialisée dans l'aménagement intérieur et la décoration à Marrakech. Forts d'une
                expérience solide, nous allions créativité et savoir-faire technique pour transformer vos espaces selon
                vos besoins et vos envies.
              </p>
              <p className="text-lg text-[#282828]/80 leading-relaxed">
                Notre équipe passionnée s'engage à vous offrir des solutions sur mesure, respectueuses des délais et des
                budgets, pour des résultats à la hauteur de vos attentes. Nous intervenons aussi bien auprès des
                particuliers que des professionnels, avec une approche basée sur l'écoute, l'innovation, et l'exigence
                de qualité.
              </p>
            </motion.div>
            <motion.div className="relative" variants={fadeInFromRightVariants}>
              <Image
                src="/664df3d6bfb380701b09ceb0_hero-engagements-p-2000.webp"
                alt="Équipe 5P au travail"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl h-[350px]"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Pourquoi choisir 5P */}
    <motion.section className="py-16 bg-gray-50" initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}>
        <motion.div className="container mx-auto px-16 max-w-6xl" variants={fadeInVariants}>
          <motion.div className="text-center mb-16"  variants={fadeInFromTopVariants}>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#282828] mb-8">
              Pourquoi choisir <span className="text-[#B18C45]">5P</span> ?
            </h2>
          </motion.div>
          {isMobile ? (
            <motion.div className="px-4">
              <Carousel
                setApi={setPourquoiChoisirCarouselApi}
                opts={{
                  align: "start",
                  loop: true,
                  slidesToScroll: 1,
                }}
                className="w-full"
              >
                <CarouselContent
                  className="-ml-4"
                  onMouseEnter={() => setPourquoiChoisirAutoScroll(false)}
                  onMouseLeave={() => setPourquoiChoisirAutoScroll(true)}
                >
                  {pourquoiChoisirCards.map((card, index) => (
                    <CarouselItem key={index} className="pl-4 basis-full">
                      <Card className="border-0 shadow-lg h-full">
                        {" "}
                        {/* Added h-full */}
                        <CardContent className="p-8 text-center space-y-4 flex flex-col h-full">
                          {" "}
                          {/* Added flex flex-col h-full */}
                          <div className="w-16 h-16 bg-[#B18C45] rounded-full flex items-center justify-center mx-auto">
                            {card.icon}
                          </div>
                          <h3 className="font-bold text-[#282828] text-lg">{card.title}</h3>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </motion.div>
          ) : (
            <motion.div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {pourquoiChoisirCards.map((card, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-[#B18C45] rounded-full flex items-center justify-center mx-auto">
                      {card.icon}
                    </div>
                    <h3 className="font-bold text-[#282828] text-lg">{card.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.section>

      {/* Nos domaines d'intervention */}
      <motion.section className="py-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <motion.div className="container mx-auto px-16 max-w-6xl" variants={fadeInVariants}>
          <motion.div className="text-center mb-16" variants={fadeInFromTopVariants}>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#282828] mb-4">Nos domaines d'intervention</h2>
          </motion.div>
          {isMobile ? (
            <div className="px-4">
              <Carousel
                setApi={setDomainesInterventionCarouselApi}
                opts={{
                  align: "start",
                  loop: true,
                  slidesToScroll: 1,
                }}
                className="w-full"
              >
                <CarouselContent
                  className="-ml-4"
                  onMouseEnter={() => setDomainesInterventionAutoScroll(false)}
                  onMouseLeave={() => setDomainesInterventionAutoScroll(true)}
                >
                  {domainesInterventionCards.map((card, index) => (
                    <CarouselItem key={index} className="pl-4 basis-full">
                      <motion.div variants={itemVariants}>
                        <Card className="border-0 shadow-lg h-full">
                          <CardContent className="p-8 text-center space-y-4 flex flex-col h-full">
                            <div className="w-20 h-20 bg-gradient-to-br from-[#B18C45] to-[#B18C45]/80 rounded-full flex items-center justify-center mx-auto">
                              {card.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#282828]">{card.title}</h3>
                            <p className="text-[#282828]/70 leading-relaxed flex-grow">{card.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          ) : (
            <motion.div className="space-y-8 max-w-6xl mx-auto" variants={containerVariants}>
              {/* First row - 3 items */}
              <div className="grid md:grid-cols-3 gap-8">
                {domainesInterventionCards.slice(0, 3).map((card, index) => (
                  <motion.div key={index} className="group" variants={itemVariants}>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                      <CardContent className="p-8 text-center space-y-4 flex flex-col h-full">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#B18C45] to-[#B18C45]/80 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                          {card.icon}
                        </div>
                        <h3 className="text-xl font-bold text-[#282828]">{card.title}</h3>
                        <p className="text-[#282828]/70 leading-relaxed flex-grow">{card.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              {/* Second row - 2 items centered */}
              <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {domainesInterventionCards.slice(3).map((card, index) => (
                  <motion.div key={index} className="group" variants={itemVariants}>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                      <CardContent className="p-8 text-center space-y-4 flex flex-col h-full">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#B18C45] to-[#B18C45]/80 rounded-full flex items-center justify-center mx-auto">
                          {card.icon}
                        </div>
                        <h3 className="text-xl font-bold text-[#282828]">{card.title}</h3>
                        <p className="text-[#282828]/70 leading-relaxed flex-grow">{card.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.section>
      {/* Vous avez un projet */}
      <motion.section
        className="py-20 bg-gradient-to-r from-[#B18C45]/10 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto text-center space-y-8" variants={fadeInFromBottomVariants}>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#282828] leading-tight">Vous avez un projet ?</h2>
            <div className="space-y-6">
              <p className="text-lg text-[#282828]/80 leading-relaxed">
                Une liaison remarquable entre la décoration et la psychologie humaine a été mise en évidence par
                plusieurs études sur le bien-être. Chez 5P, nous sommes convaincus que l'aménagement de votre espace
                intérieur peut transformer votre quotidien.
              </p>
              <p className="text-lg text-[#282828]/80 leading-relaxed">
                Que vous soyez particulier ou professionnel, notre équipe vous accompagne pour créer un intérieur
                moderne, fonctionnel et inspirant.
              </p>
              <div className="flex items-center justify-center space-x-2 text-[#B18C45] font-medium text-lg">
                <span>📩</span>
                <span>Demandez votre devis gratuit et donnez vie à vos idées.</span>
              </div>
            </div>
            <a href="/contact" className="pt-6 justify-center flex">
              <AnimatedButton className="bg-[#B18C45] hover:bg-[#B18C45]/90 text-white px-12 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Demandez un devis
              </AnimatedButton>
            </a>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </div>
  )
}
