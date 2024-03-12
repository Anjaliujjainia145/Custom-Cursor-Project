var main = document.querySelector('#main');
var crsr = document.querySelector('.curser');

crsr.style.backgroundColor = 'white';

main.addEventListener("mousemove", function(dets){
  crsr.style.left = dets.x+"px"
  crsr.style.top = dets.y+"px"
})