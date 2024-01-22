import { useEffect, useState } from "react"

export const Timer = () => {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1)
    }, 1000)

    // clear state
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>Timer: {seconds} seconds.</div>
  )
}
