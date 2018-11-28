// $(document).on('shown.bs.modal', function () {
// $('')

//   },'.modal')
$(function(){
  // $('.footer-swap-icon').click(function(){
  //   var thatElement = $(this);
  //   thatElement.parent().toggleClass('height-0');
  //   thatElement.next().toggleClass('zidex-1');
  //   thatElement.toggleClass('zidex-1');
  // })
  
  function initDrag(e) {
    isDrag = true;
    if(e.clientY == undefined){
      e = e.touches[0]
    }
   startX = e.clientX;
   startY = e.clientY;
   startHeight = parseInt(document.defaultView.getComputedStyle(resizedContainer).height, 10);

  }
  
  function doDrag(e) {
    if(isDrag){
      if(e.clientY == undefined){
        e = e.touches[0]
      }  
      var dragHeight = (startHeight - e.clientY + startY)
      if(dragHeight > 45 && dragHeight < 300){
        resizedContainer.style.height = dragHeight + 'px';
      }
    }

  }
  
  function stopDrag(e) {
    isDrag = false;
    if(e.clientY == undefined){
      e = e.touches[0]
    }
  }
var SwipDiv = document.getElementById('resizeDiv');
var resizedContainer = document.getElementById('resizedContainer');
var isDrag = false;
if(SwipDiv){

  SwipDiv.addEventListener('touchstart', initDrag, false);
  SwipDiv.addEventListener('touchmove', doDrag, false);
  SwipDiv.addEventListener('touchend', stopDrag, false);
  var  startY, startHeight;


}

  $('li.nav-item').click(function(){
    var thatElement = $(this);
    thatElement.parent().find('.selected-tab').removeClass('selected-tab');
    thatElement.addClass('selected-tab')
  });


  $.fn.datepicker.dates['en'] = {
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    daysMin: ["일", "월", "화", "수", "목", "금", "토"],
    months: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov",
        "Dec"
    ],
    today: "Today",
    clear: "Clear",
    format: "yyyy-mm-dd",
    titleFormat: "yyyy-MM",
    /* Leverages same syntax as 'format' */
    weekStart: 0
};
$('.datepicker').datepicker({
    language: "en",
});
$('.datepicker').datepicker()
    .on('show', function (e) {
        $('.datepicker-days .next,.datepicker-days .prev').html('');
        var prev = $('.datepicker-days .prev');
        prev.attr('colspan', 2);
        prev.next().attr('colspan', 3);
        $('.datepicker').addClass('datepicker-open');
        if($('#datepicker-dropdown').length < 1){
          $('body').append('<div id="datepicker-dropdown"></div>');
        }

        $('.dropdown-menu.datepicker-open').css({
            top:$('.datepicker-open').offset().top,
        })
    });
$('.datepicker').datepicker()
    .on('hide', function (e) {
        $('.datepicker').removeClass('datepicker-open');
        $('div#datepicker-dropdown').remove();
    });

})
