const eventEmitter = require('../event-emitter');
const events = require('../types');
const {logError, logDebug} = require('../../../logger');
const pipelineManager = require('../../service/pipeline-manager');
const {store} = require('../../repository/messages-event-store');

/**
 * Terminate message processing
 *
 * @param {MessageEvent} event
 */
eventEmitter.on(events.MESSAGE_PROCESSED, async (event) => {

    try {
        await pipelineManager.finish(event.id);
        logDebug(`Message id: ${event.id} time: ${new Date(event.time)} - PROCESSED. Date: ${new Date()}`);

        await store(event, events.MESSAGE_REMOVING);

    } catch (err) {
        logError(err);
    }
});