import User from "./propdrill-challenge-user";

const Navlinks = ({user, logout}) => {
    return (
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <User user={user} logout={logout}/>
      </div>
    
  )};
  
  export default Navlinks;
  