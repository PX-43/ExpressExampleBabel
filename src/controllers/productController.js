import express from 'express';
import Product from '../models/Product';

let bookController = {};

productController.productAll = (req, res, next) => {
  Product.find((err, product) => {
    if (err) {
			return next(err);
    }
		res.json(product);
  });
};

productController.productById = (req, res, next) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) {
			return next(err);
    }
		res.json(product);
  });
};

productController.productCreate = (req, res, next) => {
  Product.create(req.body, (err, product) => {
    if (err) {
			return next(err);
		}
    res.json(product);
  });
};

productController.productEdit = (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, req.body, (err, product) => {
    if (err) {
			return next(err);
		}
    res.json(product);
  });
};

productController.productDelete =  (req, res, next) => {
  Product.findByIdAndRemove(req.params.id, req.body, (err, product) => {
    if (err) {
			return next(err);
    }
		res.json(product);
  });
};

export default productController;

