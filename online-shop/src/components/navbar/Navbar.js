import { NavLink } from "react-router-dom";
import { IconButton, InputBase, makeStyles, Paper } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

const useStyles = makeStyles({
  nav: {
    direction: "rtl",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    width: "100vw",
    height: "50px",
    boxShadow: "0 0 6px rgb(0 0 0 / 40%)",
    position: "fixed",
    zIndex: "100",
  },
  span: {
    textDecoration: "none",
    margin: "10px",
    fontFamily: "Vazir-Medium",
    color: "inherit",
  },
  // input: {
  //   width: "600px",
  //   borderRadius: "5px",
  // },
  basket: {
    display: "flex",
    justifyContent: "center",
  },
  leftNav: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  form: {
    backgroundColor: "whitesmoke",
  },
  logo: {
    color: "#D43C37",
  },
});

function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.nav}>
        <div className={classes.rightNav}>
          <NavLink to="/" className={classes.span}>
            <span className={classes.logo}>
              فروشگاه آنلاین موبایل و لوازم جانبی{" "}
            </span>
          </NavLink>

          <NavLink to="/" className={classes.span}>
            <span>صفحه اصلی </span>
          </NavLink>

          <NavLink to="/categories" className={classes.span}>
            <span>دسته بندی کالاها </span>
          </NavLink>

          <NavLink to="/products" className={classes.span}>
            <span>کالاها</span>
          </NavLink>
        </div>

        {/* <div className={classes.input}>
          <Paper component="form" className={classes.form}>
            <IconButton type="submit">
              <SearchIcon />
            </IconButton>
            <InputBase type="search"  placeholder="جستجو..." />
          </Paper>
        </div> */}

        <div className={classes.leftNav}>
          <NavLink to="/login" className={classes.span}>
            <span>مدیریت </span>
          </NavLink>

          <NavLink to="/shoppingCart" className={classes.span}>
            <div className={classes.basket}>
              <ShoppingCartSharpIcon />
              <span>سبد خرید </span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;