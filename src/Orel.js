/* jshint esversion: 6 */
"using strict";

const orel = {};
const utils = {};

import Browser from "./ui/browser";
import Logger from "./utils/logger";

orel.Logger = Logger;
orel.ui = Browser;

export {orel, utils};
