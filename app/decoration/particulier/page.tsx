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

export default function DecorationParticulierPage() {
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
  const contentSections = [
    {
      title: "Décoration salon et salle à manger",
      description:
        "Profitez de nos idées innovantes et élégantes pour décorer votre salon et salle à manger. Des moments agréables en famille, dans un espace à la fois confortable et stylé.",
      image: "/presentation-article-table-a-manger-1.webp",
      imageAlt: "Décoration salon et salle à manger",
      bgColor: "bg-white",
    },
    {
      title: "Décoration cuisine",
      description:
        "Donnez du style et du plaisir à votre cuisine avec une décoration personnalisée, pensée selon vos goûts et votre budget.",
      image: "/istockphoto-1456242777-612x612.jpg",
      imageAlt: "Décoration cuisine",
      bgColor: "bg-gray-50",
    },
    {
      title: "Décoration chambre",
      description:
        "Sublimez vos chambres pour commencer chaque journée dans un environnement calme, élégant et à votre image.",
      image: "/image.webp",
      imageAlt: "Décoration chambre",
      bgColor: "bg-white",
    },
    {
      title: "Décoration salle de bain",
      description:
        "La salle de bain est un espace intime où le design contribue au bien-être. Nous vous proposons des décorations cosy, modernes et fonctionnelles.",
      image: "/1200x680_sdb_apres_-_la_deco_by_seb_et_nico.jpg",
      imageAlt: "Décoration salle de bain",
      bgColor: "bg-gray-50",
    },
    {
      title: "Décoration terrasse",
      description:
        "Transformez votre terrasse en un espace de détente chaleureux et accueillant, idéal pour profiter des beaux jours.",
      image: "/9ae18bda155bd94afed2d012b1806412.jpg",
      imageAlt: "Décoration terrasse",
      bgColor: "bg-white",
    },
    {
      title: "Décoration habitat",
      description:
        "Parce que votre maison est précieuse, nous vous offrons des solutions de décoration personnalisées pour lui donner charme et caractère.",
      image: "/maison-deco-naturelle-1-1138x547.jpg",
      imageAlt: "Décoration habitat",
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
                  src="/0a25e2a4fe960792dc6046353c3a653c.jpg"
                  alt="Décoration d'appartement, maison ou villa pour les particuliers à Marrakech"
                  width={1000}
                  height={750}
                  className="rounded-lg shadow-2xl w-full h-[500px] lg:h-[600px] object-cover"
                />
              </motion.div>
            ) : (
              <div className="relative">
                <Image
                  src="/0a25e2a4fe960792dc6046353c3a653c.jpg"
                  alt="Décoration d'appartement, maison ou villa pour les particuliers à Marrakech"
                  width={1000}
                  height={750}
                  className="rounded-lg shadow-2xl w-full h-[500px] lg:h-[600px] object-cover"
                />
              </div>
            )}
            {!isMobile ? ( // Apply animation only on PC
              <motion.div className="space-y-6 px-4 lg:px-0" variants={fadeInFromRightVariants}>
                <h1 className="text-4xl lg:text-6xl font-bold text-[#282828] leading-tight">
                  Décoration d'appartement, maison ou villa pour les particuliers à Marrakech
                </h1>
                <p className="text-lg text-[#282828]/80 leading-relaxed">
                  Chez 5P, nous vous aidons à sublimer votre intérieur, qu'il s'agisse d'une pièce unique ou de la
                  totalité de votre appartement, maison ou villa à Marrakech. Notre service de décoration sur mesure
                  vous permet d'exprimer votre style, votre raffinement et de créer un cadre dans lequel vous aimerez
                  vivre. Faites-nous confiance pour transformer votre espace et en faire un lieu où vous ne vous
                  lasserez jamais de rester.
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
                  Décoration d'appartement, maison ou villa pour les particuliers à Marrakech
                </h1>
                <p className="text-lg text-[#282828]/80 leading-relaxed">
                  Chez 5P, nous vous aidons à sublimer votre intérieur, qu'il s'agisse d'une pièce unique ou de la
                  totalité de votre appartement, maison ou villa à Marrakech. Notre service de décoration sur mesure
                  vous permet d'exprimer votre style, votre raffinement et de créer un cadre dans lequel vous aimerez
                  vivre. Faites-nous confiance pour transformer votre espace et en faire un lieu où vous ne vous
                  lasserez jamais de rester.
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
      {/* Content Sections - Mobile Slider */}
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
            {contentSections.map((section, index) => (
              <SwiperSlide key={index} style={{ height: "100%" }}>
                {/* No motion.div for mobile Swiper slides */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                  {/* Image (fixed height) */}
                  <div className="relative h-64 flex-shrink-0">
                    <Image
                      src={section.image || "/placeholder.svg"}
                      alt={section.imageAlt}
                      fill
                      className="object-cover"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  {/* Text content (fixed height + scrollable) */}
                  <div className="p-6 flex-1 overflow-y-auto" style={{ maxHeight: "calc(100% - 256px)" }}>
                    <h3 className="text-xl font-bold text-[#282828] mb-3">{section.title}</h3>
                    <p className="text-sm text-[#282828]/80">{section.description}</p>
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
                    src="/presentation-article-table-a-manger-1.webp"
                    alt="Décoration salon et salle à manger"
                    width={900}
                    height={600}
                    className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                  />
                </motion.div>
                <motion.div className="space-y-4 px-4 lg:px-0" variants={fadeInFromRightVariants}>
                  <h2 className="text-3xl font-bold text-[#282828]">Décoration salon et salle à manger</h2>
                  <p className="text-lg text-[#282828]/80">
                    Profitez de nos idées innovantes et élégantes pour décorer votre salon et salle à manger. Des
                    moments agréables en famille, dans un espace à la fois confortable et stylé.
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
                  <h2 className="text-3xl font-bold text-[#282828]">Décoration cuisine</h2>
                  <p className="text-lg text-[#282828]/80">
                    Donnez du style et du plaisir à votre cuisine avec une décoration personnalisée, pensée selon vos
                    goûts et votre budget.
                  </p>
                </motion.div>
                <motion.div className="relative lg:order-first" variants={fadeInFromLeftVariants}>
                  <Image
                    src="/istockphoto-1456242777-612x612.jpg"
                    alt="Décoration cuisine"
                    width={900}
                    height={600}
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
                    src="/image.webp"
                    alt="Décoration chambre"
                    width={900}
                    height={600}
                    className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                  />
                </motion.div>
                <motion.div className="space-y-4 px-4 lg:px-0" variants={fadeInFromRightVariants}>
                  <h2 className="text-3xl font-bold text-[#282828]">Décoration chambre</h2>
                  <p className="text-lg text-[#282828]/80">
                    Sublimez vos chambres pour commencer chaque journée dans un environnement calme, élégant et à votre
                    image.
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
                  <h2 className="text-3xl font-bold text-[#282828]">Décoration salle de bain</h2>
                  <p className="text-lg text-[#282828]/80">
                    La salle de bain est un espace intime où le design contribue au bien-être. Nous vous proposons des
                    décorations cosy, modernes et fonctionnelles.
                  </p>
                </motion.div>
                <motion.div className="relative lg:order-first" variants={fadeInFromLeftVariants}>
                  <Image
                    src="/1200x680_sdb_apres_-_la_deco_by_seb_et_nico.jpg"
                    alt="Décoration salle de bain"
                    width={900}
                    height={600}
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
                    src="/9ae18bda155bd94afed2d012b1806412.jpg"
                    alt="Décoration terrasse"
                    width={900}
                    height={600}
                    className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                  />
                </motion.div>
                <motion.div className="space-y-4 px-4 lg:px-0" variants={fadeInFromRightVariants}>
                  <h2 className="text-3xl font-bold text-[#282828]">Décoration terrasse</h2>
                  <p className="text-lg text-[#282828]/80">
                    Transformez votre terrasse en un espace de détente chaleureux et accueillant, idéal pour profiter
                    des beaux jours.
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
                  <h2 className="text-3xl font-bold text-[#282828]">Décoration habitat</h2>
                  <p className="text-lg text-[#282828]/80">
                    Parce que votre maison est précieuse, nous vous offrons des solutions de décoration personnalisées
                    pour lui donner charme et caractère.
                  </p>
                </motion.div>
                <motion.div className="relative lg:order-first" variants={fadeInFromLeftVariants}>
                  <Image
                    src="/maison-deco-naturelle-1-1138x547.jpg"
                    alt="Décoration habitat"
                    width={900}
                    height={600}
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
        className="py-20 bg-gradient-to-r from-[#B18C45]/10 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <div className="container mx-auto px-4 lg:px-16 max-w-6xl">
          {!isMobile ? ( // Apply animation only on PC
            <motion.div className="max-w-4xl mx-auto text-center space-y-8" variants={fadeInFromBottomVariants}>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#282828] leading-tight">
                📞 Envie d'un intérieur qui vous ressemble ?
              </h2>
              <p className="text-lg text-[#282828]/80 leading-relaxed">
                Contactez 5P pour une étude personnalisée et un devis gratuit.
              </p>
              <div className="pt-6">
                <div className="pt-6 flex justify-center">
                  <Link href="/contact">
                    <AnimatedButton className="bg-[#B18C45] hover:bg-[#B18C45]/90 text-white px-12 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      Contactez-nous
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl lg:text-5xl font-bold text-[#282828] leading-tight">
                📞 Envie d'un intérieur qui vous ressemble ?
              </h2>
              <p className="text-lg text-[#282828]/80 leading-relaxed">
                Contactez 5P pour une étude personnalisée et un devis gratuit.
              </p>
              <div className="pt-6">
                <div className="pt-6 flex justify-center">
                  <Link href="/contact">
                    <AnimatedButton className="bg-[#B18C45] hover:bg-[#B18C45]/90 text-white px-12 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      Contactez-nous
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.section>
      <Footer />
    </div>
  )
}
