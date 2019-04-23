let pipelineManager = require('../service/pipeline-manager');
let messageManager = require('../service/message-manager');
const {logError, logInfo, logDebug} = require('../../logger');

/**
 * @param {MessageSchema} pipelineMessage
 */
async function processMessage(pipelineMessage) {

    await pipelineManager.process(pipelineMessage.id, pipelineMessage.time);
    const message = await messageManager.extract(pipelineMessage.id);

    logInfo(`Date: ${new Date().getTime()} Message: ${message.msg} Planned: ${message.time}`);

    await pipelineManager.finish(pipelineMessage.id, pipelineMessage.time);
}

/**
 * @param {Number} interval
 */
module.exports.run = function (interval) {
    setInterval(async () => {
        try {
            logDebug(`Message-processor. Start`, {status: 'start', date: new Date()});

            let pipelineMessage;
            pipelineMessage = await pipelineManager.findUnprocessedMessage();

            if (null === pipelineMessage) {
                pipelineMessage = await pipelineManager.findScheduledMessage();
            }

            if (pipelineMessage && (+pipelineMessage.time < +(new Date()) + 1000)) {
                await pipelineManager.pending(pipelineMessage.id, pipelineMessage.time);
            }

            const pendingMessage = await pipelineManager.findPendingMessage();

            if (pendingMessage) {
                await processMessage(pipelineMessage);
            }

            logDebug(`Message-processor. Finish`, {status: 'finish',date: new Date()});
        } catch (e) {
            logError(e);
            logInfo('Exiting <SigInt>.');
            process.emit("SIGINT");
        }

    }, interval * 1000);
};

//
// loopEvery(interval * 1000, async function () {
//
//     let pipelineMessage;
//     pipelineMessage = await pipelineManager.findUnprocessedMessage();
//
//     if (null === pipelineMessage) {
//         pipelineMessage = await pipelineManager.findScheduledMessage();
//     }
//
//     if (pipelineMessage && (+pipelineMessage.time < +(new Date()) + 1000)) {
//         await pipelineManager.pending(pipelineMessage.id, pipelineMessage.time);
//     }
//
//     const pendingMessage = await pipelineManager.findPendingMessage();
//
//     if (pendingMessage) {
//         await processMessage(pipelineMessage);
//     }
// });
//

// /**
//  * @param {Number}   interval
//  * @param {Function} f
//  *
//  * @returns {Promise<void>}
//  */
// async function loopEvery (interval, f) {
//
//     while (true) {
//
//         const startTime = Date.now();
//
//         try {
//             await f();
//         } catch (e) {
//             logError(e);
//             info("Exiting <SigInt>.");
//             process.emit("SIGINT");
//         }
//
//         const wait = Math.max(0, interval + startTime - Date.now());
//
//         if (wait > 0) {
//             logInfo(`Waiting ${ Math.floor(wait / 10) / 100 } seconds before the next run...`)
//         }
//
//         await new Promise(resolve => setTimeout(resolve, wait));
//
//     }
// }