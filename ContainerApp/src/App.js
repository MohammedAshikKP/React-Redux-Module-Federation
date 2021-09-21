import React,{lazy,Suspense} from "react";
const NumberCounter = lazy(() => import('./components/NumberCounter'));
const DateCounter = lazy(() => import('./components/DateCounter'));
const Actionlist = lazy(() => import('./components/Action'));
// import System from "./CustomSystem";
// import * as X from 'ReduxStore'
function App() {
// console.log('app props',System(),X);
  return (
   <Suspense fallback={<p>loading..</p>}>


           {/* <DateCounter/> */}
            <NumberCounter/>


    
    </Suspense>
  );
}

export default App;