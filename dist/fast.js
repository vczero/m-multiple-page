!function(t,e){function n(e){for(var n="",o="",r=document.getElementsByTagName("script")||[],a=/fast.js$/gi,i=0;i<r.length;i++){var c=r[i].getAttribute("src"),u=r[i].getAttribute("en_port");c&&a.test(c)&&(n=c.replace(a,""),o=u,t._base_lib_dir=n,t._base_en_port=o)}e(n,o)}function o(t,e){var n=document.createElement("script");n.src=t.url,n.charset=t.charset||"utf-8",n.defer=!0,n.async=!0,document.head.appendChild(n),n.onload=function(){n.onload=n.onreadystatechange=n.onerror=null,n=null,e()}}function r(e){e=e||t.event,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,e.stopImmediatePropagation()&&e.stopImmediatePropagation(),e.preventDefault()}n(function(t,e){o({url:t+"/require.js"},function(){require([t+"core/config.js"],function(){require([e],function(){})})})}),t.stopPropagation=r}(window);