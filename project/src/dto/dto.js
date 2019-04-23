class BaseDTO {
    /**
     * @param {Object} data
     */
    constructor(data) {
        this.process(data, this.getMapping());
    }

    getMapping() {}

    /**
     * @param {Object} data
     * @param {Object} mapping
     */
    process(data, mapping) {
        Object.keys(mapping).forEach(function (k) {
            const options = mapping[k];
            const key = options.key;
            let value;

            if (options.callback) {
                value = options.callback(data);
            }
            if (value === undefined) {
                value = data[key] !== undefined ? data[key] : options.default
            }
            this[k] = value;
        }, this);
    }
}

module.exports = BaseDTO;