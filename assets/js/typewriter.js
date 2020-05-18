document.addEventListener("mousemove", checkCoordinates);
let svg = document.getElementById('svg');
function checkCoordinates(e) {
  var Xmouse = event.pageX;
  var Ymouse = event.pageY;
 // var coords1 = "client - X: " + cX + ", Y coords: " + cY;

  //calc perc
  var Xperc = Xmouse / window.innerWidth;
  var Yperc = Ymouse / window.innerHeight;
  Xpos = Math.floor(Xperc * 100);
  Ypos = Math.floor(Yperc * 100);
  console.info("X Axis : " + Xpos + " Y Axis : " + Ypos);
  Xrev = 100 - Xpos;
  Yrev = 100 - Ypos;

  // svg.style.transform= 'transform: perspective('+ cX -500 +'px) rotateY(10deg);';

  svg.style.perspectiveOrigin = Xpos+'% '+Ypos+'%';


}