import express from 'express';
let router = express.Router();
import Product from '../models/Product';
import ProductController from '../controllers/productController';


router.get('/', ProductController.productAll);
router.get('/:id', ProductController.productById);
router.post('/', ProductController.productCreate);
router.put('/:id', ProductController.productEdit);
router.delete('/:id', ProductController.productDelete);

export default router;
