import { data } from "../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id))
  
    console.log(id)
  }

  const clearPeople = () => {
    setPeople([])
  }

    return (
    <>
      <h2>useState array example</h2>;
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4 key={id}>{name}</h4>
            <button type="button" onClick={() => removePerson(id)} className="btn">Remove Me</button>
          </div>
      )})}
      <div>
        <button type="button" onClick={clearPeople} className="btn">Clear the List</button>
      </div>

    </>

  )};
  
  export default UseStateArray;
  