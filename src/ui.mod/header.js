define(['$', 'Class', 'Header_tpl'], function($, Class, tpl){

  /*
  * wanglihua@meitunmama.com备注:
  * 任何UI组件不应该多层继承,而应该组合
  * 同时方法单一化原则
  *
  * 目前,头部分为3种:default|search|title
  *
  * 第一种方式
  *   default:头部只带一个logo图片,需要传入url地址
  * 第二种方式
  *   search: 搜索头部,包含搜索框和搜索按钮
  * 第三种方式
  *   title: 标题, 左按钮, 右按钮
  *
  * */

  var headerTop = '44px';
  var Header = Class.create({

    initialize: function(options){
      this.setOptions(options);
      this.show();
    },

    show: function(){
      this.headerContainer.show();
      this.fixHeight(false);
      //fix content container height common
      $(window._PREFIX_ID_CONTENT).css('marginTop', headerTop);
    },

    hide: function(){
      this.headerContainer.hide();
      this.fixHeight(true);
      //fix content container height to min
      $(window._PREFIX_ID_CONTENT).css('marginTop', '0');
    },

    fixHeight: function(isMin){
      //fix header container height
      if(isMin) this.headerContainer.css('height', '0');
      else this.headerContainer.css('height', headerTop);
    },

    /**
     * 设置可选项
     *
     * @method Header#setOptions
     * @param options object
     *  options.type: 头部的类型类型: 主页头部|文字头部|搜索头部
     *  options.setting: 针对头部设置, 包括头部的文字,图片,按钮等信息
     *
     * e.g options of title type object
     * {
     *  type: 'title',
     *  setting: {
     *    title: '主页',
     *    leftBtn: '回退',
     *    rightBtn: '地图'
     *  }
     * }
     *
     * e.g options of default type object
     * {
     *  type: 'default' //或者 null
     *  setting:{
     *    url: 'xxx.png'
     *  }
     * }
     *
     *
     */
    setOptions: function(options){
      this.headerContainer = $(window._PREFIX_ID_HEADER);
      if(options) this.headerContainer.append(tpl(options));
      else this.headerContainer.append(tpl({type: null}));
    }

  });

  return Header;
});