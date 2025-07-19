"use client"

import { useEffect, useRef, useState } from "react"

export default function FadeInOnScroll({ children, variant = "up", threshold = 0.1 }) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, hasAnimated])

  const getAnimationClasses = () => {
    if (!isVisible) {
      switch (variant) {
        case "up":
          return "opacity-0 translate-y-8"
        case "down":
          return "opacity-0 -translate-y-8"
        case "left":
          return "opacity-0 -translate-x-8"
        case "right":
          return "opacity-0 translate-x-8"
        case "fade":
          return "opacity-0"
        default:
          return "opacity-0 translate-y-8"
      }
    }
    return "opacity-100 translate-y-0 translate-x-0"
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getAnimationClasses()}`}
    >
      {children}
    </div>
  )
} 