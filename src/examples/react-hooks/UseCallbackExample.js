import React, { useState } from "react";

const UseCallbackExample = () => {
  const [number, setNumber] = useState(0);
  const [anotherNumber, setAnotherNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
  };

  // const onIncrease = React.useCallback(() => {
  //   setNumber(number + 1);
  // }, [number]);

  const onDecreaseAnotherNumber = () => {
    setAnotherNumber(anotherNumber - 1);
  };

  return (
    <div>
      <button onClick={onDecreaseAnotherNumber}>parent change {anotherNumber}</button>
      <Number value={number} />
      <CounterMemo onIncrease={onIncrease} />
    </div>
  );
}

const Number = ({value}) => {
  console.log("Render Number");
  return (
    <div>
      <h2>Counter</h2>
      <p>The number is: {value}</p>
    </div>
  );
}

const Counter = ({onIncrease}) => {
  console.log("Render Counter");
  return (
    <div>
      <button onClick={onIncrease}>Increase</button>
    </div>
  );
}

const CounterMemo = React.memo(Counter);

export default UseCallbackExample;
