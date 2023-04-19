import React, { useState } from "react";

const ShortCircuitExample = () => {
  // Falsy
  const [text, setText] = useState("Truth");

  // Truthy
  const [name, setName] = useState("Michael");

  const [user, setUser] = useState({ name: "John" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>Short Circuit Example</h2>
      <h3>{text || "Some default value"}</h3>
      {user && <SomeComponent name={user.name}/>}
      <h3 style={{ margin: "2rem 0", textDecoration: "underline"}}>
        Ternanry Operators
      </h3>
      <button className="btn">{isEditing ? "Edit" : "Add"}</button>
      {user ? (
        <div>
          <h3>Hello there {user.name}</h3>
        </div>
        ) : (
        <div>
          <h3>Please login.</h3>
        </div>
      )}
    </div>
  );
};

const SomeComponent = ({name}) => {
  
  return (
    <div>
      <h3>Some Return</h3>
      <h3>{name}</h3>
    </div>
  )
}

export default ShortCircuitExample;
