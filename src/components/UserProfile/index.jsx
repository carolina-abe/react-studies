import { useState, useEffect } from 'react'

export const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // fun to search data
    const searchUser = async() => {

      // async response
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      const userData = await response.json()

      setUser(userData)
    }

    if(userId){
      searchUser()
    }
  },[userId])

  return (
    <div>
      {user ? (
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <h2>User: {user.name}</h2>
          <p>E-mail: {user.email}</p>
          <p>ID: {user.id}</p>
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  )
}