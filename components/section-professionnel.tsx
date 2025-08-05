import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "./service-card"

const professionalServices = [
  {
    title: "Aménagement de pharmacie et officines",
    description:
      "L’agencement de votre pharmacie joue un rôle clé dans sa réussite. Nous aménageons votre officine selon les normes et pour une organisation optimale.",
    imageQuery: "modern pharmacy interior design",
    rowSpan: "row-span-3", // Tallest
  },
  {
    title: "Parquet design et unique",
    description:
      "Vous cherchez un parquet à Marrakech qui allie design et qualité ? 5P vous propose une sélection variée et tendance adaptée à tous vos espaces.",
    imageQuery: "unique wooden parquet flooring design",
    rowSpan: "row-span-1", // Shortest
  },
  {
    title: "Aménagement et agencement de magasin",
    description:
      "Optimisez la présentation de votre magasin pour attirer les clients et valoriser vos produits, en rendant l’espace accueillant et bien organisé.",
    imageQuery: "retail store interior layout design",
    rowSpan: "row-span-2", // Medium
  },
  {
    title: "Banques d’accueil et comptoirs",
    description:
      "L’accueil est le premier contact avec vos clients. Nous concevons des banques d’accueil professionnelles qui reflètent votre sérieux dès l’entrée.",
    imageQuery: "professional reception desk and counter design",
    rowSpan: "row-span-3", // Tallest
  },
  {
    title: "Aménagement de bureaux opérateurs",
    description:
      "Un espace de travail agréable améliore la motivation de vos collaborateurs. Nous créons des bureaux fonctionnels et confortables pour booster leur productivité.",
    imageQuery: "modern operator office interior design",
    rowSpan: "row-span-1", // Shortest
  },
  {
    title: "Bureau de direction design",
    description:
      "Un bureau de direction élégant et bien pensé vous aide à prendre les bonnes décisions avec confiance et clarté.",
    imageQuery: "executive office interior design",
    rowSpan: "row-span-2", // Medium
  },
  {
    title: "Espaces de réunion",
    description:
      "Des salles de réunion bien aménagées facilitent les échanges et la créativité au sein de votre équipe.",
    imageQuery: "modern meeting room interior design",
    rowSpan: "row-span-3", // Tallest
  },
  {
    title: "Salles d’attente confortables",
    description:
      "Offrez à vos clients une salle d’attente chaleureuse et apaisante, pour une expérience positive dès leur arrivée.",
    imageQuery: "comfortable and welcoming waiting room design",
    rowSpan: "row-span-1", // Shortest
  },
  {
    title: "Espace restauration pour professionnels",
    description:
      "Un coin repas convivial permet à vos collaborateurs de se détendre, échanger et recharger leurs batteries pendant la pause.",
    imageQuery: "professional break room or cafeteria design",
    rowSpan: "row-span-2", // Medium
  },
]

export function ProfessionalSection() {
  return (
    <section className="py-12 md:py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Quel est votre projet d’aménagement professionnel ?
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-lg text-muted-foreground">
          5P est spécialiste de l’aménagement des espaces professionnels à Marrakech. Nous proposons des services
          d’agencement sur mesure de vos bureaux, commerces et espaces professionnels, adaptés à vos besoins
          spécifiques. Notre objectif est de vous livrer des espaces ergonomiques, fonctionnels et esthétiques, qui
          favorisent la productivité et l’image de votre entreprise.
        </p>

        {/* Adjusted auto-rows for finer control over heights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 auto-rows-[100px] md:auto-rows-[120px] lg:auto-rows-[150px] grid-flow-row-dense">
          {professionalServices.map((service, index) => (
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
