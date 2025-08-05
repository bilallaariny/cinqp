"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, CheckCircle2, AlertCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedButton from "@/components/animated-button"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion" // For animations

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

export default function ContactPage() {
  const [submissionStatus, setSubmissionStatus] = useState<{
    success: boolean | null
    message: string
  }>({ success: null, message: "" })

  const [isMobile, setIsMobile] = useState(false) // Add isMobile state

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize() // Set initial value
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

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
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section - Contact */}
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
              <h1 className="text-4xl lg:text-6xl font-bold text-[#282828] leading-tight">Contactez-nous</h1>
              <p className="text-lg text-[#282828]/80 leading-relaxed">
                Besoin d'un conseil ou d'un devis personnalisé ? Notre équipe 5P vous accompagne dans tous vos projets
                de décoration, d'aménagement intérieur ou événementiel.
              </p>
            </motion.div>
          ) : (
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#282828] leading-tight">Contactez-nous</h1>
              <p className="text-lg text-[#282828]/80 leading-relaxed">
                Besoin d'un conseil ou d'un devis personnalisé ? Notre équipe 5P vous accompagne dans tous vos projects
                de décoration, d'aménagement interior ou événementiel.
              </p>
            </div>
          )}
        </div>
      </motion.section>
      {/* Contact Form and Info Section */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <div className="container mx-auto px-16 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {!isMobile ? ( // Apply animation only on PC
              <motion.div className="space-y-8" variants={fadeInFromLeftVariants}>
                <div className="bg-[#F8F5EF] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#B18C45] mb-4">Coordonnées</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-5 h-5 text-[#B18C45] mt-0.5" />
                      <div>
                        <p className="font-medium text-[#282828]">Téléphone</p>
                        <p className="text-[#282828]/80">+212 5XX XX XX XX</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="w-5 h-5 text-[#B18C45] mt-0.5" />
                      <div>
                        <p className="font-medium text-[#282828]">Email</p>
                        <p className="text-[#282828]/80">contact@5p.ma</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-5 h-5 text-[#B18C45] mt-0.5" />
                      <div>
                        <p className="font-medium text-[#282828]">Adresse</p>
                        <p className="text-[#282828]/80">Marrakech, Maroc</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#F8F5EF] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#B18C45] mb-4">Horaires d'ouverture</h3>
                  <div className="space-y-2">
                    <p className="text-[#282828]">
                      <span className="font-medium">Lun-Ven:</span> 9:00 - 18:00
                    </p>
                    <p className="text-[#282828]">
                      <span className="font-medium">Sam:</span> 10:00 - 16:00
                    </p>
                    <p className="text-[#282828]">
                      <span className="font-medium">Dim:</span> Fermé
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="space-y-8">
                <div className="bg-[#F8F5EF] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#B18C45] mb-4">Coordonnées</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-5 h-5 text-[#B18C45] mt-0.5" />
                      <div>
                        <p className="font-medium text-[#282828]">Téléphone</p>
                        <p className="text-[#282828]/80">+212 5XX XX XX XX</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="w-5 h-5 text-[#B18C45] mt-0.5" />
                      <div>
                        <p className="font-medium text-[#282828]">Email</p>
                        <p className="text-[#282828]/80">contact@5p.ma</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-5 h-5 text-[#B18C45] mt-0.5" />
                      <div>
                        <p className="font-medium text-[#282828]">Adresse</p>
                        <p className="text-[#282828]/80">Marrakech, Maroc</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#F8F5EF] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#B18C45] mb-4">Horaires d'ouverture</h3>
                  <div className="space-y-2">
                    <p className="text-[#282828]">
                      <span className="font-medium">Lun-Ven:</span> 9:00 - 18:00
                    </p>
                    <p className="text-[#282828]">
                      <span className="font-medium">Sam:</span> 10:00 - 16:00
                    </p>
                    <p className="text-[#282828]">
                      <span className="font-medium">Dim:</span> Fermé
                    </p>
                  </div>
                </div>
              </div>
            )}
            {!isMobile ? ( // Apply animation only on PC
              <motion.div variants={fadeInFromRightVariants}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-[#282828] mb-6">Envoyez-nous un message</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-[#282828] mb-2">
                            Nom*
                          </label>
                          <Input id="name" name="name" className="border-gray-300 focus:border-[#B18C45]" required />
                        </div>
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-[#282828] mb-2">
                            Prénom*
                          </label>
                          <Input
                            id="firstName"
                            name="firstName"
                            className="border-gray-300 focus:border-[#B18C45]"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#282828] mb-2">
                          Email*
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          className="border-gray-300 focus:border-[#B18C45]"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[#282828] mb-2">
                          Téléphone*
                        </label>
                        <Input id="phone" name="phone" className="border-gray-300 focus:border-[#B18C45]" required />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[#282828] mb-2">
                          Message*
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          className="border-gray-300 focus:border-[#B18C45] min-h-[120px]"
                          required
                        />
                      </div>
                      <AnimatedButton className="w-full bg-[#B18C45] hover:bg-[#B18C45]/90 text-white py-3">
                        Envoyer ma demande
                      </AnimatedButton>
                      {/* Animated status message */}
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
            ) : (
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#282828] mb-6">Envoyez-nous un message</h2>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#282828] mb-2">
                          Nom*
                        </label>
                        <Input id="name" name="name" className="border-gray-300 focus:border-[#B18C45]" required />
                      </div>
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-[#282828] mb-2">
                          Prénom*
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          className="border-gray-300 focus:border-[#B18C45]"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#282828] mb-2">
                        Email*
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        className="border-gray-300 focus:border-[#B18C45]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#282828] mb-2">
                        Téléphone*
                      </label>
                      <Input id="phone" name="phone" className="border-gray-300 focus:border-[#B18C45]" required />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#282828] mb-2">
                        Message*
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        className="border-gray-300 focus:border-[#B18C45] min-h-[120px]"
                        required
                      />
                    </div>
                    <AnimatedButton className="w-full bg-[#B18C45] hover:bg-[#B18C45]/90 text-white py-3">
                      Envoyer ma demande
                    </AnimatedButton>
                    {/* Animated status message */}
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
            )}
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  )
}
