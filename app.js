const bodyParser = require("body-parser");
const express = require("express");
const sequelize = require("sequelize");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;
const apiRoutes = require("./routes/apiRoutes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", apiRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
  });
});
