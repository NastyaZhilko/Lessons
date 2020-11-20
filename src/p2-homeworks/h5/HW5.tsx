import React from "react";
import Header from "./Header";
import Routes from "./Routes";
import s from './HW5.module.css'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div className={s.general}>

            <HashRouter>

                <Header/>

                <Routes/>

            </HashRouter>
        </div>
    );
}

export default HW5;
