import React from 'react'
import { Provider } from "react-redux";
import store from "./store"
import allActions from "./actions"
const StoreApp = (props) => {
    return (
      <Provider store={store} >        
        <div>hello form store entry  </div>
          {props.children}
        </Provider>
      );
}
 
export default StoreApp;