"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
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

export default function DecorationEvenementsPage() {
  const [isMobile, setIsMobile] = useState(false)
  const [serviceCarouselApi, setServiceCarouselApi] = useState<CarouselApi>()
  const [serviceAutoScroll, setServiceAutoScroll] = useState(true)

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

  useEffect(() => {
    if (!serviceCarouselApi) return
    const interval = setInterval(() => {
      if (serviceAutoScroll) {
        serviceCarouselApi.scrollNext()
      }
    }, 3000) // Adjust scroll interval as needed
    return () => clearInterval(interval)
  }, [serviceCarouselApi, serviceAutoScroll])

  const eventSections = [
    {
      title: "Événements professionnels",
      description:
        "Que vous organisiez un lancement de produit, un séminaire ou une conférence, notre équipe crée une ambiance élégante et dynamique, à l'image de votre entreprise, pour marquer les esprits.",
      image: "/unnamed.jpg",
      imageAlt: "Événements professionnels",
      link: "#", // Placeholder link
    },
    {
      title: "Célébrations familiales",
      description:
        "Mariage, baptême, anniversaire ou toute autre cérémonie, nous imaginons une décoration raffinée et chaleureuse qui rendra ces instants encore plus précieux et inoubliables.",
      image: "/aine-fete-son-anniversaire_23-2149383255.avif",
      imageAlt: "Célébrations familiales",
      link: "#", // Placeholder link
    },
    {
      title: "Soirées d'entreprise",
      description:
        "Pour renforcer la cohésion de vos équipes et impressionner vos clients, nous proposons des décors conviviaux et sophistiqués, parfaits pour sortir du cadre professionnel et créer une ambiance festive.",
      image: "/fad69f58e1b0758c40e8e3f4f25cb616.webp",
      imageAlt: "Soirées d'entreprise",
      link: "#", // Placeholder link
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
        <div className="container mx-auto px-16 max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {!isMobile ? ( // Apply animation only on PC
              <motion.div className="relative" variants={fadeInFromLeftVariants}>
                <Image
                  src="/1b961339b8b62a6db978e8d8b611336e.jpg"
                  alt="Décoration d'événements à Marrakech"
                  width={1000}
                  height={750}
                  className="rounded-lg shadow-2xl w-full h-[600px] lg:h-[600px] object-cover"
                />
              </motion.div>
            ) : (
              <div className="relative">
                <Image
                  src="/1b961339b8b62a6db978e8d8b611336e.jpg"
                  alt="Décoration d'événements à Marrakech"
                  width={1000}
                  height={750}
                  className="rounded-lg shadow-2xl w-full h-[600px] lg:h-[600px] object-cover"
                />
              </div>
            )}
            {!isMobile ? ( // Apply animation only on PC
              <motion.div className="space-y-6" variants={fadeInFromRightVariants}>
                <h1 className="text-4xl lg:text-6xl font-bold text-[#282828] leading-tight">
                  Décoration d'événements à Marrakech : créez des moments inoubliables
                </h1>
                <p className="text-lg text-[#282828]/80 leading-relaxed">
                  Chez 5P, nous savons que chaque événement mérite une atmosphère unique et mémorable. Que ce soit pour
                  un moment professionnel ou une célébration personnelle, nous mettons notre créativité et notre
                  savoir-faire à votre service pour sublimer vos occasions. Nous vous accompagnons dans la conception
                  d'un décor sur mesure, qui reflète l'esprit de votre événement et enchante vos invités.
                </p>
                <div className="mt-6">
                  <Link href="/contact">
                    <AnimatedButton className="bg-[#B18C45] hover:bg-[#B18C45]/90 text-white px-8 py-3 text-lg">
                      Demandez votre devis gratuit
                    </AnimatedButton>
                  </Link>
                </div>
              </motion.div>
            ) : (
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-[#282828] leading-tight">
                  Décoration d'événements à Marrakech : créez des moments inoubliables
                </h1>
                <p className="text-lg text-[#282828]/80 leading-relaxed">
                  Chez 5P, nous savons que chaque événement mérite une atmosphère unique et mémorable. Que ce soit pour
                  un moment professionnel ou une célébration personnelle, nous mettons notre créativité et notre
                  savoir-faire à votre service pour sublimer vos occasions. Nous vous accompagnons dans la conception
                  d'un décor sur mesure, qui reflète l'esprit de votre événement et enchante vos invités.
                </p>
                <div className="mt-6">
                  <Link href="/contact">
                    <AnimatedButton className="bg-[#B18C45] hover:bg-[#B18C45]/90 text-white px-8 py-3 text-lg">
                      Demandez votre devis gratuit
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.section>
      {/* Event Sections - Mobile Carousel */}
      {isMobile ? (
        <section className="py-8 px-4">
          <div className="md:hidden relative">
            <Carousel
              setApi={setServiceCarouselApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent
                className="-ml-4"
                onMouseEnter={() => setServiceAutoScroll(false)}
                onMouseLeave={() => setServiceAutoScroll(true)}
              >
                {eventSections.map((event, index) => (
                  <CarouselItem key={index} className="pl-4 basis-full ">
                    {/* No motion.div for mobile carousel items */}
                    <Card className="bg-white border border-gray-300 text-[#282828] flex flex-col h-full rounded-2xl shadow-xl ">
                      <CardHeader className="p-6 pb-0 ">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          width={400}
                          height={250}
                          alt={event.imageAlt}
                          className="rounded-xl mb-4 object-cover w-full h-48"
                        />
                        <CardTitle className="text-2xl font-bold text-left">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow flex flex-col justify-between p-6 pt-4">
                        <CardDescription className="text-[#282828]/80 mb-6 text-left">
                          {event.description}
                        </CardDescription>
                        <Button
                          asChild
                          className="bg-[#B18C45] text-white hover:bg-[#B18C45]/90 rounded-full px-7 py-4 text-md font-semibold mt-auto self-start"
                        >
                          <Link href={event.link}>En savoir plus</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>
      ) : (
        <>
          {/* Événements Professionnels - Desktop */}
          <motion.section
            className="py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <div className="container mx-auto px-16 max-w-4xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div className="relative" variants={fadeInFromLeftVariants}>
                  <Image
                    src="/unnamed.jpg"
                    alt="Événements professionnels"
                    width={750}
                    height={500}
                    className="rounded-lg shadow-lg h-[500px] object-cover"
                  />
                </motion.div>
                <motion.div className="space-y-4" variants={fadeInFromRightVariants}>
                  <h2 className="text-3xl font-bold text-[#282828]">Événements professionnels</h2>
                  <p className="text-lg text-[#282828]/80">
                    Que vous organisiez un lancement de produit, un séminaire ou une conférence, notre équipe crée une
                    ambiance élégante et dynamique, à l'image de votre entreprise, pour marquer les esprits.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>
          {/* Célébrations Familiales - Desktop */}
          <motion.section
            className="py-16 bg-gray-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <div className="container mx-auto px-16 max-w-4xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div className="space-y-4 lg:order-last" variants={fadeInFromRightVariants}>
                  <h2 className="text-3xl font-bold text-[#282828]">Célébrations familiales</h2>
                  <p className="text-lg text-[#282828]/80">
                    Mariage, baptême, anniversaire ou toute autre cérémonie, nous imaginons une décoration raffinée et
                    chaleureuse qui rendra ces instants encore plus précieux et inoubliables.
                  </p>
                </motion.div>
                <motion.div className="relative lg:order-first" variants={fadeInFromLeftVariants}>
                  <Image
                    src="/aine-fete-son-anniversaire_23-2149383255.avif"
                    alt="Célébrations familiales"
                    width={750}
                    height={500}
                    className="rounded-lg shadow-lg h-[500px] object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.section>
          {/* Soirées d'entreprise - Desktop */}
          <motion.section
            className="py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <div className="container mx-auto px-16 max-w-4xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div className="relative" variants={fadeInFromLeftVariants}>
                  <Image
                    src="/fad69f58e1b0758c40e8e3f4f25cb616.webp"
                    alt="Soirées d'entreprise"
                    width={750}
                    height={500}
                    className="rounded-lg shadow-lg h-[500px] object-cover"
                  />
                </motion.div>
                <motion.div className="space-y-4" variants={fadeInFromRightVariants}>
                  <h2 className="text-3xl font-bold text-[#282828]">Soirées d'entreprise</h2>
                  <p className="text-lg text-[#282828]/80">
                    Pour renforcer la cohésion de vos équipes et impressionner vos clients, nous proposons des décors
                    conviviaux et sophistiqués, parfaits pour sortir du cadre professionnel et créer une ambiance
                    festive.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </>
      )}
      {/* Call to Action */}
      <motion.section
        className="py-20 bg-gradient-to-r from-[#B18C45]/10 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <div className="container mx-auto px-16 max-w-4xl">
          {!isMobile ? ( // Apply animation only on PC
            <motion.div className="max-w-4xl mx-auto text-center space-y-8" variants={fadeInFromBottomVariants}>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#282828] leading-tight">
                📞 Envie de faire de votre événement un succès ?
              </h2>
              <p className="text-lg text-[#282828]/80 leading-relaxed">
                Contactez 5P pour une proposition personnalisée et un devis gratuit.
              </p>
              <div className="pt-6 flex justify-center">
                <Link href="/contact">
                  <AnimatedButton className="bg-[#B18C45] hover:bg-[#B18C45]/90 text-white px-12 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Contactez-nous
                  </AnimatedButton>
                </Link>
              </div>
            </motion.div>
          ) : (
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl lg:text-5xl font-bold text-[#282828] leading-tight">
                📞 Envie de faire de votre événement un succès ?
              </h2>
              <p className="text-lg text-[#282828]/80 leading-relaxed">
                Contactez 5P pour une proposition personnalisée et un devis gratuit.
              </p>
              <div className="pt-6 flex justify-center">
                <Link href="/contact">
                  <AnimatedButton className="bg-[#B18C45] hover:bg-[#B18C45]/90 text-white px-12 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Contactez-nous
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
