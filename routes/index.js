import express from 'express';
let router = express.Router();

router.get('/', (req, res, next) => {
  let message = [{ message: 'Simple Example Api with Babel in ES6' }];

	res.json(message);
});

export default router;
