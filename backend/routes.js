
const express = require("express");
const axios = require("axios");
const Story = require("./models/Story");

const router = express.Router();

// Fetch baby names from the API
router.get("/baby-names", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.babynames.com/v1/names/?gender=both&start=A&count=10"
    );
    res.json(response.data.names);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

// Save a story to MongoDB (if needed)
router.post("/save-story", async (req, res) => {
  try {
    // Implementation for saving stories to MongoDB goes here if necessary
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

module.exports = router;
