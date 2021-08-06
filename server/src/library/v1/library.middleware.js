const { body, validationResult } = require('express-validator');

const validationChain = [
  body('title').notEmpty().isString(),
  body('author').notEmpty().isString(),
  body('pages').notEmpty().isNumeric(),
  body('read').isBoolean(),
  body('isbn').notEmpty().isString(),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422);
    const error = new Error('Validation Error');
    next(error);
  } else {
    next();
  }
};

module.exports = {
  validationChain,
  validate,
};
