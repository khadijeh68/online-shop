import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../config/api";
import {
  getCategory,
  getList,
} from "../../../redux/features/fiestPage/firstPage";
const useStyles = makeStyles({
  page: {
    display: "inline-flex",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    margin: "20px",
    padding: "20px",
    fontFamily: "Vazir-Medium",
  }, title:{
    textDecoration: "none",
    fontFamily: "Vazir-Medium",
    fontSize: "20px"
  },
  img: {
    width: "14rem",
    height: "28rem",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 6px rgb(0 0 0 / 20%)",
  },
});

function XiaomiProduct() {
  const classes = useStyles();
  const [xiaomi, setXiaomi] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getList(3))
      .unwrap()
      .then((res) => setXiaomi(res));
  }, [dispatch]);

  return (
    <div>
       <div>
      <Link className={classes.title} to={`/categories/3`}>شیائومی</Link>
        </div>
      {xiaomi.map((product) => {
        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="text-decoration-none"
          >
            <div className={classes.page}>
              <Card className={classes.img}>
                <Card.Img
                  style={{ width: "100px" }}
                  variant="top"
                  src={`${BASE_URL}/files/${product.image}`}
                  alt="mobile"
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.os}</Card.Text>
                  <Card.Text>{product.weight}</Card.Text>
                  <Card.Text>{product.size}</Card.Text>
                  <Card.Text>{product.price}</Card.Text>
                  <Button variant="primary">افزودن به سبد خرید</Button>
                </Card.Body>
              </Card>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default XiaomiProduct;