//issue: have to put the values from json file into the graph

// var jsonData = {
//   xData: [
//     [15.59, 15.58, 15.57, 15.56],
//     [15.59, 15.58, 15.57, 15.56],
//   ],
//   yData: [
//     [
//       423.9049987792969, 423.8999938964844, 423.9949951171875,
//       424.0249938964844,
//     ],
//     [423.82834, 423.80707, 423.78314, 423.79807],
//   ],
//   colors: ["rgb(38, 121, 255)", "rgb(255, 40, 40)"],
//   lineSize: [2, 2],
//   labels: ["Original", "Predicted"],
// };
var jsonData = {
  xData: [[], []], // Two arrays for original and predicted times
  yData: [[], []], // Two arrays for actual and predicted prices
  colors: ["rgb(38, 121, 255)", "rgb(255, 40, 40)"],
  lineSize: [2, 2],
  labels: ["Actual", "Predicted"],
};

var originalData = [
  {
    "Date and Time of Prediction": "2023-10-24 14:52:00",
    "Actual Price": "423.385009765625",
    "Predicted Price": "423.61258",
  },
  {
    "Date and Time of Prediction": "2023-10-24 14:53:00",
    "Actual Price": "423.5331115722656",
    "Predicted Price": "423.54773",
  },
  {
    "Date and Time of Prediction": "2023-10-24 14:54:00",
    "Actual Price": "423.54998779296875",
    "Predicted Price": "423.49805",
  },
  {
    "Date and Time of Prediction": "2023-10-24 14:55:00",
    "Actual Price": "423.6885070800781",
    "Predicted Price": "423.47507",
  },
  {
    "Date and Time of Prediction": "2023-10-24 14:56:00",
    "Actual Price": "423.69000244140625",
    "Predicted Price": "423.49957",
  },
  {
    "Date and Time of Prediction": "2023-10-24 14:57:00",
    "Actual Price": "423.5498962402344",
    "Predicted Price": "423.55002",
  },
  {
    "Date and Time of Prediction": "2023-10-24 14:58:00",
    "Actual Price": "423.510009765625",
    "Predicted Price": "423.57678",
  },
  {
    "Date and Time of Prediction": "2023-10-24 14:59:00",
    "Actual Price": "423.5",
    "Predicted Price": "423.57047",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:00:00",
    "Actual Price": "423.5299987792969",
    "Predicted Price": "423.54214",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:01:00",
    "Actual Price": "423.6669921875",
    "Predicted Price": "423.513",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:02:00",
    "Actual Price": "423.7799987792969",
    "Predicted Price": "423.51724",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:03:00",
    "Actual Price": "423.760009765625",
    "Predicted Price": "423.56607",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:04:00",
    "Actual Price": "423.6499938964844",
    "Predicted Price": "423.6295",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:05:00",
    "Actual Price": "423.6499938964844",
    "Predicted Price": "423.664",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:06:00",
    "Actual Price": "423.3800048828125",
    "Predicted Price": "423.669",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:07:00",
    "Actual Price": "423.2226867675781",
    "Predicted Price": "423.60248",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:08:00",
    "Actual Price": "423.3349914550781",
    "Predicted Price": "423.47253",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:09:00",
    "Actual Price": "423.3349914550781",
    "Predicted Price": "423.35196",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:10:00",
    "Actual Price": "423.2699890136719",
    "Predicted Price": "423.2668",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:11:00",
    "Actual Price": "423.42999267578125",
    "Predicted Price": "423.20956",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:12:00",
    "Actual Price": "423.4700012207031",
    "Predicted Price": "423.2076",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:13:00",
    "Actual Price": "423.45001220703125",
    "Predicted Price": "423.24973",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:14:00",
    "Actual Price": "423.590087890625",
    "Predicted Price": "423.30643",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:15:00",
    "Actual Price": "423.5450134277344",
    "Predicted Price": "423.3841",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:16:00",
    "Actual Price": "423.7300109863281",
    "Predicted Price": "423.45224",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:17:00",
    "Actual Price": "423.885009765625",
    "Predicted Price": "423.53326",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:18:00",
    "Actual Price": "424.010009765625",
    "Predicted Price": "423.63876",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:19:00",
    "Actual Price": "423.9599914550781",
    "Predicted Price": "423.76437",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:20:00",
    "Actual Price": "423.8900146484375",
    "Predicted Price": "423.86612",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:21:00",
    "Actual Price": "423.9849853515625",
    "Predicted Price": "423.91293",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:22:00",
    "Actual Price": "424.114990234375",
    "Predicted Price": "423.9325",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:23:00",
    "Actual Price": "424.0",
    "Predicted Price": "423.9608",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:24:00",
    "Actual Price": "423.760009765625",
    "Predicted Price": "423.96805",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:25:00",
    "Actual Price": "423.94000244140625",
    "Predicted Price": "423.9092",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:26:00",
    "Actual Price": "423.9223937988281",
    "Predicted Price": "423.85724",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:27:00",
    "Actual Price": "423.95001220703125",
    "Predicted Price": "423.82385",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:28:00",
    "Actual Price": "424.04998779296875",
    "Predicted Price": "423.8165",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:29:00",
    "Actual Price": "424.0299987792969",
    "Predicted Price": "423.84818",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:30:00",
    "Actual Price": "424.0502014160156",
    "Predicted Price": "423.8944",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:31:00",
    "Actual Price": "423.9800109863281",
    "Predicted Price": "423.9425",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:32:00",
    "Actual Price": "424.010009765625",
    "Predicted Price": "423.96655",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:33:00",
    "Actual Price": "424.1400146484375",
    "Predicted Price": "423.976",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:34:00",
    "Actual Price": "423.9849853515625",
    "Predicted Price": "424.00357",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:35:00",
    "Actual Price": "423.92999267578125",
    "Predicted Price": "424.00623",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:36:00",
    "Actual Price": "423.9353942871094",
    "Predicted Price": "423.97824",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:37:00",
    "Actual Price": "424.03009033203125",
    "Predicted Price": "423.93848",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:38:00",
    "Actual Price": "423.989990234375",
    "Predicted Price": "423.92133",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:39:00",
    "Actual Price": "423.989990234375",
    "Predicted Price": "423.91525",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:40:00",
    "Actual Price": "423.8500061035156",
    "Predicted Price": "423.9154",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:41:00",
    "Actual Price": "424.09991455078125",
    "Predicted Price": "423.88892",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:42:00",
    "Actual Price": "424.135009765625",
    "Predicted Price": "423.90115",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:43:00",
    "Actual Price": "424.15179443359375",
    "Predicted Price": "423.94635",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:44:00",
    "Actual Price": "424.0700988769531",
    "Predicted Price": "424.00418",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:45:00",
    "Actual Price": "424.1199951171875",
    "Predicted Price": "424.03708",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:46:00",
    "Actual Price": "424.1300048828125",
    "Predicted Price": "424.0548",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:47:00",
    "Actual Price": "424.0299987792969",
    "Predicted Price": "424.06235",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:48:00",
    "Actual Price": "424.0899963378906",
    "Predicted Price": "424.0411",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:49:00",
    "Actual Price": "424.0350036621094",
    "Predicted Price": "424.01846",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:50:00",
    "Actual Price": "423.92010498046875",
    "Predicted Price": "423.99017",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:51:00",
    "Actual Price": "423.94000244140625",
    "Predicted Price": "423.9399",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:52:00",
    "Actual Price": "423.9599914550781",
    "Predicted Price": "423.89044",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:53:00",
    "Actual Price": "424.147705078125",
    "Predicted Price": "423.85828",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:54:00",
    "Actual Price": "423.7900085449219",
    "Predicted Price": "423.884",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:55:00",
    "Actual Price": "423.67999267578125",
    "Predicted Price": "423.8672",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:56:00",
    "Actual Price": "424.0249938964844",
    "Predicted Price": "423.79807",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:57:00",
    "Actual Price": "423.9949951171875",
    "Predicted Price": "423.78314",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:58:00",
    "Actual Price": "423.8999938964844",
    "Predicted Price": "423.80707",
  },
  {
    "Date and Time of Prediction": "2023-10-24 15:59:00",
    "Actual Price": "423.9049987792969",
    "Predicted Price": "423.82834",
  },
];

