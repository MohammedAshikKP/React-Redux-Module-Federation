import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import Button from "./Components/Button";
import RedColouredH1 from "./Components/RedColouredH1";
export const NumberCounter = (props) => {
    const dispatch = useDispatch();
    const number = useSelector((state) => state.CounterReducer.value)
    const action = useSelector((state) => state)
        useEffect(()=>{
        console.log("rendered number counter");
    },[])
    return (
        <>
            <RedColouredH1 number={number}></RedColouredH1>
            <Button displayText="Inc" onClick={() => dispatch({type:'INCREMENT_ONE'})}></Button>
            <Button displayText="Dec" onClick={() =>  dispatch({type:'DECREMENT_ONE'})}></Button>
        </>
    )
}

export default NumberCounter;