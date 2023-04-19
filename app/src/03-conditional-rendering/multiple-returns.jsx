import React, { useState, useEffect } from "react";

const MultipleReturns = () => {

  const [isLodaing, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  if (isLodaing) {
    return (
      <h2>Houston, we might have a problem.</h2>
    )
  } else {
    return (
      <h2>We have lift off!</h2>
    )
  }

  return <h2>Multiple Returns</h2>;
};

export default MultipleReturns;
