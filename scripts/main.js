let berd = document.querySelector('#berd');
let h1 = document.querySelector('h1');


function bigBerd(){
  TweenMax.to(berd, 0,{scale:3})
}
function moveBerd(){
  h1.innerHTML="where you goin"
  TweenMax.to(h1, 0, {y:400, x:0})
  TweenMax.to(berd,0,{x:-500})
  vibrate()
}
 function event (e) {
  if (e.clientX < 100) {
    bigBerd()
    moveBerd()
    document.removeEventListener('mousemove',event,)
  }
 }

function vibrate(){
  setTimeout(() => {
    TweenMax.to(berd, 0,{scale:2.5,y:400,x:400})
    TweenMax.to(berd, 0.001, {x:"+=10", yoyo:true, repeat:-1})
    TweenMax.to(berd, 0.001, {x:"-=10", yoyo:true, repeat:-1})
  }, 10000);
}

document.addEventListener('mousemove',event);
 

setTimeout(() => {
  TweenMax.to(berd, 0,{scale:8,y:300})
  TweenMax.to(h1, 0, {rotation:-25, y:500, x:-300})
  h1.innerHTML="Hey dude you look nice today"
  vibrate()
}, 2000);



  