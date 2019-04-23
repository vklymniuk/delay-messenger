class PipelineMessageSchema {
    /**
     * @param {String} id
     * @param {Number} time
     */
    constructor(id, time) {
        this._id = id;
        this._time = time;
    }

    /**
     * @return {String}
     */
    get id() {
        return this._id;
    }

    /**
     * @return {Number}
     */
    get time() {
        return this._time;
    }
}

module.exports = PipelineMessageSchema;