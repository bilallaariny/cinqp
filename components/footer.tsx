import { Facebook, Instagram, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#282828] text-white py-12">
          <div className="container mx-auto px-16 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
           <Link href="/" className="flex items-center">
        <Image
          src="/10_LES_CINIQ_P_Export_img_bg_white_4.png"
          width={120}
          height={40}
          alt="5P Logo"
          className="h-32 w-36"
        />
       
      </Link>
          </div>
          <div>
            <h3 className="font-bold mb-4">Menu</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#B18C45] transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#B18C45] transition-colors">
                  À propos de nous
                </Link>
              </li>
              <li>
                <Link href="/amenagement" className="hover:text-[#B18C45] transition-colors">
                  Aménagement
                </Link>
              </li>
              <li>
                <Link href="/decoration" className="hover:text-[#B18C45] transition-colors">
                  Décoration
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#B18C45] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#B18C45] transition-colors">
                  Contact
                </Link>
              </li>
             
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contactez-nous</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-[#B18C45]" />
                <span>contact@5p.ma</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-[#B18C45]" />
                <span>+212 5XX XX XX XX</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Réseaux sociaux</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-[#B18C45] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#B18C45]/80"
              >
                <Facebook className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-[#B18C45] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#B18C45]/80"
              >
                <Instagram className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 5P. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
