"use client"

import { useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface Service {
  src: string
  alt: string
  title: string
  description: string
  buttonText: string
  titleSize: string
  descriptionSize: string
  buttonSize: "sm" | "lg" | undefined
}

interface ServicesCarouselProps {
  services: Service[]
}

export default function ServicesCarousel({ services }: ServicesCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {services.map((service, index) => (
            <div className="embla__slide flex-[0_0_100%] min-w-0 px-4" key={index}>
              <div className="relative group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg h-[450px]">
                  {" "}
                  {/* Consistent height for carousel */}
                  <Image
                    src={service.src || "/placeholder.svg"}
                    alt={service.alt}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className={`${service.titleSize} font-bold text-white mb-4 uppercase`}>{service.title}</h3>
                    <p className={`${service.descriptionSize} leading-relaxed mb-6`}>{service.description}</p>
                    <Button size={service.buttonSize} className="bg-[#B18C45] hover:bg-[#B18C45]/90 text-white">
                      {service.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-[#B18C45] rounded-full p-2 shadow-md"
        onClick={scrollPrev}
        size="icon"
      >
        <ArrowLeft className="w-6 h-6" />
      </Button>
      <Button
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-[#B18C45] rounded-full p-2 shadow-md"
        onClick={scrollNext}
        size="icon"
      >
        <ArrowRight className="w-6 h-6" />
      </Button>
    </div>
  )
}
