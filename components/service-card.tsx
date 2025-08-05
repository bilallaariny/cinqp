import Image from "next/image"

interface ServiceCardProps {
  title: string
  description: string
  imageQuery: string // Used for placeholder image generation
  rowSpan?: string // Tailwind class for row span, e.g., "row-span-2"
}

export function ServiceCard({ title, description, imageQuery, rowSpan = "row-span-1" }: ServiceCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg shadow-lg bg-card text-card-foreground cursor-pointer ${rowSpan}`}
    >
      <Image
        src={`/placeholder.svg?height=400&width=600&query=${encodeURIComponent(imageQuery)}`}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-200">{description}</p>
      </div>
    </div>
  )
}
