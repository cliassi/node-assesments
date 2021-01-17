const express = require('express');
const router = express.Router({ mergeParams: true });

let controller = require('./controller');

router.get('/', (req, res) => {
        res.status(200).send(controller.getProducts())
});

router.get('/:id', (req, res) => {
        res.status(200).send(controller.getProduct(req.params.id))
});

router.post('/', (req, res) => {
        controller.createProduct(req.body);
        res.status(201).send({ message: 'Product Created' });
});

router.delete('/:id', (req, res) => {
        controller.deleteProduct(req.params.id);
        res.status(200).send({ message: 'Product Deleted' });
});

module.exports = router;