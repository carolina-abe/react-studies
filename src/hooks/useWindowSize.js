import { useState, useEffect } from 'react'

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  // observe changes
  useEffect(() => {
    // func that changes values
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    // event that trigger the func
    window.addEventListener('resize', handleResize)
    // runs to get initial value
    handleResize()

    // clean memory
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}