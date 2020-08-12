const express = require("express");

const app = express();

const port = 3334;

app.listen(port, () => {
  console.log(`Back-end started! Up on PORT ${port}`);
});
