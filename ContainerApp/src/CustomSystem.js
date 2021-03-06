/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
import React from 'react';
// import Loader from './common/loader';
const Loader=()=><p>loading..</p>



class Custom {

    constructor(scope,module){
        this.scope = scope;
        this.module = module;
        this.Module = null;
    }

    loadComponent = (scope, module) => async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__('default');
    const container = window['ReduxStore']; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    const factory = await window['ReduxStore'].get('./Store');
    const Module = factory();
    this.Module= Module;
    return Module;
    };



}


const useDynamicScript = (args) => {
    const [ready, setReady] = React.useState(false);
    const [failed, setFailed] = React.useState(false);

    React.useEffect(() => {
        if (!args.url) {
            return;
        }

        const element = document.createElement('script');

        element.src = args.url;
        element.type = 'text/javascript';
        element.async = true;

        setReady(false);
        setFailed(false);

        element.onload = () => {
            console.log(`Dynamic Script Loaded: ${args.url}`);
            setReady(true);
        };

        element.onerror = () => {
            console.error(`Dynamic Script Error: ${args.url}`);
            setReady(false);
            setFailed(true);
        };

        document.head.appendChild(element);

        return () => {
            console.log(`Dynamic Script Removed: ${args.url}`);
            document.head.removeChild(element);
        };
    }, [args.url]);

    return {
        ready,
        failed,
    };
};

async function System(props) {
    const { ready, failed } = useDynamicScript({
        url: 'http://localhost:4004/remoteEntry.js',
    });

    // if (!props.system) {
    //     return <Loader />;
    // }

    // if (!ready) {
    //     return <h2>Loading dynamic script: {props.system.url}</h2>;
    // }

    if (!ready) {
        return <Loader />;
    }

    if (failed) {
        return <h2>Failed to load dynamic script: {'http://localhost:4004/remoteEntry.js'}</h2>;
    }
     const Component = await new Custom().loadComponent();
     return Component

}
export default System;
