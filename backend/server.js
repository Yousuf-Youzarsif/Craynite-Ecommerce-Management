import app from "./app.js";
import { v2 as cloudinary } from "cloudinary";
import pool from "./config/database.js";
import createTables from "./utils/createTables.js";
const PORT = process.env.PORT;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

//check cloudinary connected or not

cloudinary.api
  .ping()
  .then(() => {
    console.log(`Cloudinary connected Successfully!`);
  })
  .catch((err) => {
    console.log(`cloudinary Failed to connect`, err);
  });

async function server() {
  try {
    //database connect
    await pool.query("SELECT NOW()");
    console.log(`Database is connected Successfully!`);

    //server connect
    app.listen(PORT, () => {
      console.log(`server is running on Port: ${PORT}`);
    });
  } catch (error) {
    console.error("Internal server Error", error);
    process.exit(1);
  }
}
createTables();

server();
