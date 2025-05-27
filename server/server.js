const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

try {
    
mongoose.connect("mongodb://localhost:27017/todoApp");
console.log("Connected to MongoDB");
    
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if connection fails
}

app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);

app.listen(5000, () => console.log("Server started on port 5000"));