import { useState } from "react";

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: "Peter",
    age: 33,
    hobby: "Plaiying chess"
  })

  const handleClick = () => {
    setPerson({
      ...person, name: "Michael"
    })
  }

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <h2>Enjoys {person.hobby}</h2>
      <button type="button" className="btn" onClick={handleClick}>Change Me</button>
    </>
    
  )
  
};

export default UseStateObject;
