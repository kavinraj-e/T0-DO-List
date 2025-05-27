const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

router.get("/", async (req, res) => {
  const { uid } = req.headers;
  const tasks = await Task.find({ uid });
  res.json(tasks);
});

router.post("/", async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

router.put("/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
});

module.exports = router;