class MessageSchema {
    /**
     * @param {String} id
     * @param {String} msg
     * @param {Number} time
     */
    constructor(id, msg, time) {
        this._id = id;
        this._time = time;
        this._msg = msg;
    }

    /**
     * @return {String}
     */
    get id() {
        return this._id;
    }

    /**
     * @return {String}
     */
    get msg() {
        return this._msg;
    }

    /**
     * @return {Number}
     */
    get time() {
        return this._time;
    }
}

module.exports = MessageSchema;