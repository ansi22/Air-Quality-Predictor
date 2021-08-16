import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";
import CompareIcon from "@material-ui/icons/Compare";
import BlurOnIcon from "@material-ui/icons/BlurOn";
import { NavLink } from "react-router-dom";
import useStyles from "./Style";

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: "#6D6F91" }}>
        <Toolbar>
          <BlurOnIcon style={{ color: "white", fontSize: "30px" }} />
          <Typography variant="h6" className={classes.title}>
            Pollution-Forecast
          </Typography>

          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Button>
              <HomeIcon
                style={{ color: "white", fontSize: "30px", padding: "2px" }}
              />
              <Typography className={classes.title_1}>Home</Typography>
            </Button>
          </NavLink>

          <NavLink to="/compare" style={{ textDecoration: "none" }}>
            <Button>
              <CompareIcon style={{ color: "white", fontSize: "30px" }} />
              <Typography className={classes.title_1}>Compare</Typography>
            </Button>
          </NavLink>

          <Button>
            <a href="https://github.com/Ansi-Q">
              <GitHubIcon style={{ color: "white", fontSize: "28px" }} />
            </a>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
