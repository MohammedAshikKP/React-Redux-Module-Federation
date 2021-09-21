import React, { useEffect } from "react";
import System from "../../System";

export const NumberCounter = (props) => {
  const [system, setSystem] = React.useState(undefined);
  function setLayout() {
    setSystem({
      url: "http://localhost:4003/remoteEntry.js",
      scope: "NumberCounter1",
      module: "./NumberCounter",
    });
  }
    useEffect(() => {
      setLayout();
  }, []);
  return <System system={system} {...props} />;
};

