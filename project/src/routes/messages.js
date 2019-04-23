const { Router } = require("express");
const {BadRequestHttpError} = require("../errors");
const messageManager = require("../service/message-manager");
const asyncErrorHandler = require("express-async-handler");
const MessageDTO = require("../dto/request/message");
const validator = require("../validation/message");
const router = Router();

router.post("/", asyncErrorHandler(async (req, res) => {

    let errors ;
    let dto = new MessageDTO(req.body);
    errors = validator.validate(dto);

    if (errors.length > 0) {
        throw new BadRequestHttpError('Request data is invalid', errors)
    } else {
        let id = await messageManager.newMessage(dto);

        return res.status(201).send({"Created": id});
    }
}));

module.exports = router;