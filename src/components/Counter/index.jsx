import { useState } from "react"

export const Counter = () => {
  // variables dont re-render component
  // [consult, change]
  const [count, setCount] = useState(0)

  return <div>
    <p>
      You have been clicked {count} times
    </p>
    <button onClick={() => setCount( count + 1 )}>Increment</button>
    <button onClick={() => setCount( count - 1 )}>Decrement</button>
  </div>
}