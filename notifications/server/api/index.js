const express = require('express');
const router = express.Router();

// Any new resource api should imported here and then registered to
// router with proper api endpoint prefix (e.g /user user.route, /items items.route etc.)
//
// Do not remove the const template = require('./template');
//** --route:import-- */ placeholder, if you use the cli to generate
// api resources, this works as placeholder to inject new route file requires.
//
// If you add a require manually, add it above the /** --route:import-- */ line.
const user = require('./user');
const notification = require('./notification');
const template = require('./template');
/** --route:import-- */

// Do not remove the router.use(template.config.ENDPOINT, template.route);
//** --route-- */ placeholder, if you use the cli to generate
// api resources, this works as placeholder to inject new routes.
//
// If you add a require manually, add it above the /** --route-- */ line.
router.use(user.config.ENDPOINT, user.route);
router.use(template.config.ENDPOINT, template.route);
router.use(notification.config.ENDPOINT, notification.route);
/** --route-- */

module.exports = router;
