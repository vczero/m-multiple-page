/*
 * HTTP Cookie
 * @author: vczero
 * cookie绑定在指定的域名下，非本域无法共享cookie，但是可以是在主站共享cookie给子站
 * cookie有一些限制：比如IE6 & IE6- 限定在20个；IE7 50个；Opear 30个...所以一般会根据【必须】需求才设定cookie
 * cookie的名称不分大小写；同时建议将cookie URL编码；路径是区分cookie在不同情况下传递的好方式；带安全标志cookie
 *     在SSL情况下发送到服务器端，http则不会。建议针对cookie设置expires、domain、 path；每个cookie小于4KB
 * */

define([], function(){
  function getCookiesObj(){
    var cookies = {};
    if(document.cookie){
      var objs = document.cookie.split('; ');
      for(var i in objs){
        var index = objs[i].indexOf('='),
          name = objs[i].substr(0, index),
          value = objs[i].substr(index + 1, objs[i].length);
        cookies[name] = value;
      }
    }
    return cookies;
  }

  function set(name, value, opts){
    //opts maxAge, path, domain, secure
    if(name && value){
      var cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
      //可选参数
      if(opts){
        if(opts.maxAge){
          cookie += '; max-age=' + opts.maxAge;
        }
        if(opts.path){
          cookie += '; path=' + opts.path;
        }
        if(opts.domain){
          cookie += '; domain=' + opts.domain;
        }
        if(opts.secure){
          cookie += '; secure';
        }
      }
      document.cookie = cookie;
      return cookie;
    }else{
      return '';
    }
  }

  function get(name){
    return decodeURIComponent(getCookiesObj()[name]) || null;
  }

  function remove(name){
    if(getCookiesObj()[name]){
      document.cookie = name + '=; max-age=0';
    }
  }

  function clear(){
    var cookies = getCookiesObj();
    for(var key in cookies){
      document.cookie = key + '=; max-age=0';
    }
  }

  function getCookies(name){
    return getCookiesObj();
  }

  return {
    'getCookies': getCookies,
    'set': set,
    'get': get,
    'remove': remove,
    'clear': clear
  };

});
