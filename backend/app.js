import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middleware/errorMiddleware.js";
import createTables from "./utils/createTables.js";
import authroute from "./routers/auth.route.js";
const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    tempFileDir: "./upload",
    useTempFiles: true,
  })
);

app.get("/", (req, res) => {
  res.send("<h1>API backend is Running...</h1>");
});
app.use("/api/users", authroute);
createTables();

app.use(errorMiddleware);

export default app;
