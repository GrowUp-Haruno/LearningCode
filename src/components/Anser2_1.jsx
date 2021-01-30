import React from "react";

const Anser2_1 = (prop) => {
  console.log("Anser2_1 Render");
  const { lawData } = prop;

  return (
    <div>
      <ul>
        <h3>Json Law Data</h3>
        {lawData}
      </ul>
    </div>
  );
};

export default Anser2_1;
