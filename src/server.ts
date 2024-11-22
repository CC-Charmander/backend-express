const express = require("express");
const cors = require("cors");
import router from "./routes/routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
