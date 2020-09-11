import React, { useReducer } from 'react';

// state에는 문자, 숫자, 함수 뭐든 쓸 수 있음
// action은 type에 따라 다른 상태 반환하도록
function reducer(state, action) {
  switch (action.type){
    case 'INCREAMENT':
      return state + 1;
    case 'DECREAMENT':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

function Counter(){

  const [number, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => {
    // setNumber(prevNumber => prevNumber + 1);
    dispatch({
      type: 'INCREAMENT'
    });
  }
  const onDecrease = () => {
    // setNumber(number - 1);
    dispatch({
      type: 'DECREAMENT'
    });
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
