import React, { useState, useRef } from 'react';

function InputSample(){
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const nameInput = useRef();
  const { name, nickname } = inputs;

  const onChange = (e) => {
    const {name, value} = e.target;

    setInputs({
      ...inputs, // 기존의 내용 가져오기
      [name]: value, // 대괄호로 감싸면 상태에 따라 name또는 nickname값을 지정한다.
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  }

  return (
    <div>
      <input
       name="name"
       placeholder="이름"
       onChange={onChange}
       value={name}
       ref={nameInput}
      />
      <input
       name="nickname"
       placeholder="닉네임"
       onChange={onChange}
       value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
      <b>값 : </b>
      {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
