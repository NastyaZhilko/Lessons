import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import Preloader from "../h10/assets/preloader.gif"
import {useDispatch, useSelector} from "react-redux";
import {loadingAC, LoadingReducerType} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import s from "./HW10.module.css"


function HW10() {
    const dispatch = useDispatch();
    const loading= useSelector<AppStoreType, LoadingReducerType>(state=>state.loading)
    // useSelector, useDispatch


    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(()=>dispatch(loadingAC(false)),2000)
        console.log("loading...");
        return clearTimeout();
    };

    return (
        <div >
            <hr/>
            Homeworks 10
            <div className={s.body}>
            {loading.loading
                ? (
                    <div className={s.img}><img src={Preloader}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading} className={s.button}>set loading...</SuperButton>
                    </div>
                )
            }
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
