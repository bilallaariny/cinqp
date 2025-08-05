"use client"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import AnimatedButton from "@/components/animated-button"
import Link from "next/link"
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

export default function DecorationProfessionnelPage() {
  const [isMobile, setIsMobile] = useState(false)
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
  const professionalSections = [
    {
      title: "Décoration hôtellerie",
      description:
        "Offrez à votre hôtel une décoration élégante et moderne qui valorise votre établissement et surprend vos clients, pour les inciter à revenir.",
      image: "/istockphoto-591821200-612x612.jpg",
      imageAlt: "Décoration hôtellerie",
      bgColor: "bg-white",
    },
    {
      title: "Décoration restauration",
      description:
        "La décoration joue un rôle clé pour attirer et fidéliser les clients. Nous vous garantissons un design unique qui distingue votre restaurant et satisfait votre clientèle.",
      image: "/9_picadilles-copie.jpg",
      imageAlt: "Décoration restauration",
      bgColor: "bg-gray-50",
    },
    {
      title: "Décoration bureaux",
      description:
        "Un environnement de travail agréable est essentiel pour le bien-être et la productivité. Nous créons des bureaux décorés avec soin pour vous et vos équipes.",
      image: "/decoration-locaux-professionnels-page.webp",
      imageAlt: "Décoration bureaux",
      bgColor: "bg-white",
    },
    {
      title: "Décoration locaux commerciaux",
      description:
        "Au-delà de l'aménagement, la décoration contribue à la performance de votre magasin. Nous rendons votre espace plus attractif et démarqué.",
      image: "/vegetacion-verdissimo.webp",
      imageAlt: "Décoration locaux commerciaux",
      bgColor: "bg-gray-50",
    },
    {
      title: "Décoration cabinets et établissements médicaux",
      description:
        "Nous décorons vos cabinets médicaux et para-médicaux pour offrir à vos patients un cadre chaleureux et apaisant.",
      image: "/f82831ef19d8255eaba18ac1e682e04a.jpg",
      imageAlt: "Décoration cabinets et établissements médicaux",
      bgColor: "bg-white",
    },
    {
      title: "Décoration loisirs, sports et bien-être",
      description:
        "Nous concevons des espaces décorés avec goût pour vos établissements de loisirs, sports et bien-être, afin de séduire et fidéliser votre clientèle.",
      image: "/474A07541.webp",
      imageAlt: "Décoration loisirs, sports et bien-être",
      bgColor: "bg-gray-50",
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {!isMobile ? ( // Apply animation only on PC
              <motion.div className="relative" variants={fadeInFromLeftVariants}>
                <Image
                  src="/398e8f117b1735883623a8431498a13c.jpg"
                  alt="Décoration d'espaces professionnels à Marrakech"
                  width={1000}
                  height={750}
                  className="rounded-lg shadow-2xl w-full h-[500px] lg:h-[600px] object-cover"
                />
              </motion.div>
            ) : (
              <div className="relative">
                <Image
                  src="/398e8f117b1735883623a8431498a13c.jpg"
                  alt="Décoration d'espaces professionnels à Marrakech"
                  width={1000}
                  height={750}
                  className="rounded-lg shadow-2xl w-full h-[500px] lg:h-[600px] object-cover"
                />
              </div>
            )}
            {!isMobile ? ( // Apply animation only on PC
              <motion.div className="space-y-6 px-4 lg:px-0" variants={fadeInFromRightVariants}>
                <h1 className="text-4xl lg:text-6xl font-bold text-[#282828] leading-tight">
                  Décoration d'espaces professionnels à Marrakech
                </h1>
                <p className="text-lg text-[#282828]/80 leading-relaxed">
                  5P est expert en décoration d'espaces professionnels. Nous vous accompagnons dans la décoration
                  intérieure de vos locaux : commerces, hôtels, magasins, restaurants, bureaux et espaces événementiels.
                  Notre objectif est de concevoir des espaces tendances, fonctionnels et accueillants. Un design soigné
                  améliore le bien-être de vos collaborateurs et fidélise votre clientèle.
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
              <div className="space-y-6 px-4 lg:px-0">
                <h1 className="text-4xl lg:text-6xl font-bold text-[#282828] leading-tight">
                  Décoration d'espaces professionnels à Marrakech
                </h1>
                <p className="text-lg text-[#282828]/80 leading-relaxed">
                  5P est expert en décoration d'espaces professionnels. Nous vous accompagnons dans la décoration
                  intérieure de vos locaux : commerces, hôtels, magasins, restaurants, bureaux et espaces événementiels.
                  Notre objectif est de concevoir des espaces tendances, fonctionnels et accueillants. Un design soigné
                  améliore le bien-être de vos collaborateurs et fidélise votre clientèle.
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
      {/* Professional Sections - Mobile Slider */}
      {isMobile ? (
        <section className="py-8 px-4">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]} // Ensure Pagination module is included
            className="mySwiper"
            style={{ height: "500px" }} // Enforce fixed height on Swiper
          >
            {professionalSections.map((card, index) => (
              <SwiperSlide key={index} style={{ height: "100%" }}>
                {/* No motion.div for mobile Swiper slides */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                  {/* Image (fixed height) */}
                  <div className="relative h-64 flex-shrink-0">
                    <Image
                      src={card.image || "/placeholder.svg"}
                      alt={card.imageAlt}
                      fill
                      className="object-cover"
                      style={{ objectFit: "cover" }} // Explicitly enforce cover
                    />
                  </div>
                  {/* Text content (fixed height + scrollable) */}
                  <div className="p-6 flex-1 overflow-y-auto" style={{ maxHeight: "calc(100% - 256px)" }}>
                    <h3 className="text-xl font-bold text-[#282828] mb-3">{card.title}</h3>
                    <p className="text-sm text-[#282828]/80">{card.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      ) : (
        <>
          {/* Desktop Layout - Original Sections */}
          <motion.section
            className="py-16 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <div className="container mx-auto px-4 lg:px-16 max-w-6xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div className="relative" variants={fadeInFromLeftVariants}>
                  <Image
                    src="/istockphoto-591821200-612x612.jpg"
                    alt="Décoration hôtellerie"
                    width={750}
                    height={500}
                    className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                  />
                </motion.div>
                <motion.div className="space-y-4 px-4 lg:px-0" variants={fadeInFromRightVariants}>
                  <h2 className="text-3xl font-bold text-[#282828]">Décoration hôtellerie</h2>
                  <p className="text-lg text-[#282828]/80">
                    Offrez à votre hôtel une décoration élégante et moderne qui valorise votre établissement et surprend
                    vos clients, pour les inciter à revenir.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>
          <motion.section
            className="py-16 bg-gray-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <div className="container mx-auto px-4 lg:px-16 max-w-6xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div className="space-y-4 px-4 lg:px-0 lg:order-last" variants={fadeInFromRightVariants}>
                  <h2 className="text-3xl font-bold text-[#282828]">Décoration restauration</h2>
                  <p className="text-lg text-[#282828]/80">
                    La décoration joue un rôle clé pour attirer et fidéliser les clients. Nous vous garantissons un
                    design unique qui distingue votre restaurant et satisfait votre clientèle.
                  </p>
                </motion.div>
                <motion.div className="relative lg:order-first" variants={fadeInFromLeftVariants}>
                  <Image
                    src="/9_picadilles-copie.jpg"
                    alt="Décoration restauration"
                    width={750}
                    height={500}
                    className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.section>
          <motion.section
            className="py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <div className="container mx-auto px-4 lg:px-16 max-w-6xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div className="relative" variants={fadeInFromLeftVariants}>
                  <Image
                    src="/decoration-locaux-professionnels-page.webp"
                    alt="Décoration bureaux"
                    width={750}
                    height={500}
                    className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                  />
                </motion.div>
                <motion.div className="space-y-4 px-4 lg:px-0" variants={fadeInFromRightVariants}>
                  <h2 className="text-3xl font-bold text-[#282828]">Décoration bureaux</h2>
                  <p className="text-lg text-[#282828]/80">
                    Un environnement de travail agréable est essentiel pour le bien-être et la productivité. Nous créons
                    des bureaux décorés avec soin pour vous et vos équipes.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>
          <motion.section
            className="py-16 bg-gray-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <div className="container mx-auto px-4 lg:px-16 max-w-6xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div className="space-y-4 px-4 lg:px-0 lg:order-last" variants={fadeInFromRightVariants}>
                  <h2 className="text-3xl font-bold text-[#282828]">Décoration locaux commerciaux</h2>
                  <p className="text-lg text-[#282828]/80">
                    Au-delà de l'aménagement, la décoration contribue à la performance de votre magasin. Nous rendons
                    votre espace plus attractif et démarqué.
                  </p>
                </motion.div>
                <motion.div className="relative lg:order-first" variants={fadeInFromLeftVariants}>
                  <Image
                    src="/vegetacion-verdissimo.webp"
                    alt="Décoration locaux commerciaux"
                    width={750}
                    height={500}
                    className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.section>
          <motion.section
            className="py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <div className="container mx-auto px-4 lg:px-16 max-w-6xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div className="relative" variants={fadeInFromLeftVariants}>
                  <Image
                    src="/f82831ef19d8255eaba18ac1e682e04a.jpg"
                    alt="Décoration cabinets et établissements médicaux"
                    width={750}
                    height={500}
                    className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                  />
                </motion.div>
                <motion.div className="space-y-4 px-4 lg:px-0" variants={fadeInFromRightVariants}>
                  <h2 className="text-3xl font-bold text-[#282828]">Décoration cabinets et établissements médicaux</h2>
                  <p className="text-lg text-[#282828]/80">
                    Nous décorons vos cabinets médicaux et para-médicaux pour offrir à vos patients un cadre chaleureux
                    et apaisant.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>
          <motion.section
            className="py-16 bg-gray-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <div className="container mx-auto px-4 lg:px-16 max-w-6xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div className="space-y-4 px-4 lg:px-0 lg:order-last" variants={fadeInFromRightVariants}>
                  <h2 className="text-3xl font-bold text-[#282828]">Décoration loisirs, sports et bien-être</h2>
                  <p className="text-lg text-[#282828]/80">
                    Nous concevons des espaces décorés avec goût pour vos établissements de loisirs, sports et
                    bien-être, afin de séduire et fidéliser votre clientèle.
                  </p>
                </motion.div>
                <motion.div className="relative lg:order-first" variants={fadeInFromLeftVariants}>
                  <Image
                    src="/474A07541.webp"
                    alt="Décoration loisirs, sports et bien-être"
                    width={750}
                    height={500}
                    className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.section>
        </>
      )}
      {/* Call to Action */}
      <motion.section
        className="mt-12 md:mt-7 py-20 bg-gradient-to-r from-[#B18C45]/10 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <div className="container mx-auto mt-9 px-4 lg:px-16 max-w-6xl">
          {!isMobile ? ( // Apply animation only on PC
            <motion.div className="max-w-4xl mx-auto text-center space-y-8" variants={fadeInFromBottomVariants}>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#282828] leading-tight">
                📞 Prêt à transformer vos espaces professionnels ?
              </h2>
              <p className="text-lg text-[#282828]/80 leading-relaxed">
                Contactez 5P pour une étude personnalisée et un devis gratuit.
              </p>
              <div className="pt-6 flex justify-center">
                <Link href="/contact">
                  <AnimatedButton className="bg-[#B18C45] hover:bg-[#B18C45]/90 text-white px-12 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Demandez un devis
                  </AnimatedButton>
                </Link>
              </div>
            </motion.div>
          ) : (
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl lg:text-5xl font-bold text-[#282828] leading-tight">
                📞 Prêt à transformer vos espaces professionnels ?
              </h2>
              <p className="text-lg text-[#282828]/80 leading-relaxed">
                Contactez 5P pour une étude personnalisée et un devis gratuit.
              </p>
              <div className="pt-6 flex justify-center">
                <Link href="/contact">
                  <AnimatedButton className="bg-[#B18C45] hover:bg-[#B18C45]/90 text-white px-12 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Demandez un devis
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
