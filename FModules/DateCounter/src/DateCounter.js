import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "./Components/Button";
import Input from "./Components/Input";
import RedColouredH1 from "./Components/RedColouredH1";

const INCREMENT_DATE="INCREMENT_DATE"
const DECREMENT_DATE="DECREMENT_DATE"
 const increment_date=(payload)=>({type:INCREMENT_DATE,payload})
 const decrement_date=(payload)=>({type:DECREMENT_DATE,payload})



export const DateCounter = () => {
    useEffect(()=>{
        console.log("rendered date counter");
    },[])
    
    
    const dispatch = useDispatch();

     const [s, sets] = useState(0);

     
    const date = useSelector((state) => state.DateCounterReducer.date)
    return (<>
        <RedColouredH1 number={new Date(date).toDateString()}></RedColouredH1>
        <Input value={s} onChange={({ target: { value } }) => sets(value)} />
        <Button displayText="Inc" onClick={() => dispatch(increment_date(s))}></Button>
        <Button displayText="Dec" onClick={() => dispatch(decrement_date(s))}></Button>
    </>)
}

export default DateCounter;

