
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
let wrap = document.querySelector('.wrap');
// use 'change' instead to see the difference in response
slider.addEventListener('input', function () {


  console.log(slider.value);
  svgContainer.style.filter =  'blur('+slider.value+'px)';
  wrap.style.filter =  'blur('+( Math.abs(slider.value - 10))+'px)';
}, false);




// invert color button
let darkmodeButton = document.querySelector('.darkmode');
let body = document.querySelector('body');
darkmodeButton.addEventListener('click', darkmode);

function darkmode(){
  body.classList.toggle('invert');
}



//keyboard

document.addEventListener('keydown', (e) => {
    console.log(`Key "${e.key}" pressed  [event: keydown]`);
    if(e.key == "1"){
      document.querySelector('#_x31_').classList.add('pressed');
    }
    if(e.key == "2"){
      document.querySelector('#_x32_').classList.add('pressed');
    }
    if(e.key == "3"){
      document.querySelector('#_x33_').classList.add('pressed');
    }
    if(e.key == "4"){
      document.querySelector('#_x34_').classList.add('pressed');
    }
    if(e.key == "5"){
      document.querySelector('#_x35_').classList.add('pressed');
    }
    if(e.key == "6"){
      document.querySelector('#_x36_').classList.add('pressed');
    }
    if(e.key == "7"){
      document.querySelector('#_x37_').classList.add('pressed');
    }
    if(e.key == "8"){
      document.querySelector('#_x38_').classList.add('pressed');
    }
    if(e.key == "9"){
      document.querySelector('#_x39_').classList.add('pressed');
    }
    if(e.key == "0"){
      document.querySelector('#_x30_').classList.add('pressed');
    }
    if(e.key == "q"){
      document.querySelector('#q_1_').classList.add('pressed');
    }
    if(e.key == "w"){
      document.querySelector('#w_1_').classList.add('pressed');
    }
    if(e.key == "e"){
      document.querySelector('#e_1_').classList.add('pressed');
    }
    if(e.key == "r"){
      document.querySelector('#r_1_').classList.add('pressed');
    }
    if(e.key == "t"){
      document.querySelector('#t_1_').classList.add('pressed');
    }
    if(e.key == "y"){
      document.querySelector('#y_1_').classList.add('pressed');
    }
    if(e.key == "u"){
      document.querySelector('#u_1_').classList.add('pressed');
    }
    if(e.key == "i"){
      document.querySelector('#i_1_').classList.add('pressed');
    }
    if(e.key == "o"){
      document.querySelector('#o_1_').classList.add('pressed');
    }
    if(e.key == "p"){
      document.querySelector('#p_1_').classList.add('pressed');
    }
    if(e.key == "a"){
      document.querySelector('#a').classList.add('pressed');
    }
    if(e.key == "s"){
      document.querySelector('#s').classList.add('pressed');
    }
    if(e.key == "d"){
      document.querySelector('#d').classList.add('pressed');
    }
    if(e.key == "f"){
      document.querySelector('#f').classList.add('pressed');
    }
    if(e.key == "g"){
      document.querySelector('#g').classList.add('pressed');
    }
    if(e.key == "h"){
      document.querySelector('#h').classList.add('pressed');
    }
    if(e.key == "j"){
      document.querySelector('#j').classList.add('pressed');
    }
    if(e.key == "k"){
      document.querySelector('#k').classList.add('pressed');
    }
    if(e.key == "l"){
      document.querySelector('#l').classList.add('pressed');
    }
    if(e.key == ":"){
      document.querySelector('#dots_').classList.add('pressed');
    }
    if(e.key == "z"){
      document.querySelector('#z').classList.add('pressed');
    }
    if(e.key == "x"){
      document.querySelector('#x').classList.add('pressed');
    }
    if(e.key == "c"){
      document.querySelector('#c').classList.add('pressed');
    }
    if(e.key == "v"){
      document.querySelector('#v').classList.add('pressed');
    }
    if(e.key == "b"){
      document.querySelector('#b').classList.add('pressed');
    }
    if(e.key == "n"){
      document.querySelector('#n').classList.add('pressed');
    }
    if(e.key == "m"){
      document.querySelector('#m').classList.add('pressed');
    }
    if(e.key == ","){
      document.querySelector('#_x2C_').classList.add('pressed');
    }
    if(e.key == "."){
      document.querySelector('#_x2E_').classList.add('pressed');
    }
    if(e.key == " "){
      document.querySelector('#spacebar').classList.add('pressed');
    }
});


