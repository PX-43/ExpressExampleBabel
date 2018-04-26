import express from 'express';
let router = express.Router();
import Product from '../models/Product';

router.get('/', (req, res, next) => {
  Product.find((err, product) => {
    if (err) {
			return next(err);
    }
		res.json(product);
  });
});

router.get('/:id', (req, res, next) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) {
			return next(err);
    }
		res.json(product);
  });
});

router.post('/', (req, res, next) => {
  Product.create(req.body, (err, product) => {
    if (err) {
			return next(err);
		}
    res.json(product);
  });
});

router.put('/:id', (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, req.body, (err, product) => {
    if (err) {
			return next(err);
		}
    res.json(product);
  });
});

router.delete('/:id', (req, res, next) => {
  Product.findByIdAndRemove(req.params.id, req.body, (err, product) => {
    if (err) {
			return next(err);
    }
		res.json(product);
  });
});

export default router;
