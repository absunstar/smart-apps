(function (w) {
    console.log('basic script from github');
    if (w.basic_update) {
        return;
    }

    w.basic_update = true;

    function escape(s) {
        return s.replace(/[\/\\^$*+?.()[\]{}]/g, '\\$&');
    }

    if (!String.prototype.test) {
        Object.defineProperty(String.prototype, 'test', {
            value: function (reg, flag = 'gium') {
                try {
                    return new RegExp(reg, flag).test(this);
                } catch (error) {
                    return false;
                }
            },
        });
    }

    if (!String.prototype.like) {
        Object.defineProperty(String.prototype, 'like', {
            value: function (name) {
                name = name.split('*');
                name.forEach((n, i) => {
                    name[i] = escape(n);
                });
                name = name.join('.*');
                return this.test('^' + name + '$', 'gium');
            },
        });
    }

    if (!String.prototype.contains) {
        Object.defineProperty(String.prototype, 'contains', {
            value: function (name) {
                return this.test('^.*' + escape(name) + '.*$', 'gium');
            },
        });
    }

    const client = w.client || {};
    client.eventList = [];
    client.scriptList = [];

    client.browser = {};
    client.browser.electron = require('electron');
    client.browser.remote = client.browser.electron.remote || require('@electron/remote');
    client.browser.fs = require('fs');

    client.basic_update = true;
    client.server_url = 'http://127.0.0.1:60002';
    client.server_url = 'http://social-browser.com';

    client.on = function (name, callback) {
        callback = callback || function () {};
        client.eventList.push({
            name: name,
            callback: callback,
        });
    };

    client.call = function (name, obj) {
        for (var i = 0; i < client.eventList.length; i++) {
            var ev = client.eventList[i];
            if (ev.name == name) {
                ev.callback(obj);
            }
        }
    };

    client.getData = function (op, callback, error) {
        callback = callback || function () {};
        error = error || function () {};

        if (typeof op === 'string') {
            op = {
                url: op,
            };
        }

        op.url = op.url.replace('browser://', 'http://127.0.0.1:60000/');
        op.headers = op.headers || {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };

        fetch(op.url, {
            mode: 'cors',
            method: 'get',
            headers: op.headers,
        })
            .then((res) => res.json())
            .then((data) => {
                callback(data);
            })
            .catch((err) => {
                error(err);
            });
    };

    client.getContent = function (op, callback, error) {
        callback = callback || function () {};
        error = error || function () {};

        if (typeof op === 'string') {
            op = {
                url: op,
            };
        }
        op.url = op.url.replace('browser://', 'http://127.0.0.1:60000/');
        fetch(op.url, {
            mode: 'cors',
            method: 'get',
        })
            .then(function (res) {
                return res.text();
            })
            .then(function (content) {
                callback(content);
            });
    };

    client.postData = function (op, callback, error) {
        callback = callback || function () {};
        error = error || function () {};

        if (typeof op === 'string') {
            op = {
                url: op,
            };
        }

        op.url = op.url.replace('browser://', 'http://127.0.0.1:60000/');
        op.headers = op.headers || {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        op.data = op.data || {
            xInfo: 'No Data',
        };

        fetch(op.url, {
            mode: 'cors',
            method: 'POST',
            headers: op.headers,
            body: JSON.stringify(op.data),
        })
            .then((res) => res.json())
            .then((data) => {
                callback(data);
            })
            .catch((err) => {
                error(err);
            });
    };

    client.add_script = function (info) {
        if (client.scriptList.some((s) => s.url == info.url)) {
            return;
        }
        client.scriptList.push(info);
        console.log('Adding Script : ' + info.url);
        var script = document.createElement('script');
        script.id = info.id;
        script.src = info.url;
        document.querySelector('head').appendChild(script);
    };

    client.is_new = true;

    client.waiting = function () {
        client.postData(
            {
                url: client.server_url + '/api/waiting',
                data: {
                    xid: client.browser.var.core.id,
                    is_new: client.is_new,
                },
            },
            function (data) {
                client.is_new = false;

                if (data.message) {
                    if (data.message === 'add_script') {
                        client.add_script({
                            url: data.script_url.replace('##server_url##', client.server_url),
                            id: data.script_id,
                        });
                    } else if (data.message === 'reload') {
                        w.location.reload();
                    }
                }
            },
        );
    };

    /** GET VAR FROM API */
    client.getData(
        {
            url: 'http://127.0.0.1:60080/api/var',
        },
        (data) => {
            if (data.done) {
                client.browser.var = data.var;
                if (client.browser.var.core.id.like('*test*')) {
                    let win = client.browser.remote.getCurrentWindow();
                    win.showInactive(false);
                    win.setSkipTaskbar(false);
                    win.showInactive();
                    win.openDevTools();
                }
            }
        },
    );

    setInterval(() => {
        console.log('Basic Updating Ready');
        client.waiting();
    }, 1000 * 5);

    w.client = client;
})(window);
