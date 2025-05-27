const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

try {
    
mongoose.connect("mongodb+srv://kavinraje2022cse:admin123@cluster0.ssphf4t.mongodb.net/totodao?retryWrites=true&w=majority&appName=Cluster0");
console.log("Connected to MongoDB");
    
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if connection fails
}

app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;  // fallback to 5000 if PORT not set

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
