import React, { useState } from "react";
import { Paper, TextField, Typography, Button } from "@material-ui/core";
import Chart from "../Charts/Chart";
import useStyles from "./style";

function Home() {
  const classes = useStyles();

  const [longitude, setLongitude] = useState("");
  const [lattitude, setLattitude] = useState("");
  const [value, setValue] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (longitude === "" || lattitude === "") {
    } else {
      const fetch_Api = async () => {
        const TOKEN = "b1908671c1b010b4c1af0e6dfba10397";
        const Base_Url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lattitude}&lon=${longitude}&appid=${TOKEN}`;
        const response = await fetch(Base_Url);
        const resp = await response.json();
        setValue(resp);
      };
      fetch_Api();
    }
  };

  return (
    <>
      <div className={classes.root}>
        <Paper elevation={6} style={{ margin: "auto" }}>
          <form
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            style={{ margin: "auto" }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <TextField
                className={classes.text_row1}
                id="standard-basic"
                label="Longitude of City"
                onChange={(event) => {
                  setLongitude(event.target.value);
                }}
                error={longitude === ""}
                helperText={longitude === "" ? "Required" : " "}
              />

              <TextField
                className={classes.text_row2}
                id="standard-basic"
                label="Latitude of City"
                onChange={(event) => {
                  setLattitude(event.target.value);
                }}
                error={lattitude === ""}
                helperText={lattitude === "" ? "Required" : " "}
              />
            </div>

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
          <Paper elevation={6} className={classes.paper}>
            <Chart data={value} className={classes.chart} />
          </Paper>
        )}
      </div>
    </>
  );
}

export default Home;
