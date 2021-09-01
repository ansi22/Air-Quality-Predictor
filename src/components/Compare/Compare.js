import React, { useState } from "react";
import { Paper, TextField, Button, Typography } from "@material-ui/core";
import CompChart from "../Charts/CompChart";
import useStyles from "./style";

function Compare() {
  const classes = useStyles();

  const [longitude2, setLongitude2] = useState("");
  const [lattitude2, setLattitude2] = useState("");
  const [longitude1, setLongitude1] = useState("");
  const [lattitude1, setLattitude1] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      longitude1 === "" ||
      longitude2 === "" ||
      lattitude1 === "" ||
      lattitude2 === ""
    ) {
    } else {
      const fetch_Api = async () => {
        const Token = "b1908671c1b010b4c1af0e6dfba10397";
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
    }
  };

  return (
    <div className={classes.root}>
      <Paper elevation={6} style={{ margin: "auto", height: "250px" }}>
        <form
          onSubmit={handleSubmit}
          className={classes.form}
          noValidate
          autoComplete="off"
          style={{ margin: "auto" }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <TextField
              className={classes.text_row1}
              id="standard-basic"
              label="Longitude of City1"
              onChange={(event) => {
                setLongitude1(event.target.value);
              }}
              error={longitude1 === ""}
              helperText={longitude1 === "" ? "Required" : " "}
            />

            <TextField
              className={classes.text_row2}
              id="standard-basic"
              label="Latitude of City1"
              onChange={(event) => {
                setLattitude1(event.target.value);
              }}
              error={lattitude1 === ""}
              helperText={lattitude1 === "" ? "Required" : " "}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <TextField
              className={classes.text_row1}
              id="standard-basic"
              label="Longitude of City2"
              onChange={(event) => {
                setLongitude2(event.target.value);
              }}
              error={longitude2 === ""}
              helperText={longitude2 === "" ? "Required" : " "}
            />

            <TextField
              className={classes.text_row2}
              id="standard-basic"
              label="Latitude of City2"
              onChange={(event) => {
                setLattitude2(event.target.value);
              }}
              error={lattitude2 === ""}
              helperText={lattitude2 === "" ? "Required" : " "}
            />
          </div>

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
        <Paper elevation={6} className={classes.paper}>
          <CompChart data1={value1} data2={value2} className={classes.chart} />
        </Paper>
      )}
    </div>
  );
}

export default Compare;
