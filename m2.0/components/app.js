
(function($,win){
  var tpl = $.ajax({url: "./../../components/app.html", async:false});
  var html = template.compile(tpl.responseText);


  $('body').append(html({name: 'wlh'}));

  //$('#Header_container').on('click', function(e){
  //  console.log('00000--00000');
  //});
  //
  //$('#Header_container').hide();
  //
  //
  //win.Header = function(opts){
  //  var html = template('Header', {name: opts.name});
  //  document.getElementById('Header_container').innerHTML = html;
  //};
  //
  //
  //win.Header.prototype.show = function(){
  //  $('#Header_container').show();
  //};
  //
  //win.Header.prototype.hide = function(){
  //  $('#Header_container').hide();
  //};


})($, window);