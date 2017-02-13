interface Request {
    url: string;
    qs?: Object;
    at?: Array<string>;
    q?: string;

    success?: Function;
    error?: Function;
}

class Ajax {
    /**
     * Interface to make requests to server
     * @param request: Request
     * @param request.url -> url to access the server API
     * @param request.qs -> object containing set of parameters
     * @param request.at -> parameters to add after "@"
     * @param request.q -> custom request after "?"
     * 
     * @param request.success -> callback to execute upon success
     * @param request.error -> callback to execute upon error
     * @returns void
     */
    static ajax(request: Request): void {
        let XHR: XMLHttpRequest = new XMLHttpRequest(),
            url: string = request.url;

        if (request.hasOwnProperty("at"))
            url += '@' + request.at.join(",");

        if (request.hasOwnProperty("qs")) {
            url += '?';
            for (let key in request.qs)
                if (key[0] !== '_')
                    url += key + '=' + request.qs[key] + '&';

            url = url.slice(0, url.length - 1);
        } else if (request.hasOwnProperty("q"))
            url += '?' + request.q;

        XHR.onreadystatechange = function () {
            if (XHR.readyState === XMLHttpRequest.DONE) {
                if (XHR.status === 200)
                    request.success && request.success(JSON.parse(XHR.responseText));
                else
                    request.error && request.error(XHR);
            }
        };

        XHR.open("GET", url, true);
        XHR.send();
    }
}

export default Ajax;