originalData.forEach(function (dataPoint) {
  // Parse date and time from the input data
  var dateTime = new Date(dataPoint["Date and Time of Prediction"]);

  var hours = dateTime.getHours().toString().padStart(2, "0");
  var minutes = dateTime.getMinutes().toString().padStart(2, "0");
  var timeString = hours + ":" + minutes;

  var actualPrice = parseFloat(dataPoint["Actual Price"]);
  var predictedPrice = parseFloat(dataPoint["Predicted Price"]);
  console.log(timeString);

  // Push time to appropriate xData array (original or predicted)
  if (!isNaN(actualPrice)) {
    jsonData.xData[0].push(timeString); // Original time
    jsonData.yData[0].push(actualPrice); // Original actual price
    console.log((actualPrice));
    jsonData.xData[1].push(timeString); // Predicted time
    jsonData.yData[1].push(predictedPrice); // Predicted price
    console.log((predictedPrice));
  }
});

var xData = jsonData.xData;
var yData = jsonData.yData;
var colors = jsonData.colors;
var lineSize = jsonData.lineSize;
var labels = jsonData.labels;
var data = [];

for (var i = 0; i < xData.length; i++) {
  var result = {
    x: xData[i],
    y: yData[i],
    type: "scatter",
    mode: "lines",
    line: {
      color: colors[i],
      width: lineSize[i],
    },
  };
  var result2 = {
    x: [xData[i][0], xData[i][66]],
    y: [yData[i][0], yData[i][66]],
    type: "scatter",
    mode: "markers",
    marker: {
      color: colors[i],
      size: 12,
    },
  };
  data.push(result, result2);
}

