import React from "react";

const MultipleInputs = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
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
