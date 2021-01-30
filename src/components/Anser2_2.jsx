import React from "react";

const Anser2_2 = (prop) => {
  console.log("Anser2_2 Render");
  const { tempDataArry } = prop;

  return (
    <div>
      <ul>
        <h3>Object</h3>
        <p>[</p>
        {tempDataArry.map((data) => (
          <li key={data.id}>
            <p>　　{"{"}</p>
            <p>　　　　id: {data.id}</p>
            <p>　　　　temp: {data.temp}</p>
            <p>　　　　count: {data.count}</p>
            <p>　　{"},"}</p>
          </li>
        ))}
        <p>]</p>
      </ul>
    </div>
  );
};

export default Anser2_2;