var layout = {
  showlegend: true,
  height: 500,
  width: 1100,
  xaxis: {
    showline: true,
    showgrid: true,
    showticklabels: true,
    linecolor: "rgb(204,204,204)",
    linewidth: 2,
    autotick: true,
    ticks: "outside",
    tickcolor: "rgb(204,204,204)",
    tickwidth: 2,
    ticklen: 15,
    tickfont: {
      family: "Poppins",
      size: 12,
      color: "rgb(82, 82, 82)",
    },
  },
  yaxis: {
    showgrid: true,
    zeroline: false,
    showline: false,
    showticklabels: false,
    range: [423.1, 424.4],
  },
  autosize: false,
  margin: {
    autoexpand: true,
    l: 80,
    r: 20,
    t: 100,
  },
  annotations: [
    {
      xref: "paper",
      yref: "paper",
      x: 0.0,
      y: 1.05,
      xanchor: "left",
      yanchor: "bottom",
      text: "SPY Prediction",
      font: {
        family: "Poppins",
        size: 25,
        color: "rgb(37,37,37)",
      },
      showarrow: false,
    },
    // {
    //   xref: "paper",
    //   yref: "paper",
    //   x: 0.5,
    //   y: -0.1,
    //   xanchor: "center",
    //   yanchor: "top",
    //   text: "Source: Syntalix Study",
    //   showarrow: false,
    //   font: {
    //     family: "Poppins",
    //     size: 12,
    //     color: "rgb(150,150,150)",
    //   },
    // },
  ],
};
//graph outline
for (var i = 0; i < xData.length; i++) {
  var result = {
    xref: "paper",
    x: 0.05,
    y: yData[i][0],
    xanchor: "right",
    yanchor: "middle",
    text: labels[i],
    showarrow: false,
    font: {
      family: "Poppins",
      size: 15,
      color: "black",
    },
  };
  var result2 = {
    xref: "paper",
    x: 0.95,
    y: yData[i][11],
    xanchor: "left",
    yanchor: "middle",
    text: yData[i][11] + "%",
    font: {
      family: "Poppins",
      size: 12,
      color: "black",
    },
    showarrow: false,
  };

  layout.annotations.push(result, result2);
}

Plotly.newPlot("chart", data, layout);
