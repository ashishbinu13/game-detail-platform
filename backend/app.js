const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server started on PORT: ${PORT}`);
});
