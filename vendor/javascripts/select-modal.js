// $(function () {
//   $('.select-item').on('click', function (e) {
//     var $this = $(this);
//     var selectContent = $('.select-item').parent('.select-content');
//     selectContent.find('.selected-item').removeClass('selected-item');
//     $this.addClass('selected-item');
//   });
//   $('.modal-finish').on('click', function (e) {
//     var $this = $(this);
//     var modal = $this.closest('.modal');
//     var selectContent = modal.find('.select-content');
//     var selectedItem = modal.find('.selected-item');
//     if (selectedItem == undefined || selectContent == undefined) {return false;};
//     var dataBind = $(selectContent.attr('data-bind-id'));
//     var dataShow = $(selectContent.attr('data-bind-show'));
//     if (dataBind != undefined) {dataBind.val(selectedItem.attr('data-value'))};
//     if (dataShow != undefined) {dataShow.html(selectedItem.attr('data-name'))};
//     modal.modal('hide');
//   });
// });


$.fn.selectModal = function (options, ajaxFn) {
  var defaults = {
  };

  // Extend our default options with those provided.  
  var opts = $.extend(defaults, options);
  var self = this;

  this.init = function () {
    self.find('.select-item').on('click', function (e) {
      var $this = $(this);
      var selectContent = $('.select-item').parent('.select-content');
      self.find('.selected-item').removeClass('selected-item');
      $this.addClass('selected-item');
    });

    self.find('.modal-finish').on('click', function (e) {
      var $this = $(this);
      var modal = self;
      var selectContent = modal.find('.select-content');
      var selectedItem = modal.find('.selected-item');
      if (selectedItem == undefined || selectContent == undefined) {return false;};
      var dataBind = $(selectContent.attr('data-bind-id'));
      var dataShow = $(selectContent.attr('data-bind-show'));
      if (dataBind != undefined) {dataBind.val(selectedItem.attr('data-value'))};
      if (dataShow != undefined) {dataShow.html(selectedItem.attr('data-name'))};

      if (ajaxFn != undefined) {
        ajaxFn(modal);
      };
      modal.modal('hide');
    });
  }

  this.init();
  return this;
};
