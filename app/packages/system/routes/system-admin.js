'use strict';

// Dependencies
let router = require('express').Router();

// Require CleverCore
let CleverCore = require('clever-core');

// Load config
let config = CleverCore.loadConfig();

// Load controller
let systemCtrl = require('../controllers/system-admin');

// Exports
module.exports = function(SystemPackage, app, auth, database) {

  router.get('/', auth.requiresAdmin, systemCtrl.showDashboard.bind(null, SystemPackage));

  router.get('/settings', auth.requiresAdmin, systemCtrl.showSettings.bind(null, SystemPackage));

  router.get('/help', auth.requiresAdmin, systemCtrl.showHelp.bind(null, SystemPackage));

  return new CleverCore.CleverRoute(router, 'admin', true);

};
