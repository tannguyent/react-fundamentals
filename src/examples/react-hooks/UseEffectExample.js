import React, { useEffect, useState } from 'react'
const UseEffectExample = () => {
    const [numberA, setnumberA] = useState(0)
    const [numberB, setnumberB] = useState(0)
    const [total, settotal] = useState(0)

    //mounted + unmounted
    useEffect(() => {
      console.log("useEffect:component is mounted");
      return () => console.log('useEffect:component is unmounted')
    }, []);

    // component update 
    useEffect(() => {
        settotal(numberA + numberB)
    }, [numberA, numberB]);
  
    return (
      <div>
          <p>Test useEffect</p> 
          <p>Number A</p>
          <input value={numberA} onChange={(e) => setnumberA(parseInt(e.target.value))}></input>
          <p>Number B</p>
          <input value={numberB} onChange={(e) => setnumberB(parseInt(e.target.value))}></input>
          <p>total {total}</p>
      </div>
    );
};

export default UseEffectExample