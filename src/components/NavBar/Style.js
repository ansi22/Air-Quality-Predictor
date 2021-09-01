import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white",
    fontFamily: "Andada Pro",
    fontSize: "25px",
  },
  title_1: {
    flexGrow: 1,
    color: "white",
    fontFamily: "Andada Pro",
    fontSize: "15px",
  },

  icon: {
    color: "white",
    fontSize: "30px",
    padding: "2px",
  },
  [theme.breakpoints.down("sm")]: {
    title: {
      fontSize: "17px",
    },
    title_1: {
      fontSize: "12px",
    },
    icon: {
      fontSize: "25px",
    },
  },
}));
