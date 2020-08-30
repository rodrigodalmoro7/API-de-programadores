const express = require("express");

const { uuid, isUuid } = require("uuidv4");

const { response } = require("express");
const app = express();
app.use(express.json());

const devs = [];

const port = 3334;

//array

app.listen(port, () => {
  console.log(`Back-end started! Up on PORT ${port}`);
});

//GET
app.get("/devs", (req, res) => {
  const { firstname } = req.query;

  const results = firstname
    ? devs.filter((dev) =>
        dev.firstname.toLowerCase().includes(firstname.toLowerCase())
      )
    : devs;

  return res.json(results);
  //   [
  // "firstname",
  // "lastName",
  // "age",
  // "company",
  // "technology",
  //   ]);
});

//POST
app.post("/devs", (req, res) => {
  const { firstname, lastName, age, company, technology } = req.body;
  const dev = { id: uuid(), firstname, lastName, age, company, technology };

  devs.push(dev);

  return res.json(dev);
});

//PUT
//http://localhost:3334/
app.put("/devs/:id", (req, res) => {
  const { id } = req.params;
  const { firstname, lastName, age, company, technology } = req.body;

  const devIndex = devs.findIndex((dev) => dev.id === id);

  if (devIndex < 0) {
    return res.status(400).json({ error: "Ow, sorry, Dev not found." });
  }

  const dev = { id, firstname, lastName, age, company, technology };

  devs[devIndex] = dev;

  return response.json(dev);
});

app.delete("/devs/:id", (req, res) => {
  const { id } = req.params;
  const { firstname, lastName, age, company, technology } = req.body;

  const devIndex = devs.findIndex((dev) => dev.id === id);

  const dev = { id, firstname, lastName, age, company, technology };

  devs.splice(devIndex, 1);

  return response.json(devs);
});
