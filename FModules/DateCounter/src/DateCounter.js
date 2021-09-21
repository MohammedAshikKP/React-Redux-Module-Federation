import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "./Components/Button";
import Input from "./Components/Input";
import RedColouredH1 from "./Components/RedColouredH1";




export const DateCounter = ({actions,selectors}) => {
    useEffect(()=>{
        console.log("rendered date counter");
    },[])
    
    
    const dispatch = useDispatch();

     const [s, sets] = useState(0);


    const date = useSelector(selectors.date)
    return (<>
        <RedColouredH1 number={new Date(date).toDateString()}></RedColouredH1>
        <Input value={s} onChange={({ target: { value } }) => sets(value)} />
        <Button displayText="Inc" onClick={() => dispatch(actions.increment_date(s))}></Button>
        <Button displayText="Dec" onClick={() => dispatch(actions.decrement_date(s))}></Button>
    </>)
}

export default DateCounter;

