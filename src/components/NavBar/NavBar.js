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
          <BlurOnIcon className={classes.icon} />
          <Typography variant="h6" className={classes.title}>
            Pollution-Forecast
          </Typography>

          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Button>
              <HomeIcon className={classes.icon} />
              <Typography className={classes.title_1}>Home</Typography>
            </Button>
          </NavLink>

          <NavLink to="/compare" style={{ textDecoration: "none" }}>
            <Button>
              <CompareIcon className={classes.icon} />
              <Typography className={classes.title_1}>Compare</Typography>
            </Button>
          </NavLink>

          <Button>
            <a href="https://github.com/Ansi-Q">
              <GitHubIcon className={classes.icon} />
            </a>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
