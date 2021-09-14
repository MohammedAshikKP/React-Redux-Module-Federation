import React,{lazy,Suspense} from "react";
const NumberCounter = lazy(() => import('./components/NumberCounter'));
const DateCounter = lazy(() => import('./components/DateCounter'));
const Store = lazy(() => import('./components/ReduxStore'));
const Actionlist = lazy(() => import('./components/Action'));

function App() {
  return (
   <Suspense fallback={<p>loading..</p>}>

     <Store> 
           <DateCounter/>
            <NumberCounter/>
    </Store> 

    
    </Suspense>
  );
}

export default App;