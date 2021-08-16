import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

function Chart(props) {
  console.log(props.data.co);
  // Preparing the chart data
  var aqi_ = props.data.list[0].main.aqi;
  var quality = "";
  if (aqi_ === 1) {
    quality = "Good";
  } else if (aqi_ === 2) {
    quality = "Fair";
  } else if (aqi_ === 3) {
    quality = "Moderate";
  } else if (aqi_ === 4) {
    quality = "Poor";
  } else if (aqi_ === 5) {
    quality = "Very Poor";
  }
  const chartData = [
    {
      label: "CO",
      value: props.data.list[0].components.co.toString(),
    },
    {
      label: "NO",
      value: props.data.list[0].components.no.toString(),
    },
    {
      label: "NO2",
      value: props.data.list[0].components.no2.toString(),
    },
    {
      label: "O3",
      value: props.data.list[0].components.o3.toString(),
    },
    {
      label: "SO2",
      value: props.data.list[0].components.so2.toString(),
    },
    {
      label: "PM2.5",
      value: props.data.list[0].components.pm2_5.toString(),
    },
    {
      label: "PM10",
      value: props.data.list[0].components.pm10.toString(),
    },
    {
      label: "NH3",
      value: props.data.list[0].components.nh3.toString(),
    },
  ];
  const chartConfigs = {
    type: "column3d",
    width: "700",
    height: "400",
    boxShadow: "5px 10px",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption:
          "City With Co-Ordinates { " +
          props.data.coord.lon.toString() +
          ", " +
          props.data.coord.lat.toString() +
          " } has " +
          quality +
          " Air Quality!",
        subCaption: "Concentration of various components are shown below.",
        xAxisName: "Components",
        yAxisName: "Concentration in (μg/m3)",
        theme: "fusion",
      },
      data: chartData,
    },
  };

  return <ReactFC {...chartConfigs} />;
}

export default Chart;
