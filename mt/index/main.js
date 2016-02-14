define(['$', 'Page', 'Header', 'mt/bus_mod/index/list'], function($, Page, Header, List){

  var Index = Page.extend({

    //控制主容器
    domContainer: $('#container'),

    //初始化数据
    getInitialState: function(){
      var data = {
        title: '测试',
        list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
      };
      this.data = data;
    },

    //组件即将被加载
    componentWillMount: function(){},

    //执行渲染
    render: function(){
      var list = List(this.data);
      //new Header({type: 'default'});

      //new Header({type: 'search'});

      new Header({type: 'title', setting: {title: '首页', leftBtn:'回退', rightBtn: '地图'}});

      this.contentContainer.append(list);

      this.componentDidMount();
    },

    //组件完成装载
    componentDidMount: function(){},

    //绑定DOM事件
    setEvents: function(){
      var back = $('.header_20p').find('.header_back_span');
      back.on('click', this.clickBody);
    },

    clickBody: function(){
      console.log('back');
    }

  });


  return new Index();
});




