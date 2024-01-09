const Validator = require("fastest-validator");
const v = new Validator()
const schema = {
    username: {
        type: 'string',
        min: 3,
        max: 20,
    },
    email: {
        type: 'email',
    },
    phone: {
        type: 'string',
    },
    password: {
        type: 'string',
        min: 6,
        max: 20,
    },
};


const check = v.compile(schema)
export default check