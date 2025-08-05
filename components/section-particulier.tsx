import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "./service-card"

const particularServices = [
  {
    title: "Aménagement cuisine et salle à manger",
    description:
      "De la sélection des matériaux à la disposition des équipements, nous créons une cuisine fonctionnelle qui correspond à vos goûts et à votre style de vie.",
    imageQuery: "modern kitchen and dining room interior design",
    rowSpan: "row-span-3", // Tallest
  },
  {
    title: "Placards, dressing et rangements",
    description:
      "Profitez de notre expertise pour aménager et organiser vos placards, dressings et espaces de rangement, afin de ne jamais manquer de place.",
    imageQuery: "custom closets and storage solutions for home",
    rowSpan: "row-span-1", // Shortest
  },
  {
    title: "Aménagement salle de bain",
    description:
      "Nous proposons des solutions pratiques et sur mesure pour votre salle de bain, quelle que soit sa taille, pour un espace fonctionnel et agréable.",
    imageQuery: "modern bathroom interior design",
    rowSpan: "row-span-2", // Medium
  },
  {
    title: "Salon et séjour",
    description:
      "Que ce soit pour vous détendre ou recevoir vos invités, nous aménageons votre salon pour qu’il soit confortable, élégant et adapté à votre mode de vie.",
    imageQuery: "comfortable and elegant living room design",
    rowSpan: "row-span-3", // Tallest
  },
  {
    title: "Cuisine accessible pour personnes à mobilité réduite",
    description:
      "Nous concevons des cuisines intelligentes, accessibles et faciles à utiliser, adaptées aux besoins des personnes à mobilité réduite.",
    imageQuery: "accessible kitchen design for people with reduced mobility",
    rowSpan: "row-span-1", // Shortest
  },
  {
    title: "Salon marocain",
    description:
      "Pièce traditionnelle par excellence, le salon marocain peut être aménagé dans un style moderne ou classique, selon vos préférences et votre budget.",
    imageQuery: "modern Moroccan living room interior design",
    rowSpan: "row-span-2", // Medium
  },
]

export function ParticularSection() {
  return (
    <section className="py-12 md:py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Aménagements et rénovations pour maison et appartement à Marrakech
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-lg text-muted-foreground">
          5P réalise tous vos aménagements d’intérieur pour votre appartement, villa ou maison à Marrakech. Nous vous
          proposons un agencement sur mesure de vos espaces privés pour plus de confort et de fonctionnalité au
          quotidien. Nos conceptions uniques optimisent votre espace tout en le rendant chaleureux, fonctionnel et
          esthétique.
        </p>

        {/* Adjusted auto-rows for finer control over heights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 auto-rows-[100px] md:auto-rows-[120px] lg:auto-rows-[150px] grid-flow-row-dense">
          {particularServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageQuery={service.imageQuery}
              rowSpan={service.rowSpan}
            />
          ))}
        </div>

          {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#B18C45]/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center space-x-2 text-[#B18C45] font-medium text-lg">
              <span>📞</span>
              <span>
                Prêt à donner vie à votre espace professionnel ? Contactez 5P pour un devis personnalisé et sans
                engagement.
              </span>
            </div>
            <div className="pt-6">
              <Button className="bg-[#B18C45] hover:bg-[#B18C45]/90 text-white px-12 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Demandez votre devis
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </section>
  )
}
