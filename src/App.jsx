import './App.css'
import { ConditionalRender } from './components/ConditionalRender'
import { Counter } from './components/Counter'
import { Form } from './components/Form'
import { Greetings } from './components/Greetings'
import { LoginButton } from './components/LoginButton'
import { UserForm } from './components/UserForm'
import { Welcome } from './components/Welcome'
import { Warning } from './components/Warning'
import { NumberList } from './components/NumberList'
import { StyledButton } from './components/StyledButton'
import { TaskList } from './components/TaskList'
import { Timer } from './components/Timer'
import { MyContextProvider } from './contexts/MyContext'
import { ConsumeContext } from './components/ConsumeContext'
import { ChangesValuesWithContext } from './components/ChangesValuesWithContext'

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
      <Warning  warning={null} />
      <NumberList numbers={[1, 2, 3, 4, 5]} />
      <StyledButton />
      <TaskList tasks={[{id: 1, text: 'Task 1'}, {id: 2, text: 'Task 2'}, {id: 3, text: 'Task 3'}]} />
      <Timer />
      {/* pass the provider to component to access the props*/}
      <MyContextProvider>
        <ConsumeContext />
        <ChangesValuesWithContext />
      </MyContextProvider>
    </>
  )
}

export default App
