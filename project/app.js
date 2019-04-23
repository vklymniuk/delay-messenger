const express = require("express");
const config = require("./config");
const bodyParser = require('body-parser');
const { logError, logInfo } = require("./logger");
const cors = require("cors");
const createMessage = require("./src/routes/messages");
require("./src/events/event-emitter");

/**
 * Used to handle and display delay messages.
 */
const worker = require("./src/worker/message-processor");

let app = express();

//configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({maxAge: 3600}));
app.use('/echoAtTime', createMessage);

app.listen(config.httpPort, function onReady () {
    logInfo(`Web server is listening on port ${ config.httpPort }`);
});

process.on("unhandledRejection", async (reason, p) => {
    logError(`Unhandled rejection occurred, reason: ${ reason }`, p);
    process.exit(1);
});

worker.run(config.workerInterval);

module.exports = app;