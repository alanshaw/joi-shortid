var test = require('tape')
var shortid = require('shortid')
var Joi = require('joi')
Joi.shortid = require('./')

for (var i = 0; i < 1000; i++) {
  var id = shortid()
  createTest(id)
}

function createTest (id) {
  test('Validates shortid ' + id, function (t) {
    t.plan(1)
    Joi.shortid().validate(id, function (err) {
      t.ifError(err)
      t.end()
    })
  })
}
