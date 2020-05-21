
// change svg perspective when moving mouse cusor
document.addEventListener("mousemove", checkCoordinates);
let svg = document.querySelector('svg');
function checkCoordinates(e) {
  let Xmouse = event.pageX;
  let Ymouse = event.pageY;
  //calc perc
  let Xperc = Xmouse / window.innerWidth;
  let Yperc = Ymouse / window.innerHeight;
  Xpos = Math.floor(Xperc * 100);
  Ypos = Math.floor(Yperc * 100);

  //console.info("X Axis : " + Xpos + " Y Axis : " + Ypos);
  Xrev = Xpos - 50;
  Yrev =  Ypos + 600;
  svg.style.transform = 'perspective('+Yrev+'px) rotateY('+Xrev+'deg)';
}




// cursor invert circle
const cursor = document.getElementById("cursor");
document.addEventListener('mousemove', e => {checkCusor(e)});
window.addEventListener('load', (e) => {checkCusor(e);});

function checkCusor(e) {
  cursor.style.top = (e.pageY - 12) + "px";
  cursor.style.left = (e.pageX - 12) + "px";

}



//change rangeslide blur
let slider = document.querySelector('.slider');
let svgContainer = document.querySelector('svg');
// use 'change' instead to see the difference in response
slider.addEventListener('input', function () {
  console.log(slider.value);
  svgContainer.style.filter =  'blur('+slider.value+'px)';
}, false);




// invert color button
let darkmodeButton = document.querySelector('.darkmode');
let body = document.querySelector('body');
darkmodeButton.addEventListener('click', darkmode);

function darkmode(){
  body.classList.toggle('invert');
}