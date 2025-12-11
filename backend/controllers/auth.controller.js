import ErrorHandler from "../middleware/errorMiddleware.js";
import { catchAsyncError } from "../middleware/catchAsyncError.js";
import pool from "../config/database.js";
import bcrypt from "bcrypt";
import { sendToken } from "../utils/jwtTokens.js";

export const register = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return next(new ErrorHandler("All field required!", 400));
  }
  const query = "SELECT * FROM users WHERE email=$1";
  const isAlreadyRegister = await pool.query(query, [email]);

  if (isAlreadyRegister.rows.length > 0) {
    return next(new ErrorHandler("User already Registered!", 400));
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const result = await pool.query(
    `INSERT INTO users(name,email,password) VALUES($1,$2,$3) RETURNING *`,
    [name, email, hashPassword]
  );
  const user = result.rows[0];
  sendToken(user, 201, "Registered Successfully!", res);
});
