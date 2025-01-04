const express = require("express");
const config = require("./config/config");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { consumer } = require("./services/kafkaService");
const { processMessage } = require("./services/notificationProcessor");
const notificationRoutes = require("./routes/notificationRoutes");
const app = express();
app.use(bodyParser.json());
mongoose.connect(config.mongoURI);
require("./scheduler")
consumer.on("message", processMessage);
app.use("/api", notificationRoutes);
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
