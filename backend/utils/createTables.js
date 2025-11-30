import { createUserTable } from "../models/userTable.js";
import { createOrdersTable } from "../models/ordersTable.js";
import { createPaymentsTable } from "../models/paymentsTable.js";
import { CreateProductsTable } from "../models/productsTable.js";
import { createProductReviewsTable } from "../models/productReviewsTable.js";
import { createOrderItemsTable } from "../models/orderItemsTable.js";
import { createShippingInfoTable } from "../models/shippinginfoTable.js";

const createTables = async () => {
  try {
    await createUserTable();
    await createOrdersTable();
    await createPaymentsTable();
    await CreateProductsTable();
    await createProductReviewsTable();
    await createOrderItemsTable();
    await createShippingInfoTable();
    console.log("Tables Created Successfully!");
  } catch (error) {
    console.error("failed to create all Table", error);
  }
};

export default createTables;
