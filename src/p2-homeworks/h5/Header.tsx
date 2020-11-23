import React from "react";
import {NavLink} from 'react-router-dom'
import s from './Header.module.css';

function Header() {
    return (
        <div className={s.sidebar}>
            <div><NavLink to={'/PRE_JUNIOR'} className={s.inactive} activeClassName={s.active}>PreJunior:</NavLink>
            <ul>
                <li><NavLink to={'/hw1'} className={s.inactive} activeClassName={s.active}>Homeworks №1</NavLink></li>
                <li><NavLink to={'/hw2'} className={s.inactive} activeClassName={s.active}>Homeworks №2</NavLink></li>
                <li><NavLink to={'/hw3'} className={s.inactive} activeClassName={s.active}>Homeworks №3</NavLink></li>
                <li> <NavLink to={'/hw4'} className={s.inactive} activeClassName={s.active}>Homeworks №4</NavLink></li>
            </ul>
            </div>
            <div><NavLink to={'/Junior'} className={s.inactive} activeClassName={s.active}>Junior:</NavLink>
                <ul>
                    <li><NavLink to={'/hw6'} className={s.inactive} activeClassName={s.active}>Homeworks №6</NavLink></li>
                    <li><NavLink to={'/hw7'} className={s.inactive} activeClassName={s.active}>Homeworks №7</NavLink></li>
                    <li><NavLink to={'/hw8'} className={s.inactive} activeClassName={s.active}>Homeworks №8</NavLink></li>
                    <li> <NavLink to={'/hw9'} className={s.inactive} activeClassName={s.active}>Homeworks №9</NavLink></li>
                </ul>
            </div>
            <div><NavLink to={'/JuniorSuper'} className={s.inactive} activeClassName={s.active}>Junior+:</NavLink>
                <ul>
                    <li><NavLink to={'/hw10'} className={s.inactive} activeClassName={s.active}>Homeworks №10</NavLink></li>
                    <li><NavLink to={'/hw11'} className={s.inactive} activeClassName={s.active}>Homeworks №11</NavLink></li>
                    <li><NavLink to={'/hw12'} className={s.inactive} activeClassName={s.active}>Homeworks №12</NavLink></li>

                </ul>
            </div>

        </div>
    );
}

export default Header;
