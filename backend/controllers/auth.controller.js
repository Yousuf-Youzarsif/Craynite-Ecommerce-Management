import ErrorHandler from "../middleware/errorMiddleware.js";
import { catchAsyncError } from "../middleware/catchAsyncError.js";
import pool from "../config/database.js";
import bcrypt from "bcrypt";
import { sendToken } from "../utils/jwtTokens.js";

//Register..
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

//Login..
export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please provide email or password!", 400));
  }
  const existingUser = await pool.query("SELECT * FROM users WHERE email=$1", [
    email,
  ]);
  const user = existingUser.rows[0];

  if (!user) {
    return next(new ErrorHandler("Invalid Credential", 401));
  }
  const pwdCompare = await bcrypt.compare(password, user.password);

  if (!pwdCompare) {
    return next(new ErrorHandler("Invalid Credential", 401));
  }

  sendToken(user, 200, "Logged in", res);
});

//get user
export const getUser = catchAsyncError(async (req, res, next) => {
  const { user } = req;
  res.status(200).json({
    success: true,
    message: "user detail fetched Successfully!",
    user,
  });
});

//logout
export const logout = catchAsyncError(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .json({
      success: true,
      message: "Logged out successfully.",
    });
});
