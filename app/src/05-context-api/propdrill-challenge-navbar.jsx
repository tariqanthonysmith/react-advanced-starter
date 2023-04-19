import { useState, createContext } from "react";
import Navlinks from "./propdrill-challenge-navlinks";

export const NavbarContext = createContext()

const Navbar = () => {

  const [user, setUser] = useState({name: "Tariq Smith"})

  const logout = () => {
    setUser(null)
  }

  const contextValues = {user, logout}

  return (
    <NavbarContext.Provider value={contextValues}>
      <div className="navbar">
        <h5>Context API</h5>
        <Navlinks user={user} logout={logout}/>
     </div>
    </NavbarContext.Provider>
    
  );
};

export default Navbar;
