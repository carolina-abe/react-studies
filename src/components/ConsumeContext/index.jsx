import { useContext } from "react"
import { MyContext } from "../../contexts/MyContext"

export const ConsumeContext = () => {
   // extracted data from context
  const {message} = useContext(MyContext)

  return (
    <div>Context value is: {message}</div>
  )
}
