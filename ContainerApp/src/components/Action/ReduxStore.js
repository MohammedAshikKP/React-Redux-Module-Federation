import React, { useEffect } from "react";
import System from "../../CustomSystem";

export const Actions = (props) => {
  console.log('i99',props);
  const [system, setSystem] = React.useState(undefined);
  function setLayout() {
    setSystem({
      url: "http://localhost:4004/actionfile.js",
      scope: "ReduxStore",
      module: "./actions",
    });
  }
    useEffect(() => {
      setLayout();
  }, []);
  return <System system={system} {...props}  />;
};

