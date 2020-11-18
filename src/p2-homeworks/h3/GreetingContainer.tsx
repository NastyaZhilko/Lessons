import React, {ChangeEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>// need to fix any
    addUserCallback: (name: string)=>void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // need to fix any+
    const [error, setError] = useState<string|null>(""); // need to fix any+

    const setNameCallback = (e: ChangeEvent<HTMLInputElement> ) => { // need to fix any+
        setName(e.currentTarget.value); // need to fix+
        setError('')

    };
    const addUser = (title:string) => {
        if (title.trim())
        {
            alert('Hello ' + name); // need to fix  пофиксить any
            addUserCallback(title);
            setName('')
            setError('')
        }
        else{
            setError('Enter a name to continue!')
        }
    };

    const totalUsers = users.length;    // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={()=> addUser(name)}
            error={error}
            totalUsers={totalUsers}
/>
    );
}

export default GreetingContainer;
