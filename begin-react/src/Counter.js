import React, { useState } from 'react';

function Counter(){
  // number 라는 상태를 만들 것인데,
  // 기본값을 0으로 하겠다는 것
  // setNumber는 기존값을 변경하는 값
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
  }
  const onDecrease = () => {
    setNumber(number - 1);
  }
  return (
    <div>
    <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
