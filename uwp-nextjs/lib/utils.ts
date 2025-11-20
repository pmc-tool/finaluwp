import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Utility for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Smooth scroll to section
export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerOffset = 80 // Height of sticky header
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}

// Share functionality
export async function shareContent(title: string, text: string, url: string) {
  if (navigator.share) {
    try {
      await navigator.share({
        title,
        text,
        url,
      })
    } catch (err) {
      console.log('Error sharing:', err)
    }
  } else {
    // Fallback for browsers that don't support Web Share API
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    window.open(shareUrl, '_blank', 'width=600,height=400')
  }
}
