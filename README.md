# joi-shortid
Joi validation for [shortid](https://github.com/dylang/shortid).

## Usage

```js
var Joi = require('joi').extend(require('joi-shortid'))

Joi.shortid().validate('Ny16zCfkdH3', function (err) {
  console.log(err ? 'Invalid' : 'Valid')
})
```
