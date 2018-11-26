// $(document).on('shown.bs.modal', function () {
// $('')

//   },'.modal')
$(function(){
  $('.swap-div').click(function(){
    var thatElement = $(this);
    thatElement.next().toggleClass('height-0')
  
  })
})