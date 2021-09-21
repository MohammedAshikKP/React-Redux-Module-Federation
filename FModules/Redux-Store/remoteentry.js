// import React, { useEffect, useState } from 'react'
// import { Provider } from "react-redux";
// import store from "./store"
// import allActions from "./actions";
// import *  as allSelectors from './selectors'
// const StoreApp = (props) => {

//   const [a, seta] = useState(1);


//    const clonedChilds = React.Children.map(props.children,(child=>{

//       return React.cloneElement(child,{actions:allActions,selectors:allSelectors});
//     }))
    


//     return (
//       <Provider store={store} >      

//           {clonedChilds}
//         </Provider>
//       );
// }
 
// export default StoreApp;