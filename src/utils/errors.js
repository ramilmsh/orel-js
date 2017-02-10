/* jshint esversion: 6 */

(function (window, console) {
    "using strict";
    class AbstractException {
        constructor(message) {
            this.message = message;
        }

        print() {

        }
    }

    class MethodNotImpleneted extends AbstractException {
        constructor() {

        }
    }

    window.MethodNotImpleneted = MethodNotImpleneted;
})(window, console);
