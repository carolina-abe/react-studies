import { useState } from "react"

export const Form = () => {
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    // validations, loading, send request to API, data manipulation
    e.preventDefault()
    console.log("Form sended", value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Fill the field"/>
      <button type="submit" onClick={() => {}}>Send</button>
    </form>
  )
}