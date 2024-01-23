import { useContext } from "react"
import { MyContext } from "../../contexts/MyContext" 

export const ChangesValuesWithContext = () => {
  // extracted function from context
  const {message, setMessage } = useContext(MyContext) 

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setMessage("Message changed")}>Changes message</button>
    </div>
  )
}
