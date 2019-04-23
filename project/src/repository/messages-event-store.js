const redis = require("../../redis");

/**
 * @param {MessageEvent} event - Domain event.
 * @param {String}       state - Message processing state.
 *
 * @returns {Promise<*>}
 */
module.exports.store = function (event, state) {
    return Promise.resolve(redis.lpush(`events-${event.id}`, JSON.stringify({'state': state, 'when': new Date()})));
};

/**
 * @param {String} id - Message id.
 *
 * @returns {Promise<String>}
 */
module.exports.loadLastMessageState = async function (id) {
    let result = await redis.lindex(id, -1);
    let event = JSON.parse(result);

    //LINDEX key -1
    return event.state;
};