import React, {Fragment, useRef, useState} from 'react';
import './App.css';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';
import ErrorModal from "./components/UI/Modal/ErrorModal";


const App = () => {

    // 회원들이 저장될 배열
    const [userList, setUserList] = useState([]);

    const count = useRef(1);

    const addUserHandler = user => {
        console.log("c:", count);
        count.current++;
        console.log("cc: ", count.current);
        console.log(user);
        setUserList(prev => [
            ...prev,
            {
                ...user,
                id: Math.random().toString()
            }
        ]);
    };

    return (
        <>
            <AddUsers onAddUser={addUserHandler} />
            <UserList users={userList} />
        </>
    );
};

export default App;
