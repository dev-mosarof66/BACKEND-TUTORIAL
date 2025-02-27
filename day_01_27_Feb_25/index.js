import express from "express";
import "dotenv/config";

const app = express();

app.use(express.json()); // method to declare middlewares
const PORT = process.env.PORT || 8080;

let teas = [
  {
    id: 1,
    name: "masala tea",
    price: 30,
  },
  {
    id: 2,
    name: "hot coffee",
    price: 50,
  },
];
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

// find the tea data
app.get("/teas/:id", (req, res) => {
  console.log("get method");

  console.log(req.params.id);

  const teaFound = teas.find((t) => t.id === parseInt(req.params.id));
  console.log(teaFound);

  if (teaFound) {
    res.status(201).send(teaFound);
  } else {
    res.status(404).send("Tea not found");
  }
});

// update method
app.put("/teas/:id", (req, res) => {
  // const teaId = req.params.id;
  console.log("put method");

  const { name, price } = req.body;
  const teaId = teas.find((t) => t.id === parseInt(req.params.id));

  if (teaId) {
    (teaId.name = name), (teaId.price = price);
  } else {
    res.status(404).send("Tea not found..");
  }
  res.status(202).send(teas);
});

//delete a tea

app.delete("/teas/:id", (req, res) => {
  // const teaId = teas.find((t) => t.id === parseInt(req.params.id));
  // console.log(teaId);

  const teaId = teas.findIndex((t) => t.id === parseInt(req.params.id));

  // if (teaId) {
  //   teas.splice(req.params.id - 1, 1);
  // } else {
  //   res.status(404).send("tea not found");
  // }
  // console.log(teas);

  if (teaId === -1) {
    res.send("tea not found");
  }
  teas.splice(teaId, 1);

  res.status(203).send(teas);
});

app.listen(PORT, () => {
  console.log(`Server is listening at PORT : ${PORT}`);
});
