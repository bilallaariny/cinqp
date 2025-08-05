"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Home } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
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

export default function AmenagementPage() {
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
                Un Aménagement Unique pour Chaque Besoin
              </h1>
              <p className="text-lg text-[#282828]/80 leading-relaxed">
                Transformez chaque espace en une source de bien-être et d'inspiration. Chez 5P, nous pensons que chaque
                lieu mérite une attention unique. Que vous soyez un particulier ou un professionnel, nous vous aidons à
                concevoir un environnement harmonieux, fonctionnel et adapté à vos besoins.
              </p>
            </motion.div>
            <motion.div className="relative" variants={fadeInFromRightVariants}>
              <Image
                src="/amenagement-interieur-conseils-et-solutions-00.jpg"
                alt="Aménagement intérieur moderne"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Two Services Blocks */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <div className="container mx-auto px-16 max-w-6xl">
          <motion.div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto" variants={containerVariants}>
            {/* Particuliers Block */}
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/3d1-bureau.jpg"
                    alt="Aménagement pour particuliers"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-[#B18C45] rounded-full flex items-center justify-center">
                      <Home className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#282828]">Aménagement pour les Particuliers</h3>
                  <p className="text-lg text-[#282828]/80 leading-relaxed">
                    Créez un cocon qui vous ressemble : chaleureux, moderne et optimisé selon votre style de vie.
                  </p>
                  <Link href="/amenagement/particulier">
                    <AnimatedButton className="bg-[#B18C45] hover:bg-[#B18C45]/90 text-white group/btn mt-4">
                      Découvrir nos services particuliers
                    </AnimatedButton>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
            {/* Professionnels Block */}
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/amenagement-de-bureau-professionnel-moderne.jpg"
                    alt="Aménagement pour professionnels"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-[#B18C45] rounded-full flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#282828]">Aménagement pour les Professionnels</h3>
                  <p className="text-lg text-[#282828]/80 leading-relaxed">
                    Valorisez votre espace de travail ou votre commerce pour stimuler la productivité et séduire vos
                    clients.
                  </p>
                  <Link href="/amenagement/professionnel">
                    <AnimatedButton className="bg-[#B18C45] hover:bg-[#B18C45]/90 text-white group/btn mt-4">
                      Demandez un devis
                    </AnimatedButton>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </div>
  )
}
