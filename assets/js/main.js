// $(document).on('shown.bs.modal', function () {
// $('')

//   },'.modal')
$(function(){
  $('.swap-div').click(function(){
    var thatElement = $(this);
    thatElement.next().toggleClass('height-0')
  
  })
  $('li.nav-item').click(function(){
    var thatElement = $(this);
    thatElement.parent().find('.selected-tab').removeClass('selected-tab');
    thatElement.addClass('selected-tab')
  });
})