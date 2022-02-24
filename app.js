if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const { errorHandler } = require("./middlewares/errorHandler");

// router import
const router = require("./routes");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use("/", router);

app.use(errorHandler);

// app.listen(PORT, () => console.log("Running in port", PORT));

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
