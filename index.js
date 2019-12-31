const express = require("express");
const API_PORT = process.env.PORT || 5000;
const app = express();
const router = express.Router();


app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));