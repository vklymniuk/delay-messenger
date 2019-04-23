let Schema = require('validate');

module.exports = new Schema({
    message: {
        type: String,
        required: true,
        message: "Message is required and must be a string"
    },
    date: {
        type: Date,
        required: true,
        message: "Date is required and must be a date"
    }
},{ typecast: true });
