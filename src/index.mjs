import express from "express";

const app = express();
const PORT = 3000;

// middleware to read JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Student API Running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});