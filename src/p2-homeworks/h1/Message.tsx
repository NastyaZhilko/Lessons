import React from "react";
import s from'./Message.module.css';


type messagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message = (props: messagePropsType) => {
    return (
        <div className={s.message}>
            <div className={s.ava}>
                <img src={props.avatar}/>
            </div>
            <div className={s.body}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.text}>{props.message}</div>
                    <div className={s.time}>{props.time}</div>
            </div>
        </div>
    );
}

export default Message;
