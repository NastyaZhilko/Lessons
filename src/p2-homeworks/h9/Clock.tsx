import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./Clock.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId) // stop
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date()) // setDate
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)// show
    };
    const onMouseLeave = () => {
        setShow(false)// close
    };

    const month = date.getMonth() + 1

    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    const stringTime = hours + ':' + minutes + ':' + seconds; // fix with date
    const stringDate = date.getDate() + '.' + month + '.' + date.getFullYear() // fix with date

    return (
        <div className={s.body}>
            <div
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                <div className={s.time}>
                {stringTime}
                </div>
            </div>

            {show && (
                <div className={s.date}>
                    {stringDate}
                </div>
            )}
            <div className={s.buttons}>
                <SuperButton onClick={start} className={s.button}>Start</SuperButton>
                <SuperButton onClick={stop} className={s.button}>Stop</SuperButton>

            </div>
        </div>
    );
}

export default Clock;
