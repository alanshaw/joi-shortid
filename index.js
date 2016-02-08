var Joi = require('joi')

module.exports = function () {
  return Joi.string().regex(/^[a-zA-Z0-9_-]{7,14}$/).description('shortid')
}
