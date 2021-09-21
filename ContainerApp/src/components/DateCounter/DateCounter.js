import React, { useEffect } from "react";
import System from "../../System";

export const DateCounter = (props) => {
  const [system, setSystem] = React.useState(undefined);
  function setLayout() {
    setSystem({
      url: "http://localhost:4002/remoteEntry.js",
      scope: "DateCounter",
      module: "./DateCounter",
    });
  }
    useEffect(() => {
      setLayout();
  }, []);
  return <System system={system} {...props} />;
};

