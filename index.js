const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const route = express.Router();
const Ducks = require("./models/Ducks");

app.get("/mallarDuck", (req, res) => {
  const ducks = new Ducks.Ducks();
  console.log("MALLARDUCK ACTION");
  console.log(ducks.mallarDuck());
});
app.get("/paperDuck", (req, res) => {
  const ducks = new Ducks.Ducks();
  console.log("PAPERDUCK ACTION");
  console.log(ducks.paperDuck());
});
app.get("/woodDuck", (req, res) => {
  const ducks = new Ducks.Ducks();
  console.log("WOODDUCK ACTION");
  console.log(ducks.woodDuck());
});

app.use("/", route);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
  console.log('----------------------------------------------');
});
