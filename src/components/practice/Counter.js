import React, {useState} from 'react';

const Counter = () => {

    const [number, setNumber] = useState();
    console.log(number);

    const clickHandler = e =>{

    }
    return (
        <div>
            <h1>숫자: {number}</h1>
            <button>증가</button>
            <button>감소</button>
        </div>
    );
};

export default Counter;