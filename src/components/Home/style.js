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
      height: theme.spacing(20),
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
}));
