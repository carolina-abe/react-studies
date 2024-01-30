import React, { useCallback, useState } from 'react'

// React.memo != useMemo
// memo = memorizes components
// useMemo = memorizes values
const Button = React.memo(({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>
})

export const CountCallback = () => {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => {
    // increments when count is re-render, otherwise dont
    setCount((prev) => prev + 1 )
  }, [])

  return (
    <div>
      <p>Count:{count}</p>
      <Button onClick={increment}>Increment</Button>
    </div>
  )
}
