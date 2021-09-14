import React, { useEffect } from "react";
import System from "../../System";

export const ReduxStore = (props) => {
  console.log('i99',props);
  const [system, setSystem] = React.useState(undefined);
  function setLayout() {
    setSystem({
      url: "http://localhost:4004/remoteEntry.js",
      scope: "ReduxStore",
      module: "./store",
    });
  }
    useEffect(() => {
      setLayout();
  }, []);
  return <System system={system} {...props}  />;
};

