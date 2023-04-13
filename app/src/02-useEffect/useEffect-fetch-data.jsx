import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  // TODO 1: set up 'users, setUsers' state values

  /**
   * TODO 2: Set up asynchronous function getUsers()
   *
   * await fetch, pass in url, assign to variable res
   * await res.json(), assign to variable data
   * setUsers to data variable
   */

  /**
   * TODO 3: Set up useEffect with callback and dependency array.
   * MAKE SURE TO INCLUDE DEPENDENCY ARRAY!!!!!!!
   *
   * Invoke getUsers() in useEffect callback
   */

  return (
    // TODO 4: Set up HTML and iterate over users variable
    // Return list item for each user.
    <>
      <h2>useEffect - Fetch Data</h2>
    </>
  );
};

export default UseEffectFetchData;
