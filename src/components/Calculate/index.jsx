import { useMemo } from 'react'

const calculateFunc = (num) => {
  return num * 1000
}

export const Calculate = ({ number }) => {
  // when we dont want to recreate the func when component re-renders = useMemo
  const calcResult = useMemo(() => {
    return calculateFunc(number)
  }, [number])
  //its like we say that calcResult = 5000 (cause we pass 5 to props number)

  return (
    <div>Result is {calcResult}</div>
  )
}
