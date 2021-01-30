import React from "react";

const Anser2_3 = (prop) => {
  console.log("Anser2_3 Render");
  const { tempDataArry } = prop;
  return (
    <>
      <ul>
        <h3>集計データ</h3>
        {tempDataArry.map((data) => (
          <li key={data.id}>
            {`${data.temp}.0`.slice(0, 4)}度 : {data.count}日{" "}
          </li>
        ))}
      </ul>
      ;
    </>
  );
};

export default Anser2_3;
