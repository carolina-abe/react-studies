import { useReducer } from "react" 

// initial state defined
const initialState = {count: 0}

// defines how actions update state
function reducer(state, action) {
  switch(action.type){
    case "increments":
      return {count: state.count + 1}
    case "decrements":
      return {count: state.count - 1}
    case "reset":
      return {count: 0}
    default:
      throw new Error("Action is not supported")
  }
}

export const CounterWithReducer = () => {
  // used when have complex state
  // dispatch: executes function

  // initialize useReducer with initial state and changing function
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <p>Count: {state.count}</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={() => dispatch({type: "decrements"})}>-</button>
        <button onClick={() => dispatch({type: "increments"})}>+</button>
        <button onClick={() => dispatch({type: "reset"})}>Reset</button>
      </div>
    </div>
  )
}
