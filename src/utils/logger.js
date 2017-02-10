/* jshint esversion: 6 */

(function (window, console) {
    "using strict";
    class Logger {
        constructor() {

        }

        print(message) {
            console.log(message);
        }

        warn(warning) {
            console.warn(warning);
        }

        error(error) {
            console.error(error);
        }
    }

    window.Logger = Logger;
})(window, console);
