import React from "react";
import s from './Routes.module.css'
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior"
import Junior from "./pages/Junior";
import JuniorSuper from "./pages/JuniorSuper";
import {Switch, Route, Redirect} from "react-router-dom";
import HW1 from "../h1/HW1";
import HW2 from "../h2/HW2";
import HW3 from "../h3/HW3";
import HW4 from "../h4/HW4";
import HW6 from "../h6/HW6";
import HW7 from "../h7/HW7";
import HW8 from "../h8/HW8";
import HW9 from "../h9/HW9";
import HW10 from "../h10/HW10";
import HW11 from "../h11/HW11";
import HW12 from "../h12/HW12";


export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    junior: "/junior",
    juniorSuper: "/juniorSuper",
    HW1:"/hw1",
    HW2:"/hw2",
    HW3:"/hw3",
    HW4:"/hw4",
    HW6:"/hw6",
    HW7:"/hw7",
    HW8:"/hw8",
    HW9:"/hw9",
    HW10:"/hw10",
    HW11:"/hw11",
    HW12:"/hw12"

}

function Routes() {
    return (
        <div >
            <Switch>
                в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR
                exact нужен чтоб указать полное совподение (что после "/" ничего не будет)
                <Route path={"/"} exact render={() => <Redirect to={'/PRE_JUNIOR'}/>}/>
                <Route path={'/PRE_JUNIOR'} render={() => <PreJunior/>}/>
                <Route path={"/junior"} exact render={() => <Junior/>}/>
                <Route path={"/juniorSuper"} exact render={() => <JuniorSuper/>}/>
                <Route path={"/hw1"} exact render={() => <HW1/>}/>
                <Route path={"/hw2"} exact render={() => <HW2/>}/>
                <Route path={"/hw3"} exact render={() => <HW3/>}/>
                <Route path={"/hw4"} exact render={() => <HW4/>}/>
                <Route path={"/hw6"} exact render={() => <HW6/>}/>
                <Route path={"/hw7"} exact render={() => <HW7/>}/>
                <Route path={"/hw8"} exact render={() => <HW8/>}/>
                <Route path={"/hw9"} exact render={() => <HW9/>}/>
                <Route path={"/hw10"} exact render={() => <HW10/>}/>
                <Route path={"/hw11"} exact render={() => <HW11/>}/>
                <Route path={"/hw12"} exact render={() => <HW12/>}/>

                <Route render={() => <Error404/>}/>

                //у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу

            </Switch>
        </div>
    );
}

export default Routes;
