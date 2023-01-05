(function (w) {
  SOCIALBROWSER.log(' [ visit-manager script ] ');

  if (w.MYSERVERVISITSCRIPT_LOADED) {
    SOCIALBROWSER.log('MYSERVERVISITSCRIPT Aborting 0 ...');
    return;
  }

  w.MYSERVERVISITSCRIPT_LOADED = true;
  w.MYSERVERVISITSCRIPT = true;

  SOCIALBROWSER.visitManager = {
    isTest: SOCIALBROWSER.var.core.id.like('*test*'),
    currentIndex: -1,
    sleep: 1000 * 60 * 10,
    visitOptions: {
      show: false,
      click: false,
      allowDownload: false,
      allowAds: true,
      allowNewWindows: true,
      allowSaveUserData: false,
      allowSaveUrls: false,
      allowSocialBrowser: true,
      timeout: 1000 * 60 * 5,
      url: 'https://egytag.com/',
      referer: 'social',
      proxy: null,
      partition: null,
      scroll: true,
      count: 1,
      ip: '127.0.0.1',
      group: 1000,
    },
    trackingList: [],
    visitList: [
      { url: 'https://egytag.com/post/random', timeout: 1000 * 60 * 10 },
      { url: 'https://egytag.com/torrent/random', timeout: 1000 * 60 * 10 },
    ],
    socialRefererList: [
      'https://www.facebook.com/',
      'https://quora.com/',
      'https://medium.com/',
      'https://twitter.com/',
      'https://web.whatsapp.com/',
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
      'https://web.wechat.com/',
    ],
    externalRefererList: [
      { url: 'https://mostaql.com/portfolio/973541' },
      { url: 'https://mostaql.com/portfolio/869525' },
      { url: 'https://mostaql.com/portfolio/606817' },
      { url: 'https://mostaql.com/portfolio/604044' },
      { url: 'https://mostaql.com/portfolio/602346' },
      { url: 'https://mostaql.com/portfolio/602345' },
      { url: 'https://mostaql.com/portfolio/602341' },
      { url: 'https://mostaql.com/portfolio/367586' },
      { url: 'https://mostaql.com/portfolio/366708' },
      { url: 'https://mostaql.com/portfolio/29249' },
    ],
    userAgentList: [
      { url: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36' },
      { url: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36' },
      { url: 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36' },
      { url: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36' },
      { url: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36' },
      { url: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/108.0.5359.52 Mobile/15E148 Safari/604.1' },
      { url: 'Mozilla/5.0 (iPad; CPU OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/108.0.5359.52 Mobile/15E148 Safari/604.1' },
      { url: 'Mozilla/5.0 (iPod; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/108.0.5359.52 Mobile/15E148 Safari/604.1' },
      { url: 'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.79 Mobile Safari/537.36' },
      { url: 'Mozilla/5.0 (Linux; Android 10; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.79 Mobile Safari/537.36' },
      { url: 'Mozilla/5.0 (Linux; Android 10; LM-Q720) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.79 Mobile Safari/537.36' },
      { url: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:107.0) Gecko/20100101 Firefox/107.0' },
      { url: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 13.0; rv:107.0) Gecko/20100101 Firefox/107.0' },
      { url: 'Mozilla/5.0 (X11; Linux i686; rv:107.0) Gecko/20100101 Firefox/107.0' },
      { url: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/107.0 Mobile/15E148 Safari/605.1.15' },
      { url: 'Mozilla/5.0 (iPad; CPU OS 13_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/107.0 Mobile/15E148 Safari/605.1.15' },
      { url: 'Mozilla/5.0 (Android 13; Mobile; rv:68.0) Gecko/68.0 Firefox/107.0' },
      { url: 'Mozilla/5.0 (Android 13; Mobile; LG-M255; rv:107.0) Gecko/107.0 Firefox/107.0' },
      { url: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.42' },
      { url: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.42' },
      { url: 'Mozilla/5.0 (Linux; Android 10; HD1913) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.79 Mobile Safari/537.36 EdgA/107.0.1418.62' },
      { url: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 EdgiOS/107.1418.62 Mobile/15E148 Safari/605.1.15' },
      { url: 'Mozilla/5.0 (Windows Mobile 10; Android 10.0; Microsoft; Lumia 950XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Mobile Safari/537.36 Edge/40.15254.603' },
      { url: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 OPR/93.0.4585.21' },
      { url: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 OPR/93.0.4585.21' },
      { url: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 OPR/93.0.4585.21' },
      { url: 'Mozilla/5.0 (Linux; Android 10; VOG-L29) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.79 Mobile Safari/537.36 OPR/63.3.3216.58675' },
      { url: 'Mozilla/5.0 (Linux; Android 10; SM-G970F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.79 Mobile Safari/537.36 OPR/63.3.3216.58675' },
    ],
    scrrenSizeList: [
      '2560x1440',
      '1920x1080',
      '1792x1120',
      '1680x1050',
      '1600x900',
      '1536x864',
      '1440x900',
      '1366x768',
      '1280x800',
      '1280x720',
      '1024x768',
      '1024x600',
      '962x601',
      '810x1080',
      '800x1280',
      '768x1024',
      '601x962',
      '600x1024',
      '414x896',
      '390x844',
      '360x800',
      '360x640',
    ],
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
    socialRefererIndex: -1,
    getSocialReferer: function () {
      if (SOCIALBROWSER.visitManager.socialRefererList.length > 0) {
        SOCIALBROWSER.visitManager.socialRefererIndex++;
        if (SOCIALBROWSER.visitManager.socialRefererList.length <= SOCIALBROWSER.visitManager.socialRefererIndex) {
          SOCIALBROWSER.visitManager.socialRefererIndex = 0;
        }
        return SOCIALBROWSER.visitManager.socialRefererList[SOCIALBROWSER.visitManager.socialRefererIndex];
      } else {
        return 'https://www.facebook.com/';
      }
    },
    externaRefererIndex: -1,
    getExternalReferer: function () {
      if (SOCIALBROWSER.visitManager.externalRefererList.length > 0) {
        SOCIALBROWSER.visitManager.externaRefererIndex++;
        if (SOCIALBROWSER.visitManager.externalRefererList.length <= SOCIALBROWSER.visitManager.externaRefererIndex) {
          SOCIALBROWSER.visitManager.externaRefererIndex = 0;
        }
        return SOCIALBROWSER.visitManager.externalRefererList[SOCIALBROWSER.visitManager.externaRefererIndex].url;
      } else {
        return 'https://www.facebook.com/';
      }
    },
    userIndex: -1,
    GetRealPartition: function () {
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
    getNewVisit: function () {
      if (SOCIALBROWSER.visitManager.visitList.length > 0) {
        SOCIALBROWSER.visitManager.currentIndex++;
        if (SOCIALBROWSER.visitManager.visitList.length <= SOCIALBROWSER.visitManager.currentIndex) {
          SOCIALBROWSER.visitManager.currentIndex = -1;
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
              SOCIALBROWSER.visitManager.visitList.push({ ...v });
            });
          }
        }
      );
    },
    prepareExternalReferer: function () {
      SOCIALBROWSER.fetchJson(
        {
          url: SOCIALBROWSER.server_url + '/api/externlRefererList',
          method: 'GET',
        },
        function (data) {
          if (data.done && data.list && data.list.length > 0) {
            SOCIALBROWSER.visitManager.externalRefererList = [];
            data.list.forEach((v) => {
              SOCIALBROWSER.visitManager.externalRefererList.push({ ...v });
            });
          }
        }
      );
    },
  };

  SOCIALBROWSER.visitManager.openFakeViewWindow = function (op) {
    console.clear();
    let options = { ...SOCIALBROWSER.visitManager.visitOptions, ...op };
    SOCIALBROWSER.log('openFakeViewWindow', options);
    options.preload = SOCIALBROWSER.dir + '/browser_files/js/context-menu.js';
    if (!options.partition) {
      options.partition = SOCIALBROWSER.visitManager.GetRealPartition();
    } else if (options.partition === 'user') {
      options.partition = 'persist:user_' + new Date().getMinutes();
    } else if (options.partition === 'ghost') {
      options.partition = 'ghost_' + new Date().getTime();
    }

    if (options.referer == 'direct') {
      options.referer = options.url;
    } else if (options.referer == 'external') {
      options.referer = SOCIALBROWSER.visitManager.getExternalReferer();
    } else if (options.referer == 'social') {
      options.referer = SOCIALBROWSER.visitManager.getSocialReferer();
    }

    options.userAgent = options.userAgent || SOCIALBROWSER.visitManager.randomUserAgent().url;
    options.screenSize = SOCIALBROWSER.visitManager.randomScreenSize().split('x');

    let code = `window.fakeview123 = '${SOCIALBROWSER.to123(options)}';`;
    let code0 = `console.log = function () {};

if (!window.SOCIALBROWSER) {
  window.SOCIALBROWSER = {
    session: {
      privacy: {
        vpc: {},
      },
    },
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
SOCIALBROWSER.__define = function (o, p, v, op) {
  try {
    op = op || {};
    if (typeof o == 'undefined') {
      return;
    }
    Object.defineProperty(o, p, {
      get: function () {
        return v;
      },
      enumerable: op.enumerable || false,
    });
    if (o.prototype) {
      o.prototype[p] = v;
    }
  } catch (error) {
    console.log(error);
  }
};

SOCIALBROWSER.getOffset = function (el) {
  const rect = el.getBoundingClientRect();
  let factor = SOCIALBROWSER.currentWindow.webContents.zoomFactor || 1;
  return {
    x: Math.round(rect.left * factor + (el.clientWidth / 2) * factor),
    y: Math.round(rect.top * factor + (el.clientHeight / 2) * factor),
  };
};

SOCIALBROWSER.click = function (selector) {
  if (!selector) {
    return false;
  }
  let dom = typeof selector === 'string' ? SOCIALBROWSER.$(selector) : selector;
  if (dom) {
    dom.scrollIntoView();
    if (window.scrollY == 0) {
    } else if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
    } else {
      window.scroll(window.scrollX, window.scrollY - dom.clientHeight);
    }

    if (SOCIALBROWSER.currentWindow && SOCIALBROWSER.webContents) {
      let offset = SOCIALBROWSER.getOffset(dom);
      SOCIALBROWSER.currentWindow.focus();
      SOCIALBROWSER.webContents.sendInputEvent({ type: 'mouseDown', x: offset.x, y: offset.y, button: 'left', clickCount: 1 });
      SOCIALBROWSER.webContents.sendInputEvent({ type: 'mouseUp', x: offset.x, y: offset.y, button: 'left', clickCount: 1 });
      console.log('clicked : ', offset);
      return dom;
    } else {
      SOCIALBROWSER.triggerMouseEvent(dom, 'mousedown');
      SOCIALBROWSER.triggerMouseEvent(dom, 'mouseup');
      return dom;
    }
  }
};

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

if (window.fakeview123) {
  SOCIALBROWSER.fakeview = JSON.parse(SOCIALBROWSER.from123(window.fakeview123));
  delete window.fakeview123;
}

if (!SOCIALBROWSER.fakeview) {
  SOCIALBROWSER.fakeview = {
    url: 'http://social-browser.com/api/youtube_random_video',
    referer: 'https://www.olx.com.eg/',
    like: true,
    subscribe: true,
    scroll: false,
  };
}

if (!SOCIALBROWSER.isIframe() && SOCIALBROWSER.fakeview.scroll) {
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
if (!SOCIALBROWSER.session.privacy.vpc.set_window_active) {
  document.__proto__.hasFocus = function () {
    return true;
  };
  SOCIALBROWSER.__define(document, 'hidden ', false);
  SOCIALBROWSER.__define(document, 'mozHidden ', false);
  SOCIALBROWSER.__define(document, 'webkitHidden ', false);
  SOCIALBROWSER.__define(document, 'visibilityState ', 'visible');
  SOCIALBROWSER.blockEvent = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
  };
  document.addEventListener('visibilitychange', SOCIALBROWSER.blockEvent, true);
  document.addEventListener('webkitvisibilitychange', SOCIALBROWSER.blockEvent, true);
  document.addEventListener('mozvisibilitychange', SOCIALBROWSER.blockEvent, true);
  document.addEventListener('hasFocus', SOCIALBROWSER.blockEvent, true);
  document.addEventListener('blur', SOCIALBROWSER.blockEvent, true);
  window.addEventListener('blur', SOCIALBROWSER.blockEvent, true);
  window.addEventListener('mouseleave', SOCIALBROWSER.blockEvent, true);
  setInterval(() => {
    window.onpagehide = window.onblur = document.onfocusout = null;
  }, 1000);
}

if (SOCIALBROWSER.fakeview.screenSize) {
  SOCIALBROWSER.session.privacy.vpc.screen_width = parseInt(SOCIALBROWSER.fakeview.screenSize[0]);
  SOCIALBROWSER.session.privacy.vpc.screen_availWidth = parseInt(SOCIALBROWSER.fakeview.screenSize[0]);
  SOCIALBROWSER.session.privacy.vpc.screen_height = parseInt(SOCIALBROWSER.fakeview.screenSize[1]);
  SOCIALBROWSER.session.privacy.vpc.screen_availHeight = parseInt(SOCIALBROWSER.fakeview.screenSize[1]);
  if (!SOCIALBROWSER.screenHidden) {
    SOCIALBROWSER.__define(window, 'innerWidth', SOCIALBROWSER.session.privacy.vpc.screen_width);
    SOCIALBROWSER.__define(window, 'innerHeight', SOCIALBROWSER.session.privacy.vpc.screen_height);
    SOCIALBROWSER.__define(window, 'outerWidth', SOCIALBROWSER.session.privacy.vpc.screen_width);
    SOCIALBROWSER.__define(window, 'outerHeight', SOCIALBROWSER.session.privacy.vpc.screen_height);
  }
}

SOCIALBROWSER.var.blocking.core.block_empty_iframe = false;
SOCIALBROWSER.var.blocking.core.remove_external_iframe = false;

SOCIALBROWSER.customSetting = SOCIALBROWSER.customSetting || {};

if (SOCIALBROWSER.var.core.id.like('*test*')) {
  SOCIALBROWSER.customSetting.allowMenu = true;
}
if(SOCIALBROWSER.currentWindow.getBounds().x > 3000){
  SOCIALBROWSER.currentWindow.showInactive();
}

`;
    let code1 = `function __document__ready__1() {
  console.log(' [ CODE 1 ] ');

  if (SOCIALBROWSER.isIframe()) {
    return;
  }

  if ((body = document.querySelector('body'))) {
    console.log(' [ Code 1 - Create Link .... ] ');
    setTimeout(function () {
      let a = document.createElement('a');
      a.href = SOCIALBROWSER.fakeview.url;
      a.id = '__a_injected';
      a.innerHTML = SOCIALBROWSER.fakeview.url;
      a.setAttribute('target', '_self');
      body.appendChild(a);
      a.style.backgroundColor = 'red';
      a.style.color = '#ffffff';
      a.style.fontSize = '22px';
      a.scrollIntoView();
      a.click();
    }, 5 * 1000);
  }

  setTimeout(function () {
    console.log(' [ Code 1 - Force Redirect .... ] ');
    document.location.href = SOCIALBROWSER.fakeview.url;
  }, 20 * 1000);
}
`;
    let code2 = `function __document__ready__2() {
  console.log(' [ code 2 ] ');
  if (SOCIALBROWSER.isIframe()) {
    return;
  }

  if (document.title == '504 Gateway Time-out') {
    console.log('Error : 504 Gateway Time-out');
    console.log('Page Will Reload');
    setTimeout(() => {
      document.location.reload();
    }, 1000 * 15);

    return;
  }

  console.log(' [ CODE 2 ] ');

  if (SOCIALBROWSER.var.core.id.like('*test*') && SOCIALBROWSER.fakeview.click) {
    setInterval(() => {
      let x = 400;
      let y = 400;
      console.log(' [ Try Click ] ');
      SOCIALBROWSER.webContents.sendInputEvent({ type: 'mouseDown', x: x, y: y, button: 'left', clickCount: 1 });
      SOCIALBROWSER.webContents.sendInputEvent({ type: 'mouseUp', x: x, y: y, button: 'left', clickCount: 1 });
    }, 1000 * 10);
  }

  SOCIALBROWSER.buttonClicked = false;
  setInterval(() => {
    if (!SOCIALBROWSER.buttonClicked && document.location.hostname.contains('sharezweb|linkbox')) {
      if (!SOCIALBROWSER.click('.nfli-info-name')) {
        if (SOCIALBROWSER.click('.file-btn')) {
          SOCIALBROWSER.buttonClicked;
        }
      }
    }
  }, 1000 * 15);
}
`;
    let codex = `let fnn = null;
let referer_hostname = null;
let url_hostname = null;
if (SOCIALBROWSER.fakeview.referer) {
  referer_hostname = SOCIALBROWSER.url.parse(SOCIALBROWSER.fakeview.referer).hostname;
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
  console.log(' [ egytag ] ');
  if (document.title == '504 Gateway Time-out') {
    console.log('Error : 504 Gateway Time-out');
    console.log('Page Will Reload');
    setTimeout(() => {
      document.location.reload();
    }, 1000 * 15);

    return;
  }
  if (document.location.hostname.like('*egytag.com')) {
    console.log(' [ Real Visit To Egytag.com ] ');
    console.log('URL        : ' + document.location.href);
    console.log('Referrer   : ' + document.referrer);
    console.log('User Agent : ' + navigator.userAgent);

    function isViewable(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function findGoodPost() {
      if (SOCIALBROWSER.googleAdsClicked) {
        return;
      }
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
        }, 1000 * (Math.floor(Math.random() * 120) + 60));
      }
    }

    if (document.location.pathname.like('*post*')) {
      setTimeout(() => {
        if (SOCIALBROWSER.googleAdsClicked) {
          return;
        }
        document.querySelector('.brand a').click();
      }, 1000 * (Math.floor(Math.random() * 60) + 30));
    } else {
      setTimeout(() => {
        findGoodPost();
      }, 1000 * (Math.floor(Math.random() * 120) + 60));
    }
    SOCIALBROWSER.googleAdsClicked = false;

    if (SOCIALBROWSER.var.core.id.like('*test*')) {

      window.onmousemove = function (e) {
        SOCIALBROWSER.showInfo('x: ' + e.clientX + ' , y : ' + e.clientY);
      };

      if (SOCIALBROWSER.fakeview.click) {
        setInterval(() => {
          let bounds = SOCIALBROWSER.currentWindow.getBounds();
          let x = bounds.width / 2;
          let y = bounds.height / 2;
          console.log(' [ Try Click ] ');
          SOCIALBROWSER.webContents.sendInputEvent({ type: 'mouseDown', x: x, y: y, button: 'left', clickCount: 1 });
          SOCIALBROWSER.webContents.sendInputEvent({ type: 'mouseUp', x: x, y: y, button: 'left', clickCount: 1 });
        }, 1000 * 10);
      }

      if (SOCIALBROWSER.fakeview.clickGoogleAds) {
        setInterval(() => {
          document.querySelectorAll('ins').forEach((ins) => {
            if (!SOCIALBROWSER.googleAdsClicked && isViewable(ins) && ins.style.display == 'block' && ins.getAttribute('data-ad-status') == 'filled') {
              SOCIALBROWSER.scrollStop = true;
              SOCIALBROWSER.googleAdsClicked = true;
              SOCIALBROWSER.click(ins);
              console.log('Google Ads clicked : ', ins);
            }
          });
        }, 1000 * 10);
      }
    }
  }
}
`;
    } else if (op.url.like('*safestgatetocontent.com*')) {
      code2 = `function __document__ready__2() {
  console.log(' [ adsterra ] ');
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
      return (
        rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
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
    } else if (op.url.like('*lbx.to*')) {
      code2 = `function __document__ready__2() {
  console.log(' [ code 2 ] ');
  if (SOCIALBROWSER.isIframe()) {
    return;
  }

  if (document.title == '504 Gateway Time-out') {
    console.log('Error : 504 Gateway Time-out');
    console.log('Page Will Reload');
    setTimeout(() => {
      document.location.reload();
    }, 1000 * 15);

    return;
  }

  console.log(' [ CODE 2 ] ');

  if (SOCIALBROWSER.var.core.id.like('*test*') && SOCIALBROWSER.fakeview.click) {
    setInterval(() => {
      let x = 400;
      let y = 400;
      console.log(' [ Try Click ] ');
      SOCIALBROWSER.webContents.sendInputEvent({ type: 'mouseDown', x: x, y: y, button: 'left', clickCount: 1 });
      SOCIALBROWSER.webContents.sendInputEvent({ type: 'mouseUp', x: x, y: y, button: 'left', clickCount: 1 });
    }, 1000 * 10);
  }

  SOCIALBROWSER.buttonClicked = false;
  setInterval(() => {
    if (!SOCIALBROWSER.buttonClicked && document.location.hostname.contains('sharezweb|linkbox')) {
      if (!SOCIALBROWSER.click('.nfli-info-name')) {
        if (SOCIALBROWSER.click('.file-btn')) {
          SOCIALBROWSER.buttonClicked;
        }
      }
    }
  }, 1000 * 15);
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

    if (SOCIALBROWSER.var.core.version > '2022.12.01') {
      SOCIALBROWSER.log('New Visit Manager ..........................................');
      SOCIALBROWSER.ipc('[open new popup]', {
        show: false,
        timeout: options.timeout,
        url: options.referer,
        partition: options.partition,
        userAgent: options.userAgent,
        proxy: options.proxy,
        referrer: options.referer,
        width: parseInt(options.screenSize[0] || '1366'),
        height: parseInt(options.screenSize[1] || '768'),
        x: 4000,
        y: 4000,
        security: false,
        eval: code_injected,
        alwaysOnTop : false,
        allowAudio: false,
        allowDownload: false,
        allowAds: true,
        allowMenu: SOCIALBROWSER.var.core.id.like('*test*'),
        allowNewWindows: false,
        allowSaveUserData: false,
        allowSaveUrls: false,
      });
    } else {
      let win = new SOCIALBROWSER.remote.BrowserWindow({
        show: false,
        width: parseInt(options.screenSize[0] || '1366'),
        height: parseInt(options.screenSize[1] || '768'),
        x: 4000,
        y: 4000,
        skipTaskbar: true,
        webPreferences: {
          sandbox: false,
          contextIsolation: false,
          enableRemoteModule: true,
          nodeIntegrationInSubFrames: true,
          partition: options.partition,
          webaudio: false,
          preload: options.preload,
        },
      });
      win.webContents.audioMuted = true;
      win.webContents.userAgent = options.userAgent;

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

      if (SOCIALBROWSER.var.core.version < '2021.03.01') {
        win.webContents.addListener('dom-ready', function (event) {
          win.webContents.executeJavaScript(code_injected);
        });
      } else {
        SOCIALBROWSER.call('[set][window][setting]', {
          win_id: win.id,
          options: options,
          name: 'eval',
          code: code_injected,
        });
      }

      win.on('close', function () {
        win.destroy();
      });

      win.on('closed', function () {});

      win.webContents.on('did-fail-load', function (e) {
        SOCIALBROWSER.log('visit-manager.js :  did-fail-loadL ');
        if (e.isMainFrame) {
          win.destroy();
        }
      });

      win.webContents.session.on('will-download', (event, item, webContents) => {
        event.preventDefault();
        SOCIALBROWSER.log('visit-manager.js :  will-download ');
      });

      win.webContents.session.setPermissionRequestHandler((webContents, permission, callback) => {
        callback(false);
      });
      win.webContents.session.setPermissionCheckHandler((webContents, permission) => {
        return false;
      });

      if (win.webContents.setWindowOpenHandler) {
        win.webContents.setWindowOpenHandler(({ url, frameName }) => {
          SOCIALBROWSER.log('visit-manager.js : block setWindowOpenHandler ');
          return { action: 'deny' };
        });

        win.webContents.on('did-create-window', (win, { url, frameName, options, disposition, referrer, postData }) => {});
      }
      win.webContents.on('new-window', function (event, url, frameName, disposition, options, referrer, postBody) {
        event.preventDefault();
        SOCIALBROWSER.log('visit-manager.js : block new-window ');
      });

      if (SOCIALBROWSER.var.core.id.like('*test*')) {
        win.show();
        win.setSkipTaskbar(false);
        win.setBounds({ x: 0, y: 0 });

        win.webContents.on('context-menu', (event, params) => {
          win.webContents.send('context-menu', params);
        });
      }

      win.loadURL(options.referer).catch((err) => {
        if (err) {
          SOCIALBROWSER.log('visit-manager.js :  loadURL ', err);
        }
      });

      setTimeout(function () {
        if (win && !win.isDestroyed()) {
          win.destroy();
        }
      }, options.timeout);
    }
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

  SOCIALBROWSER.visitManager.tryRunFakeView = function () {
    console.log('visitManager.tryRunFakeView');
    let v = SOCIALBROWSER.visitManager.getNewVisit();
    if (v) {
      v = { ...SOCIALBROWSER.visitManager.visitOptions, ...v };
      let track = SOCIALBROWSER.visitManager.Tracking(v);
      if ((v.count && v.count < track.count) || track.group_count > 2) {
        setTimeout(() => {
          SOCIALBROWSER.visitManager.tryRunFakeView();
        }, 1000 * 10);
      } else {
        SOCIALBROWSER.visitManager.openFakeViewWindow(v);
        setTimeout(() => {
          SOCIALBROWSER.visitManager.tryRunFakeView();
        }, v.timeout + 1000 * 60);
      }
    } else {
      setTimeout(() => {
        SOCIALBROWSER.visitManager.tryRunFakeView();
      }, 1000 * 10);
    }
  };

  SOCIALBROWSER.visitManager.startTime = Date.now();
  SOCIALBROWSER.visitManager.prepareVisits();
  SOCIALBROWSER.visitManager.prepareExternalReferer();

  setTimeout(() => {
    SOCIALBROWSER.visitManager.tryRunFakeView();
  }, 1000 * 60 * 5);
  setInterval(() => {
    SOCIALBROWSER.visitManager.prepareVisits();
    SOCIALBROWSER.visitManager.prepareExternalReferer();
    if (Date.now() - SOCIALBROWSER.visitManager.startTime > 1000 * 60 * 60 * 24) {
      SOCIALBROWSER.visitManager.trackingList = [];
      SOCIALBROWSER.clear();
    }
  }, 1000 * 60 * 60);
})(window);
