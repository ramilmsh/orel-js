class AbstractException {
    message: string;
    constructor(message: string) {
        this.message = message;
    }

    print():void {
        console.error(this.message);
    }
}

class MethodNotImpleneted extends AbstractException {
    constructor(message: string) {
        super(message);
    }
}

export {MethodNotImpleneted, AbstractException};
