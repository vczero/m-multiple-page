define(['Class', 'viewport_tpl', '$', 'FastClick'], function(Class, viewport_tpl, $, FastClick){
  FastClick(document.body);
  var noop = function(){};
  var Page = Class.create({
    initialize: function(options){
      this.mainContainer = $(window._PREFIX_ID_MAIN);
      //主体容器
      if(!this.mainContainer.length) $('body').append(viewport_tpl());
      //内容容器
      this.contentContainer = $(window._PREFIX_ID_CONTENT);
      //头部容器
      this.headerContainer = $(window._PREFIX_ID_HEADER);
      //底部容器
      this.footerContainer = $(window._PREFIX_ID_FOOTER);
      //左侧容器
      this.leftContainer = $(window._PREFIX_ID_LEFT);
      //右侧容器
      this.rightContainer = $(window._PREFIX_ID_RIGHT);
      //Action容器
      this.actionContainer = $(window._PREFIX_ID_ACTION);

      //一般作为初始化数据,默认数据,例如:ajax前动作
      //或者作为埋点发送
      //数据初始化
      this.getInitialState();
      //组件函数编译完成
      this.componentWillMount();
      //组件渲染,这里包含ajax拉取数据
      this.render();
      //绑定事件
      this.setEvents();
      //组件完成装载
      //this.componentDidMount();
      //组件销毁,多页不提倡使用
      //this.componentWillUnmount();
    },
    //初始化方法
    getInitialState: noop,

    //组件装载前
    componentWillMount: noop,

    //组件完成转载
    componentDidMount: noop,

    //组件渲染
    render: noop,

    //组件销毁
    componentWillUnmount: noop,

    //Dom容器
    domContainer: null,

    /**
     * 绑定事件,这块需要开发者override
     * 为了更高性能,建议在初始化中只做一次
     * @method: setEvents
     * @param: null
     *
     * */
    setEvents: noop

  });

  return Page;

});