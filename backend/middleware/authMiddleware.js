import jwt from "jsonwebtoken";
import { catchAsyncError } from "./catchAsyncError.js";
import pool from "../config/database.js";
import ErrorHandler from "./errorMiddleware.js";

export const authentication = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("please login to access this resources", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  const getUser = await pool.query("SELECT * FROM users WHERE id=$1 LIMIT 1", [
    decoded.id,
  ]);

  req.user = getUser.rows[0];
  next();
});
