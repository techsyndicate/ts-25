'use client'

import { useEffect } from 'react'

interface LCPEntry extends PerformanceEntry {
  element?: Element
}

export default function ImagePerformanceMonitor() {
  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1] as LCPEntry
      
      // log lcp for images
      if (lastEntry.element?.tagName === 'IMG') {
        console.log('LCP Image:', lastEntry.startTime, 'ms')
      }
    })
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] })
    
    return () => observer.disconnect()
  }, [])

  return null
} 