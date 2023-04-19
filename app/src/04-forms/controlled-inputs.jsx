import { useState } from "react";

const ControlledInputs = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSummit = (event) => {
    event.preventDefault()
    const details = {name, email}
    console.log(details)
  }

    return (
      <form className="form" onSubmit={handleSummit}>
        <h4>Controlled inputs</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input value={name} onChange={(event) => {setName(event.target.value)}} type="text" className="form-input" id="name" />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input value={email} onChange={(event) => {setEmail(event.target.value)}} type="email" className="form-input" id="email" />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    );
  };
  export default ControlledInputs;
  