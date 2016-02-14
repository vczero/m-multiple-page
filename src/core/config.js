require.config({
  waitSeconds			: 20,
  baseUrl: '../',
  shim							    : {
    'iscroll'           : [],
    'velocity'          : []
  },
  paths						      : {
    /*3rd lib*/
    FastClick           : window._base_lib_dir + '3rd/fastclick',
    Class               : window._base_lib_dir + '3rd/class',
    $                   : window._base_lib_dir + '3rd/zepto',
    iscroll             : window._base_lib_dir + '3rd/iscroll',
    velocity            : window._base_lib_dir + '3rd/velocity.min',

    /*core*/
    Page                : window._base_lib_dir + 'core/page',

    /*UI*/
    template            : window._base_lib_dir + 'ui.mod/template',
    viewport_tpl        : window._base_lib_dir + 'ui.mod/viewport.tpl',
    Footer              : window._base_lib_dir + 'ui.mod/footer',
    Footer_tpl          : window._base_lib_dir + 'ui.mod/footer.tpl',
    Header              : window._base_lib_dir + 'ui.mod/header',
    Header_tpl          : window._base_lib_dir + 'ui.mod/header.tpl',

    /*common or util*/
    UA                  : window._base_lib_dir + 'common/ua',
    Cookie              : window._base_lib_dir + 'common/cookie'

  }
});