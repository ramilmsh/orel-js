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

export default Logger;
