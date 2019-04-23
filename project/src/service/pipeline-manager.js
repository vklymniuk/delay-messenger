const redis = require('../../redis');
const events = require("../events/types");
const eventEmitter = require("../events/event-emitter");
const MessageEvent = require("../events/types/message-event");
const PipelineMessageSchema = require("../modeles/pipeline-message-schema");
const {logError, logDebug} = require('../../logger');

/**
 * Pipeline - step 1.
 *
 * @param {String} id - Message id.
 * @param {Number} time When message should be posted.
 *
 * @returns {Promise<void>}
 */
module.exports.schedule = async function (id, time) {
    try {
        logDebug(id, 'schedule');
        await redis.zadd('scheduled', time, id);

        eventEmitter.emit(events.MESSAGE_SCHEDULED, new MessageEvent(id, time));
    } catch (e) {
        logError(e);
    }
};

/**
 * Pipeline - step 2.
 *
 * @param {String} id - Message id.
 * @param {Number} time When message should be posted.
 *
 * @returns {Promise<void>}
 */
module.exports.pending = async function (id, time) {
    try {
        logDebug(id, 'pending');
        await redis.zadd('pending', time, id);
        await redis.zrem('scheduled', id);
        // await redis.multi()
        //     .zadd('pending', time, id)
        //     .zrem('scheduled', time, id)
        //     .exec();

        eventEmitter.emit(events.MESSAGE_PENDING, new MessageEvent(id, time));
    } catch (e) {
        logError(e);

        throw e;
    }
};

/**
 * Pipeline - step 3.
 *
 * @param {String} id - Message id.
 * @param {Number} time - When message should be posted.
 *
 * @returns {Promise<void>}
 */
module.exports.process = async function (id, time) {
    try {
        logDebug(id, 'process');
        await redis.zadd('processing', time, id);
        await redis.zrem('pending', id);

        eventEmitter.emit(events.MESSAGE_PROCESSING, new MessageEvent(id, time));
    } catch (e) {
        logError(e);
    }
};

/**
 * Pipeline - step 4.
 *
 * @param {String} id - Message id.
 *
 * @returns {Promise<void>}
 */
module.exports.finish = async function (id) {
    try {
        logDebug(id, 'finish');
        await redis.zrem('processing', id);

        eventEmitter.emit(events.MESSAGE_REMOVED, new MessageEvent(id, null));
    } catch (e) {
        logError(e);
    }
};

/**
 * @returns {Promise<PipelineMessageSchema|null>}
 */
module.exports.findScheduledMessage = async function () {

    let [id, time] = await redis.zpopmin('scheduled');
    logDebug(id, 'findScheduledMessage');

    if (id && time) {
        return new PipelineMessageSchema(id, time);
    }

    return null;
};

/**
 * @returns {Promise<PipelineMessageSchema|null>}
 */
module.exports.findPendingMessage = async function () {

    let [id, time] = await redis.zpopmin('pending');
    logDebug(id, 'findPendingMessage');

    if (id) {
        return new PipelineMessageSchema(id, time);
    }

    return null;
};


/**
 * @returns {Promise<PipelineMessageSchema|null>}
 */
module.exports.findUnprocessedMessage = async function () {

    let [id, time] = await redis.zpopmin('processing');
    logDebug(id, 'findUnprocessedMessage');

    if (id) {
        return new PipelineMessageSchema(id, time);
    }

    return null;
};