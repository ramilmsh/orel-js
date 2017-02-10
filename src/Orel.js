/* jshint esversion: 6 */
"using strict";

const orel = module.exports = {};

const DOM = require("./utils/DOM");
const E = require("./utils/errors");
const Logger = require("./utils/logger");

orel.version = "0.0.1";
orel.ui = require("./ui/browser");
