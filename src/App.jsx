import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react'
import './App.css'

function App() {
  const {user , loginWithRedirect , isAuthenticated , logout} = useAuth0();
  console.log(user); 

  return (
    <>
    <div>
        {isAuthenticated && <h3>Hello {user.name}</h3> }
        {isAuthenticated ? (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </button>) : 
          (<button onClick={(e)=> loginWithRedirect()}>Authenticate Yourself </button>
        )}
      </div>
    </>
  )
}

export default App
