const BaseDTO = require("../dto");

class MessageDTO extends BaseDTO {
    getMapping() {
        return {
            message: {
                key: 'message'
            },
            date: {
                key: 'date'
            }
        }
    }
}

module.exports = MessageDTO;