export const LoginButton = ({ logged }) => {
  const handleClick = () => {
    if(logged){
      console.log("logout")
    } else {
      console.log("login")
    }
  }
  // when I need an argument to my func, I pass func like () => handleClick(num)
  // otherwise, I just pass the func
  
  return (
    <>
      {logged ? <button onClick={handleClick}>Logout</button> : <button onClick={handleClick}>Login</button>}
    </>
  )
}
