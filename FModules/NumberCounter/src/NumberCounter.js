import React, { useEffect ,useContext, useState} from 'react';
import { useDispatch, useSelector } from "react-redux"
import Button from "./Components/Button";
import RedColouredH1 from "./Components/RedColouredH1";


import System from './CustomSystem'

export const NumberCounter=(props) => {

   console.log('Number ',System());

    return (
        <>
            <RedColouredH1 number={22}></RedColouredH1>
            <Button displayText="Inc" onClick={() => console.log()}></Button>
            <Button displayText="Dec" onClick={() => console.log()}></Button>
        </>
    )
}

export default NumberCounter;