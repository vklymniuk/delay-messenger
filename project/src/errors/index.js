class BadRequestHttpError extends Error {
    /**
     * @param {String}       message
     * @param {Array|Object} errors
     */
    constructor(message, errors) {
        super('Bad request', 400);
        this.name = this.constructor.name;

        if (errors) {
            if (true === Array.isArray(errors)) {
                if (errors.length > 0) {
                    let formated = {};
                    errors.map((error) => { formated[error.path] = error.message; });
                    this.errors = formated;
                }
            } else {
                let formated = {};
                Object.keys(errors).forEach((path) => { formated[path] = errors[path].message });
                this.errors = formated;
            }
        }
    }
}

module.exports = {
    BadRequestHttpError
};