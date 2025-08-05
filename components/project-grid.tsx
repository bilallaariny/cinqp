import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProjectBlock {
  title: string
  description: string
  image: string
  heightClass: string // e.g., "h-[300px]", "h-[400px]", "h-[500px]"
}

interface ProjectGridProps {
  blocks: ProjectBlock[]
}

export function ProjectGrid({ blocks }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {blocks.map((block, index) => (
        <div key={index} className={cn("relative group overflow-hidden rounded-lg shadow-md", block.heightClass)}>
          <Image
            src={block.image || "/placeholder.svg"}
            alt={block.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-noir bg-opacity-70 flex flex-col items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-xl font-bold text-blanc mb-2">{block.title}</h3>
            <p className="text-sm text-blanc">{block.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
