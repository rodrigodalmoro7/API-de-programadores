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
  return response.json(["Dev infos..."]);
});

app.delete("/devs/:id", (req, res) => {
  return response.json(["dev infos..."]);
});
