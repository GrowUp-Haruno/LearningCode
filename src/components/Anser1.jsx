import React from "react";
import temperatures from "../data/temperatures";

const Anser1 = (prop) => {
  console.log("Anser1 Render");
  const { celsius } = prop;
  let count = 0;
  const compareTemp = (compTemp) => {
    return temperatures.reduce((maxCount, temp) => {
      count = temp > compTemp ? count + 1 : 0;
      return (maxCount = count > maxCount ? count : maxCount);
    }, 0);
  };
  const result = compareTemp(celsius);

  return (
    <>
      <span>{result}日</span>
    </>
  );
};

export default React.memo(Anser1);
