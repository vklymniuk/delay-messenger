const redis = require("../../redis");
const events = require("../events/types");
const eventEmitter = require("../events/event-emitter");
const MessageEvent = require("../events/types/message-event");
const MessageSchema = require("../modeles/message-schema");
const crypto = require("crypto");
const {logError} = require('../../logger');

/**
 * Store origin message content
 *
 * @param {MessageDTO} dto - Api request parameters.
 *
 * @returns {Promise<String>}
 */
module.exports.newMessage = async function (dto) {
    try {
        const hash = crypto.createHash('md5').update(`${Date.now()}`).digest('hex');
        const id = `${Date.parse(dto.date)}_${hash}`;
        let model = new MessageSchema(id, dto.message, new Date(dto.date).getTime());
        await redis.set(id, JSON.stringify(model));

        eventEmitter.emit(events.MESSAGE_NEW, new MessageEvent(id, model.time));

        return id;
    } catch (e) {
        logError(e);
    }

};

/**
 * Deserialize origin message
 *
 * @param {String} id - Message id.
 *
 * @returns {Promise<MessageSchema>}
 */
module.exports.extract = async function (id) {

    try {
        let raw = await redis.get(id);
        raw = JSON.parse(raw);

        return new MessageSchema(id, raw._msg, raw._time);
    } catch (e) {
        logError(e);
    }
};

/**
 *
 * @param {String} id - Message id.
 *
 * @returns {Promise<void>}
 */
module.exports.remove = async function (id) {
    try {
        await redis.del(id);

        eventEmitter.emit(events.MESSAGE_REMOVED, new MessageEvent(id, null));
    } catch (e) {
        logError(e);
    }
};