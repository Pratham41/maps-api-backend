const uuid = require('uuid')

exports.generateToken = () => {
    return uuid.v4()
}