/*TMODJS:{"version":210,"md5":"bccbb4ab4d9d559595af61ddbb75eee0"}*/
define(["./template",""],function(a){return a("header.tpl",function(a){"use strict";var b=this,c=(b.$helpers,a.type),d=b.$escape,e=a.setting,f="";return f+='<style type="text/css"> .header_height{ height:44px; width:100%; min-width:320px; } .header_background{ background-color: #1CBBD3; } .header_first{ background-image: url(http://ms.meitun.com/resources/images/index/chop_162a1f7.png); background-repeat:no-repeat; background-position:center; width: 166px; height: 24px; padding-top: 20px; background-size: 100%; float: left; margin-left: 10px; } .header_search{ left:5px; padding-top:5px; right:50px; position:absolute; } .header_search > input{ height:32px; outline: none; padding-left:5px; border:1px solid #ddd; font-size: 15px; border-radius:3px; box-sizing: border-box; width:100%; } .header_search_btn{ width:50px; height:40px; line-height:40px; color:#ffffff; text-align: center; cursor:pointer; } .header_20p{ width:20%; height:35px; } .header_line_35{ line-height:40px; color:#fff; } .header_back_span{ margin-left:5px; } .header_center{ width:60%; } .header_center_span{ height:35px; } .header_right{ text-align:right; } .header_right_span{ margin-right:5px; } </style>   <div class="header_height header_background"> ',c&&"default"!==c?"search"===c?f+=' <div class="header_search fast_fl"> <input type="text" placeholder="\u8bf7\u8f93\u5165\u5173\u952e\u5b57"/> </div> <div class="header_search_btn fast_fr"> <div>\u641c\u7d22</div> </div> ':"title"===c&&(f+=' <div class="fast_fl header_20p header_line_35"> <span class="header_back_span">',f+=d(e.leftBtn),f+='</span> </div> <div class="fast_fl fast_center header_line_35 header_center"> <span class="header_center_span">',f+=d(e.title),f+='</span> </div> <div class="fast_fl header_20p header_line_35 header_right"> <span class="header_right_span">',f+=d(e.rightBtn),f+="</span> </div> "):f+=' <div class="header_first"></div> ',f+=" </div> ",new String(f)})});