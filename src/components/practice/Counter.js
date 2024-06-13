import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increaseHandler = e => {
        // useState의 setter는 상태값을 업데이트할 때
        // 랜더링 전까지 이전 상태값을 참조함 즉 count+1을 두번 부르면 두 setCount함수가 각각 0을 참조하기 때문에 한 번에 2씩 증가 안됨
        // 해결 방법: 함수형 업데이트 사용
        setCount((prev) => {
            console.log('변경이전값: ', prev);
            // 변경 이후값을 반환
            return prev+1;
        });
        setCount(count => count + 1);

        // 상태값의 변경은 실시간으로 일어나지않음.
        // 해결방법: useEffect 훅으로 해결 (뒤에 배움)
        
        console.log('변경 이후 값: ', count);
    };
    return (
        <div>
            <h1>숫자: {count}</h1>
            <button onClick={increaseHandler}>증가</button>
            <button onClick={e=>{setCount(count-1)}}>감소</button>
        </div>
    );
};

export default Counter;