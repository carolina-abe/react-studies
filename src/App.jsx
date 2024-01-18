import './App.css'
import { ConditionalRender } from './components/ConditionalRender'
import { Counter } from './components/Counter'
import { Form } from './components/Form'
import { Greetings } from './components/Greetings'
import { LoginButton } from './components/LoginButton'
import { UserForm } from './components/UserForm'
import { Welcome } from './components/Welcome'

function App() {
  return (
    <>
      <h1>Component</h1>
      <Welcome />
      <Greetings name='John Doe'/>
      <Counter />
      <UserForm />
      <Form />
      <ConditionalRender user='Jane Doe' />
      <LoginButton logged={false} />
    </>
  )
}

export default App
