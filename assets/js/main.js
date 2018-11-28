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
})
