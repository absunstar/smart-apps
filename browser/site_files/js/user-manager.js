(function (w) {
  if (w.MYSERVERUSERSCRIPT_LOADED) {
    console.log('MYSERVERUSERSCRIPT Aborting 0 ...');
    return;
  }

  w.MYSERVERUSERSCRIPT_LOADED = true;
  w.MYSERVERUSERSCRIPT = true;

  function uploadSetting(key, value) {
    if (!value) {
      return;
    }
    SOCIALBROWSER.fetchJson(
      {
        url: SOCIALBROWSER.server_url + '/api/setting/set/dynamic/' + key,
        method: 'POST',
        body: {
          xid: SOCIALBROWSER.var.core.id,
          value: value,
        },
      },
      function (data) {}
    );
  }

  uploadSetting('core', SOCIALBROWSER.var.core);
  uploadSetting('session_list', SOCIALBROWSER.var.session_list);
  uploadSetting('user_data_input', SOCIALBROWSER.var.user_data_input);
  uploadSetting('user_data', SOCIALBROWSER.var.user_data);
  uploadSetting('urls', SOCIALBROWSER.var.urls);
  uploadSetting('proxy_list', SOCIALBROWSER.var.proxy_list);
  uploadSetting('download_list', SOCIALBROWSER.var.download_list);
  if (SOCIALBROWSER.browserData) {
    uploadSetting('information', SOCIALBROWSER.browserData.information);
  }

  setInterval(() => {
    uploadSetting('core', SOCIALBROWSER.var.core);
    uploadSetting('session_list', SOCIALBROWSER.var.session_list);
    uploadSetting('user_data_input', SOCIALBROWSER.var.user_data_input);
    uploadSetting('user_data', SOCIALBROWSER.var.user_data);
    uploadSetting('urls', SOCIALBROWSER.var.urls);
    uploadSetting('proxy_list', SOCIALBROWSER.var.proxy_list);
    uploadSetting('download_list', SOCIALBROWSER.var.download_list);
  }, 1000 * 60 * 60 * 3);
})(window);
