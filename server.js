import dotenv from 'dotenv';
dotenv.config({ path: 'dotenv' })
import express from "express";
import { db } from "./db.js";
import roomsRoute from "./routes/roomsRouter.js";
import userRouter from "./routes/userRouter.js";
import bookingsRouter from "./routes/bookingsRouter.js";
import cors from 'cors'
// import { config as dotenvConfig } from 'dotenv';

app.use(cors());
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;
// console.log(process.env.PORT);


app.use("/api/mern_rooms", roomsRoute);
app.use("/api/users", userRouter);
app.use("/api/bookings", bookingsRouter);

app.listen(port, () => {
  console.log("Listening on port " + port);
});
