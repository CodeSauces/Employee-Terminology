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
      if(dragHeight > 45){
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


// var clicking = false;
// var lasty;

// $('#resizeDiv').mousedown(function(e){
//     clicking = true;
//     $('.status').text('mousedown');
//     lasty = e.pageY;
// });

// $(document).mouseup(function(e){
//     clicking = false;
//     console.log('mouseup');
//     console.log('click released, no more move event');
// })

// $('#resizeDiv').mousemove(function(e){
//     if(clicking == false) return;

//     // Mouse click + moving logic here
//     console.log('mouse moving');
//     var change= -(lasty-e.pageY);
//     $('#resizedContainer').stop(true,true).animate({'height': '+='+change})
//     // $('.cords').html('x:'+e.pageX+' y: '+e.pageY);
//     lasty= e.pageY;
// });





  $('li.nav-item').click(function(){
    var thatElement = $(this);
    thatElement.parent().find('.selected-tab').removeClass('selected-tab');
    thatElement.addClass('selected-tab')
  });
})