import React, {ChangeEvent} from "react";
import s from'./Greeting.module.css';

import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string // need to fix any+
    setNameCallback: (e: ChangeEvent<HTMLInputElement> ) =>void // need to fix any+
    addUser: (title: string) =>void// need to fix any+ пофиксить эни
    error: string|null // need to fix any+
    totalUsers: number // need to fix any+
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    let inputClass = error ? s.error : ""; // need to fix with (?:)

    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}/>
            <button className={s.button} onClick={()=>addUser(name)}>add</button>
            <span className={s.span}>{totalUsers}</span>
             <div className={s.errormessage}>{error}</div>
        </div>
    );
}

export default Greeting;
