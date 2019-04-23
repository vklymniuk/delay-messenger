class MessageEvent {
    /**
     * @param {String} id
     * @param {Number} time
     */
    constructor(id, time) {
        this._id = id;
        this._time = time;
    }

    /**
     * @returns {String}
     */
    get id() {
        return this._id;
    }

    /**
     * @returns {Number}
     */
    get time() {
        return this._time;
    }
}

module.exports = MessageEvent;