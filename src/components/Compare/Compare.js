import React, { useState } from "react";
import { Paper, TextField, Button, Typography } from "@material-ui/core";
import CompChart from "../Charts/CompChart";
import useStyles from "../Home/style";

function Compare() {
  const classes = useStyles();

  const [longitude2, setLongitude2] = useState(0);
  const [lattitude2, setLattitude2] = useState(0);
  const [longitude1, setLongitude1] = useState(0);
  const [lattitude1, setLattitude1] = useState(0);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const fetch_Api = async () => {
      const Token = "";
      const Url_1 = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lattitude1}&lon=${longitude1}&appid=${Token}`;
      const response_1 = await fetch(Url_1);
      const resp_1 = await response_1.json();
      console.log(resp_1);
      setValue1(resp_1);
      const Url_2 = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lattitude2}&lon=${longitude2}&appid=${Token}`;
      const response_2 = await fetch(Url_2);
      const resp_2 = await response_2.json();
      console.log(resp_2);
      setValue2(resp_2);
    };
    fetch_Api();
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3} style={{ margin: "auto", height: "200px" }}>
        <form
          onSubmit={handleSubmit}
          className={classes.form}
          noValidate
          autoComplete="off"
          style={{ margin: "auto" }}
        >
          <TextField
            className={classes.text_row1}
            id="standard-basic"
            label="Longitude of City1"
            onChange={(event) => {
              setLongitude1(event.target.value);
            }}
          />

          <TextField
            className={classes.text_row2}
            id="standard-basic"
            label="Latitude of City1"
            onChange={(event) => {
              setLattitude1(event.target.value);
            }}
          />

          <TextField
            className={classes.text_row1}
            id="standard-basic"
            label="Longitude of City2"
            onChange={(event) => {
              setLongitude2(event.target.value);
            }}
          />

          <TextField
            className={classes.text_row2}
            id="standard-basic"
            label="Latitude of City2"
            onChange={(event) => {
              setLattitude2(event.target.value);
            }}
          />
          <br />
          <br />
          <Button
            className={classes.button}
            onClick={handleSubmit}
            type="submit"
          >
            <Typography variant="h6" className={classes.title}>
              Search
            </Typography>
          </Button>
        </form>
      </Paper>
      <br />
      <br />
      {!value1 || !value2 ? (
        <></>
      ) : (
        <Paper
          elevation={3}
          style={{ height: "400px", width: "700px", margin: "auto" }}
        >
          <CompChart data1={value1} data2={value2} className={classes.chart} />
        </Paper>
      )}
    </div>
  );
}

export default Compare;
