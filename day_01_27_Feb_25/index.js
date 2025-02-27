import express from "express";

const app = express();

app.use(express.json()); // method to declare middlewares
const PORT = 8080;

let teas = [];
let index = 1;

app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = {
    id: index++,
    name,
    price,
  };
  teas.push(newTea);

  res.status(201).send(teas);
});

app.get("/teas", (req, res) => {
  res.status(200).send(teas);
});

app.get("/teas/:id", (req, res) => {
  console.log(req.params.id);

  const teaFound = teas.find((t) => parseInt(t.id === req.params.id));
  console.log(teaFound);

  if (!teaFound) {
    res.status(404).send("Tea not found");
  }
  res.status(201).send(`tea found. You searched this ${teaFound}`);
});

app.listen(PORT, () => {
  console.log(`Server is listening at PORT : ${PORT}`);
});
