import React from "react";
import Message from "./Message";
import s from './HW1.module.css'




const messageData = {
    avatar: "https://img.labirint.ru/images/goodssets/preview_img_small_2635_604.jpg",
    name: "Alexey",
    message: "Hello!",
    time: "22:00",
};

const HW1 = () => {
    return (
        <div>
            <hr/>
           Homeworks №1

            {/*should work (должно работать)*/}


            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />


            <hr/>
{/*для личного творчества, могу проверить*/}
{/*<AlternativeMessage/>*/}
    <hr/>
</div>
)
    ;
}


export default HW1;
