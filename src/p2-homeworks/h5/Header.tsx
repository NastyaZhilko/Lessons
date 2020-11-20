import React from "react";
import {NavLink} from 'react-router-dom'
import s from './Header.module.css';

function Header() {
    return (
        <div className={s.sidebar}>
            <div><NavLink to={'/PRE_JUNIOR'}>PreJunior:</NavLink>
            <ul>
                <li><NavLink to={'/hw1'}>Homeworks №1</NavLink></li>
                <li><NavLink to={'/hw2'}>Homeworks №2</NavLink></li>
                <li><NavLink to={'/hw3'}>Homeworks №3</NavLink></li>
                <li> <NavLink to={'/hw4'}>Homeworks №4</NavLink></li>
            </ul>
            </div>
            <div><NavLink to={'/Junior'}>Junior:</NavLink>
                <ul>
                    <li><NavLink to={'/hw6'}>Homeworks №6</NavLink></li>
                    <li><NavLink to={'/hw7'}>Homeworks №7</NavLink></li>
                    <li><NavLink to={'/hw8'}>Homeworks №8</NavLink></li>
                    <li> <NavLink to={'/hw9'}>Homeworks №9</NavLink></li>
                </ul>
            </div>
            <div><NavLink to={'/JuniorSuper'}>Junior+:</NavLink>
                <ul>
                    <li><NavLink to={'/hw10'}>Homeworks №10</NavLink></li>
                    <li><NavLink to={'/hw11'}>Homeworks №11</NavLink></li>
                    <li><NavLink to={'/hw12'}>Homeworks №12</NavLink></li>

                </ul>
            </div>

        </div>
    );
}

export default Header;
