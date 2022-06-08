import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadGreetings } from '../redux/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGreetings());
  }, []);
  const greeting = useSelector((state) => state.greetings);

  if (greeting.data) {
    return (
      <>
        <h1>{greeting.data.text}</h1>
        <button type="button" onClick={() => dispatch(loadGreetings())}>
          Next message
        </button>
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
