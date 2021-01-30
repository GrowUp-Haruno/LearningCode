import React, { useState } from "react";
//import temperatures from "../data/temperatures";
import Anser1 from "./Anser1";

const Day1 = () => {
  console.log("Day1 Render");
  const [celsius, setCelsius] = useState(20);

  // let count = 0;
  // const result = temperatures.reduce((maxCount, temp) => {
  //   count = temp > celsius ? count + 1 : 0;
  //   return (maxCount = count > maxCount ? count : maxCount);
  // }, 0);

  return (
    <>
      <h2>2019/7/1〜9/30までの最高気温でN度を越えた連続日数は何日か?</h2>
      <input
        type="number"
        value={celsius}
        onChange={(env) =>
          setCelsius(
            env.target.valueAsNumber >= 0 && env.target.valueAsNumber <= 40
              ? env.target.valueAsNumber
              : celsius
          )
        }
      />
      度だと
      <Anser1 celsius={celsius} />
      {/* <span>{result}日</span> */}
    </>
  );
};

export default Day1;
