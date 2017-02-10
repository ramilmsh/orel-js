/* jshint esversion: 6 */

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

export {MethodNotImpleneted, AbstractException};
