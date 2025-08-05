"use client"

import { useEffect, useState } from "react"
import { CheckCircle, XCircle, X } from "lucide-react"

interface NotificationProps {
  type: "success" | "error"
  message: string
  isVisible: boolean
  onClose: () => void
}

export default function Notification({ type, message, isVisible, onClose }: NotificationProps) {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true)
      const timer = setTimeout(() => {
        onClose()
      }, 3000)

      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setShouldRender(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!shouldRender) return null

  return (
    <div
      className={`fixed top-4 right-4 z-50 transform transition-all duration-300 ease-in-out ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div
        className={`flex items-center p-4 rounded-lg shadow-lg max-w-sm ${
          type === "success" ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
        }`}
      >
        <div className="flex-shrink-0">
          {type === "success" ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <XCircle className="w-5 h-5 text-red-500" />
          )}
        </div>
        <div className="ml-3 flex-1">
          <p className={`text-sm font-medium ${type === "success" ? "text-green-800" : "text-red-800"}`}>{message}</p>
        </div>
        <button
          onClick={onClose}
          className={`ml-4 inline-flex text-sm ${
            type === "success" ? "text-green-400 hover:text-green-600" : "text-red-400 hover:text-red-600"
          }`}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
