const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");

// Getting all
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting one
router.get("/:id", (req, res) => {
  res.send("Info for " + req.params.id);
});

// Creating one
router.post("/", async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel,
  });
  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating one
// not put. put will relace everything, patch will just replace what was input.
router.patch("/", (req, res) => {});

// Deleting one
router.delete("/", (req, res) => {});

module.exports = router;
