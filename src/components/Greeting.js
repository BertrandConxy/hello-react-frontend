import React, { useState, useEffect } from 'react';

const Greeting = () => {
  const [store, setData] = useState([]);
  const fetchData = () => {
    fetch('https://chello-rerails-api.herokuapp.com/api/v1/greetings')
      .then((res) => res.json())
      .then((store) => setData(store.data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (store) {
    return (
      <>
        <h1>{store.text}</h1>
        <button onClick={() => fetchData()} type="button">Next</button>
      </>
    );
  }
  return (
    <>
      <h1>Loading.....</h1>
    </>
  );
};

export default Greeting;
