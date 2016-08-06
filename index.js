var Joi = require('joi')

module.exports = {
  name: 'shortid',
  base: Joi.string().regex(/^[a-zA-Z0-9_-]{7,14}$/)
}
