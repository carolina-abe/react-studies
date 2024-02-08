import { useEffect, useMemo } from "react"
import useOnlineStatus from "../../hooks/useOnlineStatus"

const UserInfo = ({ userInfo }) => {

  useEffect(() => {
    document.title = `${userInfo.name} - ${userInfo.jobTitle}`
  }, [userInfo])

  return(
    <div>
      <h1>Name: {userInfo.name}</h1>
      <h3>Job: {userInfo.jobTitle}</h3>
    </div>
  )
}

const fibonacci = (n) => {
  if( n <= 1 ){
    return n
  }

  return fibonacci(n - 1) + fibonacci(n - 2)
}

const FibonacciCalculator = ({number}) => {
  const result = useMemo(() => fibonacci(number), [number])
  
  return(
    <div>
      <p>Fibonacci of {number} is {result}</p>
    </div>
  )
}

const StatusOnline = () => {
  const isOnline = useOnlineStatus()

  return(
    <div>
      <p>You are {isOnline ? "ONLINE" : "OFFLINE"}</p>
    </div>
  )
}

export const Exercises = () => {
  const userData = {
    name: 'Jane Doe',
    jobTitle: 'Developer'
  }


  return (
    <div>
      <h2>Exercise 1</h2>
      <UserInfo userInfo={userData} />

      <h2>Exercise 2</h2>
      <FibonacciCalculator number={3} />

      <h2>Exercise 3</h2>
      <StatusOnline />
    </div>
  )
}