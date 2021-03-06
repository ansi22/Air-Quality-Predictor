import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: "1",
    display: "block",
    flexWrap: "wrap",
    marginTop: "100px",

    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(70),
      height: theme.spacing(18),
    },
  },
  text_row1: {
    marginLeft: "70px",
    marginTop: "10px",
  },
  text_row2: {
    marginLeft: "40px",
    marginTop: "10px",
  },
  button: {
    background: "#6D6F91",
    marginLeft: "240px",
  },
  chart: {
    margin: "auto",
    marginTop: "50px",
  },
  title: {
    flexGrow: 1,
    color: "white",
    fontSize: "15px",
  },
  paper: {
    height: "400px",
    width: "700px",
    margin: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(58),
        height: theme.spacing(18),
      },
    },
    text_row1: {
      marginLeft: "30px",
    },
    text_row2: {
      marginLeft: "15px",
    },
    button: {
      background: "#6D6F91",
      marginLeft: "190px",
    },
    paper: {
      height: "380px",
      width: "450px",
      margin: "auto",
    },
  },
}));
