const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  uid: String,
  title: String,
  status: {
    type: String,
    enum: ["To Do", "Done"],
    default: "To Do",
  },
});

module.exports = mongoose.model("Task", TaskSchema);