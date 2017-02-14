"using strict";


import Browser from "./ui/browser";

let ui = {
    Browser: Browser
};

export { ui }

import UIMap from "./map/UIMap";

export {UIMap};

import Logger from "./utils/logger";
import Ajax from "./utils/ajax";

let utils = {
    Logger: Logger,
    Ajax: Ajax
};

export { utils }
