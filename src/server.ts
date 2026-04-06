import dotenv from "dotenv";
dotenv.config();

import express from "express";
import indexRoutes from "./routes/index"; 

const app = express();

// Used the routes
app.use("/", indexRoutes);  



const PORT = process.env.PORT || 1010;

app.listen(PORT, () => {
  console.log(`Server is running wildly on http://localhost:${PORT}`);
});