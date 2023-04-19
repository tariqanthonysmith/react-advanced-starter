import React, { useState } from "react";

const UserChallenge = () => {

  const [user, setUser] = useState(null)

  const login = () => {
    setUser({name: "Tariq"})
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <div>
      <h2>Ternary Operator : User Challenge</h2>
      {user ? (
        <div>
          <h4>Welcome {user.name}</h4>
          <button className="btn" onClick={logout}>
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <h4>Please login.</h4>
          <button className="btn" onClick={login}>
            Login
          </button>
        </div>
      )}
    </div>
  )
  
};

export default UserChallenge;
