import React, { useReducer } from "react";
import uniquTempObj from "../data/tempAggregate";
import Anser2_1 from "./Anser2_1";
import Anser2_2 from "./Anser2_2";
import Anser2_3 from "./Anser2_3";
import Anser2_4 from "./Anser2_4";

// reducerの定義
const initialState = "NEXT_OBJECT";
const reducer = (currentState, action) => {
  switch (action) {
    case "NEXT_OBJECT":
      return "NEXT_AGGREGATE";
    case "NEXT_AGGREGATE":
      return "NEXT_GRAPH";
    case "NEXT_GRAPH":
      return "NEXT_LAW";
    case "NEXT_LAW":
      return "NEXT_OBJECT";
    default:
      return "NEXT_OBJECT";
  }
};

const Day2 = () => {
  console.log("Day2 Render");
  const tempDataArry = JSON.parse(uniquTempObj);

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>2019/7/1〜9/30の期間でN度となったのは何日か?</h2>
      <button onClick={() => dispatch(state)}>{state}</button>
      {state === "NEXT_OBJECT" && <Anser2_1 lawData={uniquTempObj} />}
      {state === "NEXT_AGGREGATE" && <Anser2_2 tempDataArry={tempDataArry} />}
      {state === "NEXT_GRAPH" && <Anser2_3 tempDataArry={tempDataArry} />}
      {state === "NEXT_LAW" && <Anser2_4 tempDataArry={tempDataArry} />}
    </div>
  );
};

export default React.memo(Day2);
