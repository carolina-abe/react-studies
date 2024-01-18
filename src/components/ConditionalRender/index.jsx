import { Greetings } from "../Greetings"

export const ConditionalRender = ({ user }) => {
  return (
    <div>
      {user && <Greetings name={user}/>}
    </div>
  )
}
