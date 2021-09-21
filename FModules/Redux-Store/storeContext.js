import React from 'react';
import actions from './actions'
export const StoreContext = React.createContext();

const Store = (props)=>{
    
return(
   <>
    {props.children}
    </>

    )
}
export default Store;