const eventEmitter = require('../event-emitter');
const events = require('../types');
const {logError, logDebug} = require('../../../logger');
const messageManager = require('../../service/message-manager');

/**
 * Cleanup
 *
 * @param {MessageEvent} event
 */
eventEmitter.on(events.MESSAGE_REMOVING, async (event) => {

    try {
        await messageManager.remove(event.id);
        logDebug(`Message id: ${event.id} time: ${new Date(event.time)} - REMOVED. Date: ${new Date()}`);

    } catch (err) {
        logError(err);
    }
});