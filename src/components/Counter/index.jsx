import { useEffect, useState } from "react"

export const Counter = () => {
  // variables dont re-render component
  // [consult, change]
  const [count, setCount] = useState(0)

  // executes something, changes value everytime that re-render
  useEffect(() => {
    document.title = `You have clicked ${count} times`
  })

  return <div>
    <p>
      You have clicked {count} times
    </p>
    <button onClick={() => setCount( count + 1 )}>Increment</button>
    <button onClick={() => setCount( count - 1 )}>Decrement</button>
  </div>
}