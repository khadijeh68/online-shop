import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../redux/features/orders/ordersSlice";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  page: {
    direction: "ltr",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: "20px"
  }
})

function Orders() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const ordersList = useSelector((state) => state.orders.ordersList);
  const [currentPage, setCurrentPage] = useState("");


  useEffect(() => {
    dispatch(fetchOrders(currentPage));
  }, [currentPage]);

  return (
    <div className="orders">
      <div className="d-flex flex-row justify-content-between">
        <h6 className="mx-2">مدیریت سفارش ها</h6>

        <div className="d-flex flex-row mx-3">
          <span className="px-2">سفارش های تحویل شده </span>
          <Form.Check type="radio" aria-label="radio 1" name="group1" />

          <span className="px-2" style={{ marginRight: "20px" }}>
            سفارش های در حال انتظار{" "}
          </span>
          <Form.Check type="radio" aria-label="radio 1" name="group1" />
        </div>
      </div>

      <Table striped bordered hover className="w-75 text-center order_table">
        <thead>
          <tr>
            <th>نام کاربر</th>
            <th>مجموع مبلغ </th>
            <th>زمان ثبت سفارش</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ordersList.length &&
            ordersList.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    {item.username} {item.lastname}
                  </td>
                  <td>{item.prices}</td>
                  {/* <td>{`${item.createdAt}`}</td> */}
                  <td>-</td>
                  <td>
                    <Button variant="warning">بررسی سفارش</Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <Pagination className={classes.page}
        count={2} variant="outlined" color="secondary"
        onClick={(e) => setCurrentPage(e.target.textContent)}
      />
    </div>
  );
}

export default Orders;
