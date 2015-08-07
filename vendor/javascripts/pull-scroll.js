$.fn.pullScroll = function (options, ajaxFn) {
  var defaults = {
    identify: '#wrapper'
  };
  // Extend our default options with those provided.  
  var opts = $.extend(defaults, options);
  var self = this;
  var items_per_page = 10;
  var scroll_in_progress = false;
  var myScroll;

  /**
   * initial
   */
  this.init = function() {
    load_content();
  }

  /**
   * 手动刷新
   */
  this.refreshAction = function (ajaxRefresh) {

    // clear content
    self.find('> #scroller > ul').html('');
    // refresh data
    ajaxRefresh(self, 0);
    // refresh view
    load_content_refresh('refresh');
      self.find('> #scroller > ul').data('page', 0);
    // Since "topOffset" is not supported with iscroll-5
    self.find('> .scroller').css({top: 0});
  }

  this.refreshView = function () {
    myScroll.refresh();
    pullActionCallback();
  }

  function load_content(refresh, next_page) {

      // This is a DEMO function which generates DEMO content into the scroller.
      // Here you should place your AJAX request to fetch the relevant content (e.g. $.post(...))
      // ajaxFn
      console.log(refresh, next_page);
      setTimeout(function () { // This immitates the CALLBACK of your AJAX function
        if(ajaxFn != undefined){
          if (!refresh) {
              // Loading the initial content
          } else if (refresh && !next_page) {
              // Refreshing the content
              self.find('> #scroller > ul').html('');
              // $('#wrapper > #scroller > ul').append('<li>Pretty row Refreshed</li>')
              ajaxFn(self, 1);
          } else if (refresh && next_page) {
              // Loading the next-page content and refreshing
              // $('#wrapper > #scroller > ul').append('<li>Pretty row X</li>');
              ajaxFn(self, next_page);
          }
        }
        load_content_refresh(refresh);
        
      }, 1000);

  };

  function load_content_refresh(refresh) {
    if (refresh) {
        myScroll.refresh();
        pullActionCallback();
    } else {
        if (myScroll) {
            myScroll.destroy();
            $(myScroll.scroller).attr('style', ''); // Required since the styles applied by IScroll might conflict with transitions of parent layers.
            myScroll = null;
        }
        trigger_myScroll();
    }
  }

  function pullUpAction(callback) {
      if (self.find('> #scroller > ul').data('page')) {
          var next_page = parseInt(self.find('> #scroller > ul').data('page'), 10) + 1;
      } else {
          var next_page = 1;
      }
      load_content('refresh', next_page);
      self.find('> #scroller > ul').data('page', next_page);
      self.find('> .scroller').css({bottom: 0});
      if (callback) {
          callback();
      }
  }

  function pullActionCallback() {
      if (pullUpEl && pullUpEl.className.match('loading')) {

          pullUpEl.className = 'pullUp';
          pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';

      }
  }

  function trigger_myScroll(offset) {
      // pullUpEl = document.querySelector('#wrapper .pullUp');
      pullUpEl = self.find('.pullUp').get(0);
      if (pullUpEl) {
          pullUpOffset = pullUpEl.offsetHeight;
      } else {
          pullUpOffset = 0;
      }

      if (self.find('ul > li').length < items_per_page) {
          // If we have only 1 page of result - we hide the pullup and pulldown indicators.
          self.find('.pullUp').hide();
          offset = 0;
      } else if (!offset) {
          // If we have more than 1 page of results and offset is not manually defined - we set it to be the pullUpOffset.
          offset = pullUpOffset;
      }

      myScroll = new IScroll(opts.identify, {
          probeType: 1,
          tap: true,
          click: false,
          preventDefaultException: {tagName: /.*/},
          mouseWheel: true,
          scrollbars: true,
          fadeScrollbars: true,
          interactiveScrollbars: false,
          keyBindings: false,
          deceleration: 0.0002
      });

      myScroll.on('scrollStart', function () {
          scroll_in_progress = true;
      });

      myScroll.on('scroll', function () {

          scroll_in_progress = true;

          // if ($('#wrapper ul > li').length >= items_per_page) {
              if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                pullUpEl.className = 'pullUp flip';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '松手开始更新...';
                this.maxScrollY = this.maxScrollY;
              } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                pullUpEl.className = 'pullUp';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
                this.maxScrollY = pullUpOffset;
              }

              console.log(this.y);
          // }
      });
      myScroll.on('scrollEnd', function () {
          console.log('scroll ended');
          setTimeout(function () {
              scroll_in_progress = false;
          }, 100);
          if (pullUpEl.className.match('flip')) {
            pullUpEl.className = 'pullUp loading';
            pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';        
            pullUpAction(); // Execute custom function (ajax call?)
          }
      });

      // In order to prevent seeing the "pull down to refresh" before the iScoll is trigger - the wrapper is located at left:-9999px and returned to left:0 after the iScoll is initiated
      setTimeout(function () {
          $('#wrapper').css({left: 0});
      }, 100);
  }

  this.init();
  return this;
};