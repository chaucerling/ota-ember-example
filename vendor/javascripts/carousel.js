// plugin definition
$.fn.carousel = function(options, slider_callback) {
    var defaults = {
        current_pane: 0,
        show_pane_count: 1,
        slider_class_pre: ''
    };
    // Extend our default options with those provided.  
    var opts = $.extend(defaults, options);

    // Our plugin implementation code goes here.  
    var self = this;
    var element = this;
    var container = $(">ul", this);
    var panes = $(">ul>li", this);

    var pane_width = 0;
    var pane_count = panes.length;

    var current_pane = 0;
    var max_index = 0;


    /**
     * initial
     */
    this.init = function() {
        // var s_index = this.attr("data-slider-index");
        // if (s_index != undefined || s_index != "") {
        //     console.log("index: "+s_index);
        //     current_pane = parseInt(s_index);
        // };
        setPaneDimensions();

        $(window).on("load resize orientationchange", function() {
            setPaneDimensions();
        });
        max_index = pane_count - Math.ceil(opts.show_pane_count / 2);
        initTransfor();
    };

    function initTransfor() {
        $('.'+opts.slider_class_pre+current_pane).removeClass('none');
        var offset = -((100 / pane_count) * current_pane);
        setContainerOffset(offset);
    }

    /**
     * set the pane dimensions and scale the container
     */
    function setPaneDimensions() {
        pane_width = element.width() / opts.show_pane_count;
        panes.each(function() {
            $(this).width(pane_width);
        });
        container.width(pane_width * pane_count);
    };


    /**
     * show pane by index
     */
    this.showPane = function(index, animate, callback) {
        // between the bounds
        index = Math.max(0, Math.min(index, max_index));
        var current_li = this.find('li')[index+1];
        if (current_pane != index) {
            if (slider_callback != undefined) {
                slider_callback(index, current_pane, current_li);
            };
            current_pane = index;
            this.attr('data-slider-index', current_pane);
        }

        var offset = -((100 / pane_count) * current_pane);
        setContainerOffset(offset, animate);
        if (callback != undefined) {
            callback();
        }
    };


    function setContainerOffset(percent, animate) {
        container.removeClass("animate");
        if (animate) {
            container.addClass("animate");
        }

        if (Modernizr.csstransforms3d) {
            container.css("transform", "translate3d(" + percent + "%,0,0) scale3d(1,1,1)");
        } else if (Modernizr.csstransforms) {
            container.css("transform", "translate(" + percent + "%,0)");
        } else {
            var px = ((pane_width * pane_count) / 100) * percent;
            container.css("left", px + "px");
        }
    }

    this.next = function() {
        return this.showPane(current_pane + 1, true, 'next');
    };
    this.prev = function() {
        return this.showPane(current_pane - 1, true, 'prev');
    };

    this.first = function() {
        current_pane = 0
        return this.showPane(current_pane, true, 'first');
    };
    

    function handleHammer(ev) {
        // console.log(ev);
        // disable browser scrolling
        // ev.gesture.preventDefault();

        switch (ev.type) {
            case 'dragright':
            case 'dragleft':
                // stick to the finger
                var pane_offset = -(100 / pane_count) * current_pane;
                var drag_offset = ((100 / pane_width) * ev.gesture.deltaX) / pane_count;

                // slow down at the first and last pane
                if ((current_pane == 0 && ev.gesture.direction == "right") ||
                    (current_pane == pane_count - 1 && ev.gesture.direction == "left")) {
                    drag_offset *= .4;
                }

                setContainerOffset(drag_offset + pane_offset);
                break;

            case 'swipeleft':
                self.next();
                ev.gesture.stopDetect();
                break;

            case 'swiperight':
                self.prev();
                ev.gesture.stopDetect();
                break;

            case 'release':
                // more then 50% moved, navigate
                if (Math.abs(ev.gesture.deltaX) > pane_width / 2) {
                    if (ev.gesture.direction == 'right') {
                        self.prev();
                    } else {
                        self.next();
                    }
                } else {
                    self.showPane(current_pane, true);
                }
                break;
        }
    }

    if (this[0] == undefined) {
        return null;
    };
    
    // new Hammer(this[0], {
    //     drag_lock_to_axis: true
    // }).on("release dragleft dragright swipeleft swiperight", handleHammer);

    this.init();

    return this;
};
