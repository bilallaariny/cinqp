"use client"
import { useEffect } from "react"

import { useState } from "react"

import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
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

export default function DecorationPage() {
  const [isMobile, setIsMobile] = useState(false) // Add isMobile state

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize() // Set initial value
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section - Agence de décoration d’intérieur à Marrakech */}
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
                  src="/97864fc1c7bf46324c38956cf4dac074.jpg"
                  alt="Agence de décoration d’intérieur"
                  width={1000}
                  height={750}
                  className="rounded-lg shadow-2xl w-full h-[700px] lg:h-[600px] object-cover"
                />
              </motion.div>
            ) : (
              <div className="relative">
                <Image
                  src="/97864fc1c7bf46324c38956cf4dac074.jpg"
                  alt="Agence de décoration d’intérieur"
                  width={1000}
                  height={750}
                  className="rounded-lg shadow-2xl w-full h-[700px] lg:h-[600px] object-cover"
                />
              </div>
            )}
            {!isMobile ? ( // Apply animation only on PC
              <motion.div className="space-y-6" variants={fadeInFromRightVariants}>
                <h1 className="text-4xl lg:text-6xl font-bold text-[#282828] leading-tight">
                  Agence de décoration d’intérieur à Marrakech
                </h1>
                <p className="text-lg text-[#282828]/80 leading-relaxed">
                  Vous venez de finir les travaux de votre maison, appartement ou bureau, et vous ne savez pas comment
                  décorer vos espaces ? Vous cherchez à créer un intérieur qui vous ressemble, fonctionnel et agréable ?
                  Chez 5P, on comprend que la décoration, ce n’est pas juste choisir des couleurs ou des meubles. C’est
                  surtout penser à votre mode de vie, à vos besoins, et faire en sorte que chaque pièce soit pratique,
                  harmonieuse et accueillante.
                </p>
                <p className="text-lg text-[#282828]/80 leading-relaxed">
                  Que vous soyez particulier ou professionnel, on est là pour vous accompagner. On commence par écouter
                  ce que vous voulez vraiment, puis on imagine ensemble des solutions adaptées à votre espace et à votre
                  budget. On utilise des outils modernes comme la conception 2D et 3D pour vous montrer à quoi
                  ressemblera votre futur intérieur avant même de commencer. Et bien sûr, on vous suit tout au long du
                  projet, pour que tout se passe comme vous l’avez imaginé.
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
                  Agence de décoration d’intérieur à Marrakech
                </h1>
                <p className="text-lg text-[#282828]/80 leading-relaxed">
                  Vous venez de finir les travaux de votre maison, appartement ou bureau, et vous ne savez pas comment
                  décorer vos espaces ? Vous cherchez à créer un intérieur qui vous ressemble, fonctionnel et agréable ?
                  Chez 5P, on comprend que la décoration, ce n’est pas juste choisir des couleurs ou des meubles. C’est
                  surtout penser à votre mode de vie, à vos besoins, et faire en sorte que chaque pièce soit pratique,
                  harmonieuse et accueillante.
                </p>
                <p className="text-lg text-[#282828]/80 leading-relaxed">
                  Que vous soyez particulier ou professionnel, on est là pour vous accompagner. On commence par écouter
                  ce que vous voulez vraiment, puis on imagine ensemble des solutions adaptées à votre espace et à votre
                  budget. On utilise des outils modernes comme la conception 2D et 3D pour vous montrer à quoi
                  ressemblera votre futur intérieur avant même de commencer. Et bien sûr, on vous suit tout au long du
                  projet, pour que tout se passe comme vous l’avez imaginé.
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
      {/* Overview of Decoration Services */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <div className="container mx-auto px-16 max-w-4xl">
          {!isMobile ? ( // Apply animation only on PC
            <motion.div className="text-center mb-12" variants={fadeInFromTopVariants}>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#282828] mb-4">Nos Services de Décoration</h2>
              <p className="text-lg text-[#282828]/70 max-w-3xl mx-auto">
                Découvrez nos différentes expertises en décoration pour transformer tous vos espaces.
              </p>
            </motion.div>
          ) : (
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#282828] mb-4">Nos Services de Décoration</h2>
              <p className="text-lg text-[#282828]/70 max-w-3xl mx-auto">
                Découvrez nos différentes expertises en décoration pour transformer tous vos espaces.
              </p>
            </div>
          )}
          {!isMobile ? ( // Apply animation only on PC
            <motion.div className="grid md:grid-cols-3 gap-8" variants={containerVariants}>
              <motion.div variants={itemVariants}>
                <Link href="/decoration/professionnel" className="group block">
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src="/398e8f117b1735883623a8431498a13c.jpg"
                      alt="Décoration Professionnelle"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white font-semibold text-lg">Voir les détails</p>
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-[#282828] text-center">Décoration Professionnelle</h3>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/decoration/particulier" className="group block">
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src="/0a25e2a4fe960792dc6046353c3a653c.jpg"
                      alt="Décoration Particulier"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white font-semibold text-lg">Voir les détails</p>
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-[#282828] text-center">Décoration Particulier</h3>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/decoration/evenement" className="group block">
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src="/1b961339b8b62a6db978e8d8b611336e.jpg"
                      alt="Décoration d’événements"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white font-semibold text-lg">Voir les détails</p>
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-[#282828] text-center">Décoration d’événements</h3>
                </Link>
              </motion.div>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/decoration/professionnel" className="group block">
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/398e8f117b1735883623a8431498a13c.jpg"
                    alt="Décoration Professionnelle"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white font-semibold text-lg">Voir les détails</p>
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#282828] text-center">Décoration Professionnelle</h3>
              </Link>
              <Link href="/decoration/particulier" className="group block">
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/0a25e2a4fe960792dc6046353c3a653c.jpg"
                    alt="Décoration Particulier"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white font-semibold text-lg">Voir les détails</p>
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#282828] text-center">Décoration Particulier</h3>
              </Link>
              <Link href="/decoration/evenement" className="group block">
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/1b961339b8b62a6db978e8d8b611336e.jpg"
                    alt="Décoration d’événements"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white font-semibold text-lg">Voir les détails</p>
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#282828] text-center">Décoration d’événements</h3>
              </Link>
            </div>
          )}
        </div>
      </motion.section>
      <Footer />
    </div>
  )
}
