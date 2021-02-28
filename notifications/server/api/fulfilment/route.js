/**
 * @module fulfilment router
 *
 * @description
 * All routing for this resource/api should be defined here.
 * This route then gets added to the base api routing.
 */

const express = require('express');
const statusCodes = require('http-status-codes');

// we might need to access all the routing params from parent as well,
// so the practice is to have mergeParams: true
const router = express.Router({ mergeParams: true });

const controller = require('./controller');

router.get('/:id', async function (req, res) {
  res.status(statusCodes.OK).send(await controller.get(req.params.id));
});

router.get('/service/:ref', async function (req, res) {
  res.status(statusCodes.OK).send(await controller.getByServiceRef(req.params.ref));
});

router.post('/create', async function (req, res) {
  res.status(statusCodes.CREATED).send(await controller.save(req.body));
})

module.exports = router;
