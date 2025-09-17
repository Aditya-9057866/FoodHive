const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");

const app = express();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const donateRoutes = require("./routes/donateRoute");
const reviewRoutes = require("./routes/reviewRoute");
const requestRoutes = require("./routes/requestRoute");

connectDB();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true,
  })
);

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("hey there cutie");
});

app.use("/api/user", userRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/donate", donateRoutes);
app.use("/api/request", requestRoutes);
app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
