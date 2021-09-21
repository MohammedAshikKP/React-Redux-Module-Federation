import React from 'react'
import NumberCounter from './NumberCounter'

export default function App(props){
    console.log('from root c',props);
    return (
        <div>
            <NumberCounter porps={props}/>
        </div>
    )
}