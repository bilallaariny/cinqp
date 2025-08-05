"use client"

import Link from "next/link"
import { useState } from "react"
import { MenuIcon } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import useMobile from "@/hooks/use-mobil" // Changed to default import
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { isMobile } = useMobile()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-2 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
       <Link href="/" className="flex items-center">
        <Image
          src="/10_LES_CINIQ_P_Export_noir_horiz.png"
          width={120}
          height={40}
          alt="5P Logo"
          className="h-9 w-28 "
        />
       
      </Link>


          {/* Desktop Navigation - hidden on mobile */}
          {!isMobile && (
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-[#282828] hover:text-[#B18C45] transition-colors">
                Accueil
              </Link>
              <Link href="/about" className="text-[#282828] hover:text-[#B18C45] transition-colors">
                À propos de nous
              </Link>
              <div className="relative group">
                <Link href="/amenagement" className="text-[#282828] hover:text-[#B18C45] transition-colors">
                  Aménagement
                </Link>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[150px]">
                  <Link
                    href="/amenagement/professionnel"
                    className="block px-4 py-2 text-sm text-[#282828] hover:text-[#B18C45]"
                  >
                    Professionnel
                  </Link>
                  <Link
                    href="/amenagement/particulier"
                    className="block px-4 py-2 text-sm text-[#282828] hover:text-[#B18C45]"
                  >
                    Particulier
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <Link href="/decoration" className="text-[#282828] hover:text-[#B18C45] transition-colors">
                  Décoration
                </Link>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[150px]">
                  <Link
                    href="/decoration/professionnel"
                    className="block px-4 py-2 text-sm text-[#282828] hover:text-[#B18C45]"
                  >
                    Professionnel
                  </Link>
                  <Link
                    href="/decoration/particulier"
                    className="block px-4 py-2 text-sm text-[#282828] hover:text-[#B18C45]"
                  >
                    Particulier
                  </Link>
                  <Link
                    href="/decoration/evenement"
                    className="block px-4 py-2 text-sm text-[#282828] hover:text-[#B18C45]"
                  >
                    Événements
                  </Link>
                </div>
              </div>
              <Link href="/services" className="text-[#282828] hover:text-[#B18C45] transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-[#282828] hover:text-[#B18C45] transition-colors">
                Contact
              </Link>
            </nav>
          )}

          {/* Mobile Navigation - hidden on desktop */}
          {isMobile && (
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open mobile menu">
                    <MenuIcon className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[250px] sm:w-[300px] p-4">
                  <nav className="flex flex-col space-y-4 pt-8">
                    <Link
                      href="/"
                      className="text-[#282828] hover:text-[#B18C45] transition-colors text-lg font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Accueil
                    </Link>
                    <Link
                      href="/about"
                      className="text-[#282828] hover:text-[#B18C45] transition-colors text-lg font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      À propos de nous
                    </Link>
                    <div className="flex flex-col space-y-2 pl-4">
                      <Link
                        href="/amenagement"
                        className="text-[#282828] hover:text-[#B18C45] transition-colors text-lg font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        Aménagement
                      </Link>
                      <Link
                        href="/amenagement/professionnel"
                        className="block px-4 py-2 text-sm text-[#282828] hover:text-[#B18C45]"
                        onClick={() => setIsOpen(false)}
                      >
                        Professionnel
                      </Link>
                      <Link
                        href="/amenagement/particulier"
                        className="block px-4 py-2 text-sm text-[#282828] hover:text-[#B18C45]"
                        onClick={() => setIsOpen(false)}
                      >
                        Particulier
                      </Link>
                    </div>
                    <div className="flex flex-col space-y-2 pl-4">
                      <Link
                        href="/decoration"
                        className="text-[#282828] hover:text-[#B18C45] transition-colors text-lg font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        Décoration
                      </Link>
                      <Link
                        href="/decoration/professionnel"
                        className="block px-4 py-2 text-sm text-[#282828] hover:text-[#B18C45]"
                        onClick={() => setIsOpen(false)}
                      >
                        Professionnel
                      </Link>
                      <Link
                        href="/decoration/particulier"
                        className="block px-4 py-2 text-sm text-[#282828] hover:text-[#B18C45]"
                        onClick={() => setIsOpen(false)}
                      >
                        Particulier
                      </Link>
                      <Link
                        href="/decoration/evenement"
                        className="block px-4 py-2 text-sm text-[#282828] hover:text-[#B18C45]"
                        onClick={() => setIsOpen(false)}
                      >
                        Événements
                      </Link>
                    </div>
                    <Link
                      href="/services"
                      className="text-[#282828] hover:text-[#B18C45] transition-colors text-lg font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Services
                    </Link>
                    <Link
                      href="/contact"
                      className="text-[#282828] hover:text-[#B18C45] transition-colors text-lg font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
