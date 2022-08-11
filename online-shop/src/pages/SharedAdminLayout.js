import { makeStyles } from "@material-ui/core/styles";
import { Outlet } from "react-router-dom";
import Login from "./Login";

const useStyles = makeStyles({
  h3: {
    margin: "70px 20px",
    fontFamily: "Vazir-Medium",
  },
});

function SharedAdminLayout() {
  const classes = useStyles();
  return (
    <div className={classes.h3}>
      <Login/>
      <Outlet/>
    </div>
  );
}

export default SharedAdminLayout;