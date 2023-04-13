import React, { useState } from "react";

const ShortCircuitExample = () => {
  // Falsy
  const [text, setText] = useState("");

  // Truthy
  const [name, setName] = useState("Michael");

  const [user, setUser] = useState({ name: "John" });
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div>
      <h2>Short Circuit Example</h2>
    </div>
  );
};

export default ShortCircuitExample;
