import React from "react";
import { Bar } from "react-chartjs-2";

//import '../App.css';

function Anser2_4(prop) {
  const { tempDataArry } = prop;
  /** グラフデータ */
  const graphData = {
    // 軸ラベル
    labels: [],

    // 表示するデータセット
    datasets: [
      {
        data: [],
        backgroundColor: "rgba(30, 144, 255, 1)",
        label: "回数"
      }
    ]
  };

  const graphOption = {
    scales: {
      xAxes: [
        // x軸オプション
        {
          scaleLabel: {
            // x軸ラベルオプション
          }
        }
      ],
      yAxes: [
        // y軸オプション
        {
          scaleLabel: {
            // y軸ラベルオプション
          },
          ticks: {
            // y軸メモリオプション
            max: 4,
            min: 0,
            stepSize: 1
          }
        }
      ]
    }
  };

  tempDataArry.map((tempData) => {
    graphData.labels.push(tempData.temp);
    graphData.datasets[0].data.push(tempData.count);
    return null;
  });
  //console.log(graphData);

  return (
    <div className="App">
      {/* グラフコンポーネントの呼び出し */}
      <Bar data={graphData} options={graphOption} height={400} width={540} />
    </div>
  );
}

export default Anser2_4;
