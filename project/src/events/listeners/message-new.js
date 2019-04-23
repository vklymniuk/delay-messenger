const eventEmitter = require('../event-emitter');
const events = require('../types');
const {logError, logDebug} = require('../../../logger');
const pipelineManager = require('../../service/pipeline-manager');

/**
 * Fire event to process scheduled message
 *
 * @param {MessageEvent} event
 */
eventEmitter.on(events.MESSAGE_NEW, async (event) => {

    try {
        await pipelineManager.schedule(event.id, event.time);
        logDebug(`Message id: ${event.id} time: ${new Date(event.time)} - SCHEDULED. Date: ${new Date()}`);

    } catch (err) {
        logError(err);
    }
});
