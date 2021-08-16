import React, { useState } from "react";
import { Paper, TextField, Typography, Button } from "@material-ui/core";
import Chart from "../Charts/Chart";
import useStyles from "./style";

function Home() {
  const classes = useStyles();

  const [longitude, setLongitude] = useState(0);
  const [lattitude, setLattitude] = useState(0);
  const [value, setValue] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const fetch_Api = async () => {
      const TOKEN = "";
      const Base_Url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lattitude}&lon=${longitude}&appid=${TOKEN}`;
      const response = await fetch(Base_Url);
      const resp = await response.json();
      setValue(resp);
    };
    fetch_Api();
  };

  return (
    <>
      <div className={classes.root}>
        <Paper elevation={3} style={{ margin: "auto" }}>
          <form
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            style={{ margin: "auto" }}
          >
            <TextField
              className={classes.text_row1}
              id="standard-basic"
              label="Longitude of City"
              onChange={(event) => {
                setLongitude(event.target.value);
              }}
            />

            <TextField
              className={classes.text_row2}
              id="standard-basic"
              label="Latitude of City"
              onChange={(event) => {
                setLattitude(event.target.value);
              }}
            />
            <br />
            <br />
            <Button
              className={classes.button}
              onClick={handleSubmit}
              type="submit"
            >
              <Typography className={classes.title}>Search</Typography>
            </Button>
          </form>
        </Paper>
        <br />
        <br />

        {!value ? (
          <></>
        ) : (
          <Paper
            elevation={3}
            style={{ height: "400px", width: "700px", margin: "auto" }}
          >
            <Chart data={value} className={classes.chart} />
          </Paper>
        )}
      </div>
    </>
  );
}

export default Home;