document.addEventListener('keyup', (e) => {
  console.log(`Key "${e.key}" pressed  [event: keyup]`);
  if(e.key == "1"){
    document.querySelector('#_x31_').classList.remove('pressed');
  }
  if(e.key == "2"){
    document.querySelector('#_x32_').classList.remove('pressed');
  }
  if(e.key == "3"){
    document.querySelector('#_x33_').classList.remove('pressed');
  }
  if(e.key == "4"){
    document.querySelector('#_x34_').classList.remove('pressed');
  }
  if(e.key == "5"){
    document.querySelector('#_x35_').classList.remove('pressed');
  }
  if(e.key == "6"){
    document.querySelector('#_x36_').classList.remove('pressed');
  }
  if(e.key == "7"){
    document.querySelector('#_x37_').classList.remove('pressed');
  }
  if(e.key == "8"){
    document.querySelector('#_x38_').classList.remove('pressed');
  }
  if(e.key == "9"){
    document.querySelector('#_x39_').classList.remove('pressed');
  }
  if(e.key == "0"){
    document.querySelector('#_x30_').classList.remove('pressed');
  }
  if(e.key == "q"){
    document.querySelector('#q_1_').classList.remove('pressed');
  }
  if(e.key == "w"){
    document.querySelector('#w_1_').classList.remove('pressed');
  }
  if(e.key == "e"){
    document.querySelector('#e_1_').classList.remove('pressed');
  }
  if(e.key == "r"){
    document.querySelector('#r_1_').classList.remove('pressed');
  }
  if(e.key == "t"){
    document.querySelector('#t_1_').classList.remove('pressed');
  }
  if(e.key == "y"){
    document.querySelector('#y_1_').classList.remove('pressed');
  }
  if(e.key == "u"){
    document.querySelector('#u_1_').classList.remove('pressed');
  }
  if(e.key == "i"){
    document.querySelector('#i_1_').classList.remove('pressed');
  }
  if(e.key == "o"){
    document.querySelector('#o_1_').classList.remove('pressed');
  }
  if(e.key == "p"){
    document.querySelector('#p_1_').classList.remove('pressed');
  }
  if(e.key == "a"){
    document.querySelector('#a').classList.remove('pressed');
  }
  if(e.key == "s"){
    document.querySelector('#s').classList.remove('pressed');
  }
  if(e.key == "d"){
    document.querySelector('#d').classList.remove('pressed');
  }
  if(e.key == "f"){
    document.querySelector('#f').classList.remove('pressed');
  }
  if(e.key == "g"){
    document.querySelector('#g').classList.remove('pressed');
  }
  if(e.key == "h"){
    document.querySelector('#h').classList.remove('pressed');
  }
  if(e.key == "j"){
    document.querySelector('#j').classList.remove('pressed');
  }
  if(e.key == "k"){
    document.querySelector('#k').classList.remove('pressed');
  }
  if(e.key == "l"){
    document.querySelector('#l').classList.remove('pressed');
  }
  if(e.key == ":"){
    document.querySelector('#dots_').classList.remove('pressed');
  }
  if(e.key == "z"){
    document.querySelector('#z').classList.remove('pressed');
  }
  if(e.key == "x"){
    document.querySelector('#x').classList.remove('pressed');
  }
  if(e.key == "c"){
    document.querySelector('#c').classList.remove('pressed');
  }
  if(e.key == "v"){
    document.querySelector('#v').classList.remove('pressed');
  }
  if(e.key == "b"){
    document.querySelector('#b').classList.remove('pressed');
  }
  if(e.key == "n"){
    document.querySelector('#n').classList.remove('pressed');
  }
  if(e.key == "m"){
    document.querySelector('#m').classList.remove('pressed');
  }
  if(e.key == ","){
    document.querySelector('#_x2C_').classList.remove('pressed');
  }
  if(e.key == "."){
    document.querySelector('#_x2E_').classList.remove('pressed');
  }
  if(e.key == " "){
    document.querySelector('#spacebar').classList.remove('pressed');
  }
});