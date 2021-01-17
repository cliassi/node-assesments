const express = require('express');
const router = express.Router({ mergeParams: true });


let controller = require('./controller');

router.get('/', (req, res) => {
        res.status(200).send(controller.getUsers())
});

router.get('/:id', (req, res) => {
        res.status(200).send(controller.getUser(req.params.id))
});

router.post('/', (req, res) => {
        controller.createUser(req.body);
        res.status(201).send({ message: 'User Created' });
});

router.delete('/:id', (req, res) => {
        controller.deleteUser(req.params.id);
        res.status(200).send({ message: 'User Deleted' });
});

module.exports = router;