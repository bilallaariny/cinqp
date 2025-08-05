"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Building2, Palette, Calendar, Star, Phone, Mail, MapPin, CheckCircle2, AlertCircle } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import Link from "next/link"
import AnimatedButton from "@/components/animated-button"
import { motion, AnimatePresence } from "framer-motion"

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

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false)
  const [realisationCarouselApi, setRealisationCarouselApi] = useState<CarouselApi>()
  const [realisationAutoScroll, setRealisationAutoScroll] = useState(true)
  const [whyChooseCarouselApi, setWhyChooseCarouselApi] = useState<CarouselApi>()
  const [whyChooseAutoScroll, setWhyChooseAutoScroll] = useState(true)
  const [servicesCarouselApi, setServicesCarouselApi] = useState<CarouselApi>()
  const [servicesAutoScroll, setServicesAutoScroll] = useState(true)
  const [submissionStatus, setSubmissionStatus] = useState<{
    success: boolean | null
    message: string
  }>({ success: null, message: "" })

  // Clear message after 5 seconds
  useEffect(() => {
    if (submissionStatus.success !== null) {
      const timer = setTimeout(() => {
        setSubmissionStatus({ success: null, message: "" })
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [submissionStatus])

  async function handleSubmit(e: any) {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      name: form.name.value,
      firstName: form.firstName.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmissionStatus({
          success: true,
          message: "Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.",
        })
        form.reset()
      } else {
        setSubmissionStatus({
          success: false,
          message:
            "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement par email.",
        })
      }
    } catch (error) {
      setSubmissionStatus({
        success: false,
        message: "Erreur de connexion. Vérifiez votre réseau et réessayez.",
      })
    }
  }

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

  // Auto-scroll effect for Realisations
  useEffect(() => {
    if (!realisationCarouselApi || !realisationAutoScroll) return
    const interval = setInterval(() => {
      if (realisationCarouselApi.canScrollNext()) {
        realisationCarouselApi.scrollNext()
      } else {
        realisationCarouselApi.scrollTo(0)
      }
    }, 3000) // Adjust scroll speed as needed
    return () => clearInterval(interval)
  }, [realisationCarouselApi, realisationAutoScroll])

  // Auto-scroll effect for Pourquoi choisir 5P
  useEffect(() => {
    if (!whyChooseCarouselApi || !whyChooseAutoScroll) return
    const interval = setInterval(() => {
      if (whyChooseCarouselApi.canScrollNext()) {
        whyChooseCarouselApi.scrollNext()
      } else {
        whyChooseCarouselApi.scrollTo(0)
      }
    }, 3000) // Adjust scroll speed as needed
    return () => clearInterval(interval)
  }, [whyChooseCarouselApi, whyChooseAutoScroll])

  // Auto-scroll effect for Services principaux
  useEffect(() => {
    if (!servicesCarouselApi || !servicesAutoScroll) return
    const interval = setInterval(() => {
      if (servicesCarouselApi.canScrollNext()) {
        servicesCarouselApi.scrollNext()
      } else {
        servicesCarouselApi.scrollTo(0)
      }
    }, 3000) // Adjust scroll speed as needed
    return () => clearInterval(interval)
  }, [servicesCarouselApi, servicesAutoScroll])

  const realisationCards = [
    {
      image: "/decoration-bureaux.jpg",
      alt: "Aménagement bureau – Marrakech",
      title: "Aménagement bureau – Marrakech",
      link: "#",
    },
    {
      image: "/573199484.jpg",
      alt: "Salon contemporain – Villa privée",
      title: "Salon contemporain – Villa privée",
      link: "#",
    },
    {
      image: "/664df3d6bfb380701b09ceb0_hero-engagements-p-2000.webp",
      alt: "Restaurant de luxe – Marrakech",
      title: "Restaurant de luxe – Marrakech",
      link: "#",
    },
  ]
  const whyChooseCards = [
    {
      icon: <Star className="w-8 h-8 text-white" />,
      title: "Expertise locale reconnue",
    },
    {
      icon: <Palette className="w-8 h-8 text-white" />,
      title: "Projets sur mesure adaptés",
    },
    {
      icon: <Calendar className="w-8 h-8 text-white" />,
      title: "Respect des délais et budgets",
    },
    {
      icon: <Building2 className="w-8 h-8 text-white" />,
      title: "Équipe professionnelle",
    },
    {
      icon: <Star className="w-8 h-8 text-white" />,
      title: "Matériaux de qualité",
    },
  ]
  const servicesCards = [
    {
      image: "/37a442b6a6342cc4faec356b07a766e9.jpg",
      alt: "Aménagement cuisine et salle à manger",
      title: "Aménagement Professionnel",
      description:
        "Optimisez vos espaces de travail avec des solutions fonctionnelles et esthétiques, parfaitement adaptées à votre activité.",
      height: "450px",
    },
    {
      image: "/istockphoto-1141212809-612x612.jpg",
      alt: "Placards, dressing et rangements",
      title: "Aménagement Particulier",
      description: "Créez votre cocon personnel unique et harmonieux.",
      height: "240px",
    },
    {
      image: "/media-97375709-001-1280x853.webp",
      alt: "Aménagement salle de bain",
      title: "Décoration Intérieure",
      description:
        "Fusionnez esthétique et praticité. Nous maîtrisons volumes, matériaux et lumières pour créer des espaces qui vous ressemblent.",
      height: "680px",
    },
    {
      image:
        "/agencement-et-decoration-d-une-villa-laura-djabourian-architecture-d-interieur-img~32b157c20fc62304_14-3461-1-dea82ce.jpg",
      alt: "Salon et séjour",
      title: "Événements & Décoration Spéciale",
      description:
        "Créez des moments inoubliables. Mariages, événements d'entreprise, célébrations privées : nous transformons vos idées en expériences mémorables et élégantes.",
      height: "300px",
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-6" variants={fadeInFromTopVariants}>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#282828] leading-tight">
                Donnez vie à vos espaces avec <span className="text-[#B18C45]">5P</span>
              </h1>
              <p className="text-xl text-[#282828]/80 leading-relaxed">
                Expert en aménagement & décoration à Marrakech
              </p>
              <p className="text-lg text-[#282828]/70">
                Des solutions sur-mesure pour vos projets professionnels et particuliers
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <AnimatedButton>Demandez un devis</AnimatedButton>
                </Link>
                <Link href="/services">
                  <AnimatedButton className="border-[#B18C45] text-[#B18C45] hover:bg-[#B18C45] hover:text-white px-8 py-3 text-lg bg-transparent">
                    Découvrez nos services
                  </AnimatedButton>
                </Link>
              </div>
            </motion.div>
            <motion.div className="relative" variants={fadeInFromRightVariants}>
              <Image
                src="/664b4fd1de1b09a51271ad76_hero-home.webp"
                alt="Aménagement intérieur moderne"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Présentation rapide */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <div className="container mx-auto px-16 max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInFromLeftVariants}>
              <Image
                src="/664b4fd153ae4ac0fa2a6c2c_amenagement-2.webp"
                alt="Équipe 5P"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div className="space-y-6" variants={fadeInFromRightVariants}>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#282828]">
                À propos de <span className="text-[#B18C45]">5P</span>
              </h2>
              <p className="text-lg text-[#282828]/80 leading-relaxed">
                5P est une entreprise spécialisée dans l'aménagement intérieur et la décoration à Marrakech. Forts d'une
                expérience solide, nous allions créativité et savoir-faire technique pour transformer vos espaces selon
                vos besoins et vos envies.
              </p>
              <p className="text-lg text-[#282828]/80 leading-relaxed">
                Notre équipe passionnée s'engage à vous offrir des solutions personnalisées, respectueuses des délais et
                des budgets, pour des résultats à la hauteur de vos attentes.
              </p>
              <div className="mt-6">
                <Link href="/about">
                  <AnimatedButton>Voir plus</AnimatedButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Services principaux */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="container mx-auto px-16 max-w-6xl" variants={fadeInVariants}>
          {!isMobile ? ( // Apply animation only on PC
            <motion.div className="text-center mb-12" variants={fadeInFromTopVariants}>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#282828] mb-4">Nos Services principaux</h2>
            </motion.div>
          ) : (
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#282828] mb-4">Nos Services principaux</h2>
            </div>
          )}
          {isMobile ? (
            <div className="px-4">
              <Carousel
                setApi={setServicesCarouselApi}
                opts={{
                  align: "start",
                  loop: true,
                  slidesToScroll: 1,
                }}
                className="w-full"
              >
                <CarouselContent
                  className="-ml-4"
                  onMouseEnter={() => setServicesAutoScroll(false)}
                  onMouseLeave={() => setServicesAutoScroll(true)}
                >
                  {servicesCards.map((card, index) => (
                    <CarouselItem key={index} className="pl-4 basis-full">
                      {/* Removed motion.div for mobile carousel items */}
                      <Card className="border-0 shadow-lg h-full">
                        <CardContent className="p-0 text-center space-y-4 flex flex-col h-full">
                          <div className="relative overflow-hidden rounded-t-lg" style={{ height: "250px" }}>
                            <Image
                              src={card.image || "/placeholder.svg"}
                              alt={card.alt}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-2 text-[#282828]">{card.title}</h3>
                            <p className="text-sm text-[#282828]/90 flex-grow">{card.description}</p>
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
              className="columns-1 md:columns-2 lg:columns-2 xl:columns-2 gap-6 space-y-6 mx-auto"
              variants={containerVariants}
            >
              {servicesCards.map((card, index) => (
                <motion.div key={index} className="break-inside-avoid group cursor-pointer" variants={itemVariants}>
                  <div
                    className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ height: card.height }}
                  >
                    <Image
                      src={card.image || "/placeholder.svg"}
                      alt={card.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
                        <p className="text-sm text-white/90">{card.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.section>
      {/* Réalisations */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="container mx-auto px-16 max-w-4xl" variants={fadeInVariants}>
          <motion.div className="text-center mb-12" variants={fadeInFromTopVariants}>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#282828] mb-4">Réalisations / Projets récents</h2>
            <p className="text-lg text-[#282828]/70 max-w-3xl mx-auto">
              Découvrez quelques-unes de nos dernières réalisations, où l'alliance du design et de la fonctionnalité
              sublime chaque espace.
            </p>
          </motion.div>
          {isMobile ? (
            <div className="px-4">
              <Carousel
                setApi={setRealisationCarouselApi}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent
                  className="-ml-4"
                  onMouseEnter={() => setRealisationAutoScroll(false)}
                  onMouseLeave={() => setRealisationAutoScroll(true)}
                >
                  {realisationCards.map((card, index) => (
                    <CarouselItem key={index} className="pl-4 basis-full ">
                      <motion.div variants={itemVariants}>
                        <Card className="bg-white border-gray-200 text-[#282828] flex flex-col h-full rounded-lg shadow-lg ">
                          <CardHeader className="p-0 ">
                            <Image
                              src={card.image || "/placeholder.svg"}
                              width={400}
                              height={300}
                              alt={card.alt}
                              className="rounded-t-lg object-cover w-full h-64"
                            />
                          </CardHeader>
                          <CardContent className="flex-grow flex flex-col justify-between p-4 pt-4">
                            <CardTitle className="text-lg font-medium text-left">{card.title}</CardTitle>
                            <Button
                              asChild
                              className="bg-[#B18C45] text-white hover:bg-[#B18C45]/90 rounded-md px-4 py-2 text-sm font-semibold mt-4 self-start"
                            >
                              <Link href={card.link}>Voir le projet</Link>
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          ) : (
            <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
              {realisationCards.map((card, index) => (
                <motion.div key={index} className="group cursor-pointer" variants={itemVariants}>
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={card.image || "/placeholder.svg"}
                      alt={card.alt}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white font-semibold">Voir le projet</p>
                    </div>
                  </div>
                  <p className="mt-4 text-[#282828] font-medium">{card.title}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.section>
      {/* Pourquoi choisir 5P */}
      <motion.section className="py-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <motion.div className="container mx-auto px-16 max-w-4xl" variants={fadeInVariants}>
          <motion.div className="text-center mb-12" variants={fadeInFromTopVariants}>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#282828] mb-8">
              Pourquoi choisir <span className="text-[#B18C45]">5P</span> ?
            </h2>
          </motion.div>
          {isMobile ? (
            <div className="px-4">
              <Carousel
                setApi={setWhyChooseCarouselApi}
                opts={{
                  align: "start",
                  loop: true,
                  slidesToScroll: 1,
                }}
                className="w-full"
              >
                <CarouselContent
                  className="-ml-4"
                  onMouseEnter={() => setWhyChooseAutoScroll(false)}
                  onMouseLeave={() => setWhyChooseAutoScroll(true)}
                >
                  {whyChooseCards.map((card, index) => (
                    <CarouselItem key={index} className="pl-4 basis-full">
                      <motion.div variants={itemVariantsFromTop}>
                        <div className="text-center space-y-4 p-4">
                          <div className="w-16 h-16 bg-[#B18C45] rounded-full flex items-center justify-center mx-auto">
                            {card.icon}
                          </div>
                          <h3 className="font-bold text-[#282828]">{card.title}</h3>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          ) : (
            <motion.div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8" variants={containerVariants}>
              {whyChooseCards.map((card, index) => (
                <motion.div key={index} className="text-center space-y-4" variants={itemVariantsFromTop}>
                  <div className="w-16 h-16 bg-[#B18C45] rounded-full flex items-center justify-center mx-auto">
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-[#282828]">{card.title}</h3>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.section>


      {/* Témoignages */}
         {/* Témoignages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-16 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#282828] mb-4">Témoignages clients</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#B18C45] fill-current" />
                  ))}
                </div>
                <p className="text-[#282828]/80 mb-4 italic">
                  "Grâce à 5P, notre bureau est devenu un espace moderne et fonctionnel, parfaitement adapté à nos
                  activités."
                </p>
                <p className="font-semibold text-[#282828]">– Samir B.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#B18C45] fill-current" />
                  ))}
                </div>
                <p className="text-[#282828]/80 mb-4 italic">
                  "Une équipe réactive et créative, très satisfaite du résultat pour notre maison."
                </p>
                <p className="font-semibold text-[#282828]">– Fatima L.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <motion.section className="py-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <motion.div className="container mx-auto px-16 max-w-4xl" variants={fadeInVariants}>
          <motion.div className="text-center mb-12" variants={fadeInFromTopVariants}>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#282828] mb-4">
              Besoin d'un conseil ou d'un devis personnalisé ?
            </h2>
            <p className="text-lg text-[#282828]/70 max-w-3xl mx-auto mb-4">
              Notre équipe 5P vous accompagne dans tous vos projets de décoration, d'aménagement intérieur ou
              événementiel. Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
            </p>
            <p className="text-[#B18C45] font-medium">📩 Vous pouvez aussi nous écrire directement à contact@5p.ma</p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div className="space-y-6" variants={fadeInFromLeftVariants}>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#B18C45]" />
                <span className="text-[#282828]">+212 5XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#B18C45]" />
                <span className="text-[#282828]">contact@5p.ma</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-[#B18C45]" />
                <span className="text-[#282828]">Marrakech, Maroc</span>
              </div>
            </motion.div>
            <motion.div variants={fadeInFromRightVariants}>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#282828] mb-2">Nom</label>
                        <Input name="name" className="border-gray-300 focus:border-[#B18C45]" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#282828] mb-2">Prénom</label>
                        <Input name="firstName" className="border-gray-300 focus:border-[#B18C45]" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#282828] mb-2">Email</label>
                      <Input type="email" name="email" className="border-gray-300 focus:border-[#B18C45]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#282828] mb-2">Téléphone</label>
                      <Input name="phone" className="border-gray-300 focus:border-[#B18C45]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#282828] mb-2">Message</label>
                      <Textarea name="message" className="border-gray-300 focus:border-[#B18C45] min-h-[120px]" />
                    </div>
                    <AnimatedButton className="w-full bg-[#B18C45] hover:bg-[#B18C45]/90 text-white py-3">
                      Envoyer ma demande
                    </AnimatedButton>
                    <AnimatePresence>
                      {submissionStatus.success !== null && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className={`p-4 rounded-md border ${
                            submissionStatus.success
                              ? "bg-green-50 border-green-200 text-green-700"
                              : "bg-red-50 border-red-200 text-red-700"
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            {submissionStatus.success ? (
                              <CheckCircle2 className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                            ) : (
                              <AlertCircle className="w-5 h-5 mt-0.5 text-red-500 flex-shrink-0" />
                            )}
                            <p className="text-sm">{submissionStatus.message}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
      <Footer />
    </div>
  )
}
