import { configureStore } from "@reduxjs/toolkit";
import ordersSlice from "./orders/ordersSlice";
import productSlice from "./product/productSlice";
import categorySlice from "./category/categorySlice"
import usersSlice from "./user/usersSlice";
import { firstPageSlice } from "./fiestPage/firstPage";
import productDetailSlice from "./productDetail/productDetailSlice";
import cartSlice from "./cart/cartSlice";


export const store = configureStore({
  reducer: {
    products: productSlice,
    orders: ordersSlice,
    categories: categorySlice,
    users: usersSlice,
    list:firstPageSlice,
    product:productDetailSlice,
    cart:cartSlice
  },
});
