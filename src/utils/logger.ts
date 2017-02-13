"using strict";

interface LoggerMessage {
    code: number;
    msg: string;
}

class Logger {
    private cache: Array <Object>;
    constructor() {

    }

    print(message: LoggerMessage):void {
        this.log(message);

        console.log(message.msg);
    }

    warn(message: LoggerMessage):void {
        this.log(message);

        console.warn(message.msg);
    }

    error(message: LoggerMessage):void {
        this.log(message);

        console.error(message.msg);
    }

    log(message: LoggerMessage):void {
        this.cache.push(message);
    }
}

export default Logger;
