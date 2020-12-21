import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './HW8.module.css'

const initialPeople = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div className={s.table} key={p._id}>
            name:{p.name}, age: {p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "down"}))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, {type: "check", payload: 18}))
    const sortAgeUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sortAge", payload: "age-up"}))
    const sortAgeDown = () => setPeople(homeWorkReducer(initialPeople, {type: "sortAge", payload: "age-down"}))

    return (
        <div className={s.body}>
            <hr/>
            Homeworks 8

            {finalPeople}
            <div><SuperButton onClick={sortUp}>Sort up</SuperButton></div>
            <div><SuperButton onClick={sortDown}>Sort down</SuperButton></div>
            <div><SuperButton onClick={check18}>Check 18</SuperButton></div>
            <div><SuperButton onClick={sortAgeUp}>Check Age Up</SuperButton></div>
            <div><SuperButton onClick={sortAgeDown}>Check Age Down</SuperButton></div>
        </div>
    );
}

export default HW8;
