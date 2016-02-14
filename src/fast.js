(function(window, undefine){
  //get the global static server path
  function getPath(callback) {
    var dir = '';
    var en_dir = '';
    var scripts = document.getElementsByTagName('script') || [];
    var reg_fast = /fast.js$/ig;
    for (var i = 0; i < scripts.length; i++) {
      var src = scripts[i].getAttribute('src');
      var en_port = scripts[i].getAttribute('en_port');
      if (src && reg_fast.test(src)) {
        dir = src.replace(reg_fast, '');
        en_dir = en_port;
        window._base_lib_dir = dir;
        window._base_en_port = en_dir;
      }
    }
    callback(dir, en_dir);
  }

  //load js script file
  function loadScript(opts, callback) {
    var script = document.createElement('script');
    script.src = opts.url;
    script.charset = opts.charset || 'utf-8';
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
    script.onload = function () {
      script.onload = script.onreadystatechange = script.onerror = null;
      script = null;
      callback();
    };
  }

  getPath(function(dir, en_dir){
    loadScript({url: dir + '/require.js'}, function () {
      require([dir + 'core/config.js'], function () {
        //TODO: load entry port
        require([en_dir], function(){});
      });
    });

  });

  function stopPropagation(e) {
    e = e || window.event;
    //标准: 阻止冒泡
    if(e.stopPropagation) {
      e.stopPropagation();
    } else {
      //Fix IE
      e.cancelBubble = true;
    }
    if(e.stopImmediatePropagation()){
      e.stopImmediatePropagation();
    }
    e.preventDefault();
  }


  window.stopPropagation = stopPropagation;

})(window);