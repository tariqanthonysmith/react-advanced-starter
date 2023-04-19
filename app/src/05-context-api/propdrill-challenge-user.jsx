import { NavbarContext } from "./propdrill-challenge-navbar";
import { useContext } from "react";

const User = () => {

  const {user, logout} = useContext(NavbarContext)
  
    return (
      <div className="user-container">
        {user ? (
          <>
            <p>Hello there {user.name}</p>
            <button className="btn" onClick={logout}>
              Log out
            </button>
          </>
        ) : (
          <p>Please login</p>
        )}
      </div>
  )};
  
  export default User;
  