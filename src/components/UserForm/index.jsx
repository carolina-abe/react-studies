import { useState } from "react"

export const UserForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault() // previne comportamentos padrão do navegador sem js
    // access the API via fetch or axios

    console.log(name, email)
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Type your name"/>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Type your e-mail"/>
      <button type="submit">Send</button>
    </form>
  )
}