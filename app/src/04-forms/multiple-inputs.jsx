import React, { useState } from "react";

const MultipleInputs = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    street_address1: "",
    street_address2: "",
    city: "",
    country: "",
    postcode: ""
  })

  const handleChange = (event) => {
    setFormData({
      ...formData, [event.target.name]:event.target.value
    })
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            onChange={handleChange}
            name="name"
            value={formData.name}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
        </div>
        <div className="form-row">
          <label htmlFor="street-address1" className="form-label">
            Street Address 1
          </label>
          <input
            type="text"
            className="form-input"
            id="street-address-1"
            onChange={handleChange}
            name="street_address1"
            value={formData.street_address1}
          />
        </div>
        <div className="form-row">
          <label htmlFor="street-address2" className="form-label">
            Street Address 2
          </label>
          <input
            type="text"
            className="form-input"
            id="street-address-2"
            onChange={handleChange}
            name="street_address2"
            value={formData.street_address2}
          />
        </div>
        <div className="form-row">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-input"
            id="city"
            onChange={handleChange}
            name="city"
            value={formData.city}
          />
        </div>
        <div className="form-row">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <input
            type="text"
            className="form-input"
            id="country"
            onChange={handleChange}
            name="country"
            value={formData.country}
          />
        </div>
        <div className="form-row">
          <label htmlFor="postcode" className="form-label">
          Postcode
          </label>
          <input
            type="text"
            className="form-input"
            id="postcode"
            onChange={handleChange}
            name="postcode"
            value={formData.postcode}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};

export default MultipleInputs;
