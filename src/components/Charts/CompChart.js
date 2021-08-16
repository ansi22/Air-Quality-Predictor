import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

function CompChart(props) {
  var aqi_1 = props.data1.list[0].main.aqi;
  var quality_1 = "";
  if (aqi_1 === 1) {
    quality_1 = "Good";
  } else if (aqi_1 === 2) {
    quality_1 = "Fair";
  } else if (aqi_1 === 3) {
    quality_1 = "Moderate";
  } else if (aqi_1 === 4) {
    quality_1 = "Poor";
  } else if (aqi_1 === 5) {
    quality_1 = "Very Poor";
  }

  var aqi_2 = props.data2.list[0].main.aqi;
  var quality_2 = "";
  if (aqi_2 === 1) {
    quality_2 = "Good";
  } else if (aqi_2 === 2) {
    quality_2 = "Fair";
  } else if (aqi_2 === 3) {
    quality_2 = "Moderate";
  } else if (aqi_2 === 4) {
    quality_2 = "Poor";
  } else if (aqi_2 === 5) {
    quality_2 = "Very Poor";
  }

  const chartConfigs = {
    type: "mscolumn3d",
    width: "700",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption:
          "City With Co-Ordinates { " +
          props.data1.coord.lon.toString() +
          ", " +
          props.data1.coord.lat.toString() +
          " } has " +
          quality_1 +
          " Air Quality! & City With Co-Ordinates { " +
          props.data2.coord.lon.toString() +
          ", " +
          props.data2.coord.lat.toString() +
          " } has " +
          quality_2 +
          " Air Quality!",
        subCaption: "Concentration of various components are shown below.",
        xAxisName: "Components",
        yAxisName: "Concentration in (μg/m3)",
        theme: "fusion",
      },
      categories: [
        {
          category: [
            {
              label: "CO",
            },
            {
              label: "NO",
            },
            {
              label: "No2",
            },
            {
              label: "O3",
            },
            {
              label: "SO2",
            },
            {
              label: "PM2.5",
            },
            {
              label: "PM10",
            },
            {
              label: "NH3",
            },
          ],
        },
      ],
      dataset: [
        {
          seriesname: "City 1",
          data: [
            {
              value: props.data1.list[0].components.co.toString(),
            },
            {
              value: props.data1.list[0].components.no.toString(),
            },
            {
              value: props.data1.list[0].components.no2.toString(),
            },
            {
              value: props.data1.list[0].components.o3.toString(),
            },
            {
              value: props.data1.list[0].components.so2.toString(),
            },
            {
              value: props.data1.list[0].components.pm2_5.toString(),
            },
            {
              value: props.data1.list[0].components.pm10.toString(),
            },
            {
              value: props.data1.list[0].components.nh3.toString(),
            },
          ],
        },
        {
          seriesname: "City 2",
          data: [
            {
              value: props.data2.list[0].components.co.toString(),
            },
            {
              value: props.data2.list[0].components.no.toString(),
            },
            {
              value: props.data2.list[0].components.no2.toString(),
            },
            {
              value: props.data2.list[0].components.o3.toString(),
            },
            {
              value: props.data2.list[0].components.so2.toString(),
            },
            {
              value: props.data2.list[0].components.pm2_5.toString(),
            },
            {
              value: props.data2.list[0].components.pm10.toString(),
            },
            {
              value: props.data2.list[0].components.nh3.toString(),
            },
          ],
        },
      ],
    },
  };

  return <ReactFC {...chartConfigs} />;
}

export default CompChart;
