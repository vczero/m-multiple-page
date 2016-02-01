/*TMODJS:{"version":3,"md5":"3a26c1c859e16be77dbbd9083d36964c"}*/
template('index/index',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,title=$data.title,i=$data.i,list=$data.list,$out='';$out+='<style type="text/css"> body{ background-color: red; } </style> <h1>';
$out+=$escape(title);
$out+='</h1> <ul> ';
 for (var i = 0; i < list.length; i ++) { 
$out+=' <li>索引 ';
$out+=$escape( i + 1);
$out+=' ：';
$out+=$escape( list[i]);
$out+='</li> ';
 } 
$out+=' </ul> ';
return new String($out);
});