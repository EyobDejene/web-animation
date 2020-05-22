# web-animation
Minor visual interface design

<img src="/assets/images/header.gif" width="100%" height="auto">

# Artwork

<img src="/assets/images/artwork.jpg" width="100%" height="auto">

De Olivetti 82 Diaspron, is een schrijfmachine volgens een geheel nieuw ontwerp,
Het is het resultaat van een halve eeuw technische ervaringen en wetenschappelijk onderzoek.
Vervaardigd van hoogwaardige materialen, verenigt zijn fraaie vormgeving met mechanische perfectie en sterke 
constructie.
Een zuiver alignement en voortreffelijk scherp schrift waarborgen de hoge kwaliteiten van het geschrevene op iedere papiersoort, stencil en offsetmaster. Een uiterst lichte aanslag van toetsen verhoogt de snelheid van werken.
De olivetti 82 Diaspron is construeert voor jarenlang continu- en intensief gebruik voor het drukke, moderne kantoor.


>Artwork by:  Pintori & Giovanni

>Decade: 1960s

>Found on:
[Online Archive](http://oa.letterformarchive.org/item?workID=lfa_pintori_0041&LFAPics=Yes)

# Workflow


## Style 
Ik werd geïnspireerd door de vele elementen die het kunstwerk bevatte.
Al snel had ik ideeën in mijn hoofd hoe bepaalde elementen konden bewegen binnen het ontwerp. Aangezien het een typmachine heb ik mijn vooral gericht op het mechanische gedeelte en heb ik er voor gekozen om het mechanisme tot leven te brengen.

Allereerst heb ik naar het ontwerp gekeken en bepaald welke elementen ik nodig heb om het ontwerp tot leven te brengen.
Deze elementen heb ik in illustrator nagemaakt en geëxporteerd als svg.
Vanuit hier heb ik de svg code gebruikt en deze in mijn HTML geplaatst om daarna met behulp van CSS en Javascript leven in te blazen.

<img src="/assets/images/set1.jpg" width="100%" height="auto">


Om de achtergrondtextuur ongeveer hetzelfde te krijgen zoals in mijn artwork heb ik een cream paper pattern gebruikt die ik op de body heb geplaatst met een beige achtergrondkleur.
Daarbij heb ik ook op verschillende elementen van de svg ook nog wat transparantie en textuur toepast zodat het een papier achtig feeling heeft gekregen.

Het groene mechanisme van de typmachine was nog een lastige klus om te animeren dit kwam doordat de elementen op verschillende hoeken zijn geplaatst en de svg ook nog zijn gelaagd.
Dit heb ik kunnen oplossen door per pixel te kijken wat de hoek van iedere element is en daarbij vanaf dit punt het binnenste laag te animeren.

>Om het middelpunt te bepalen van de groene elementen heb ik deze 2 regels toegepast en vanuit daar animation keyframes 
gekoppeld.

``transform-box: fill-box; 
transform-origin: center;``

Vanuit hier heb ik doormiddel van keyframes animations gemaakt die iedere element in en uit laat schuiven.

## Responsive 
Om mijn visual ook toegangelijk te maken voor mobiele gebruikers heb ik besloten om het gehele element 90 graden te draaien zodat de typmachine rechtop in beeld komt en met minimale css properties visueel gelijk te houden.
Door display flex te gebruiken heb ik mijn 2 functie knoppen bovenin zonder enige media queries hoeven aan te passen.
Wel heb ik de twee titeltjes onderaan de pagina gecentreerd onder elkaar zodat dit niet overelkaar heen viel. 
Door mijn visual in procenten te zetten schaalt mee met de window size. 
<img src="/assets/images/set3.jpg" width="100%" height="auto">

## Interactivity
* Dark mode 
* Mouse (Perspective)
* Blur (depth of field)
* Keyboard (keyboard press + sound)

### Dark mode
<img src="/assets/images/set2.jpg" width="100%" height="auto">

Omdat ik ook wou experimenteren met inverted colors heb ik een dark mode functie toegevoegd die de kleuren op de hele
 pagina omdraaien en de body kleur veranderd in zwart.
Dit heb ik met behulp van 1 css property kunnen regelen en een paar regels javascript.

```<style>
.invert{
    filter: invert(100%) hue-rotate(90deg);
    background-color: #090B0E;
    background-image: none;
}
```
```<script> let darkmodeButton = document.querySelector('.darkmode');
 let body = document.querySelector('body');
 darkmodeButton.addEventListener('click', darkmode);
 
 function darkmode(){
   body.classList.toggle('invert');
 }
 ```
 
### Mouse (perspective) 
Door met je muis over het svg element te gaan volgt het element de muis.
Daarbij heb ik gebruik gemaakt van het css propery: perspective en rotate.
Eerst heb ik uitgerekend met behulp van javascript waarbij mijn muis zich bevindt en aan de hand daarvan een 
berekening gemaakt die weer de style van het svg element manipuleerd in het gewenste resultaat weergeeft.

`transform: perspective(0px) rotateY(0deg);`

```<script>
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
```

### Blur (depth of field)
Om een depth of field effect te creëren heb ik 2 elementen gebruikt die gebruik maken van een blur effect.
Doormiddel van een range slider rechtsboven in kan de intensiteit worden bepaald.
De svg element in het midden zal meer blur krijgen hoe verder er wordt aan de range slider wordt gedraaid en waarbij de 2 titels onderin juist steeds minder blur zullen krijgen. 
Hiermee wordt een bijzonder effect gecreëerd. 
Dit effect heb ik kunnen behalen door gebruik te maken van CSS en Javascript.

```<style>
.wrap{
    display: flex;
    justify-content:center;
    position: absolute;
    align-content:space-evenly;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0%;
    width: 100%;
    filter:blur(10px);
}
``` 

```<script>
//change rangeslide blur
let slider = document.querySelector('.slider');
let svgContainer = document.querySelector('svg');
let wrap = document.querySelector('.wrap');
slider.addEventListener('input', function () {
  svgContainer.style.filter =  'blur('+slider.value+'px)';
  wrap.style.filter =  'blur('+( Math.abs(slider.value - 10))+'px)';
}, false);
```

### Keyboard (keyboard + sound)
Voor interactiveit heb ik geprobeerd om het toetsenbord werkend te krijgen, 
dit heb ik gedaan doormiddel van een class aan te maken die zodra er op het toetsenbord een keydown registeerd het svg element manipuleert. Hiervoor heb ik Javascript gebruikt en 1 css class.
Daarbij heb ik sound effects gekoppeld aan iedere keydown registratie zodat het gevoel van een typmachine terug komt.

```<style>
/* keyboard */
#keys .st7:hover{
    transform-box: fill-box;
    transform-origin: center;
    transform: scale(0.7);
    -ms-transform: scale(0.7);
    -webkit-transform: scale(0.7);
}

.pressed{
    transform-box: fill-box;
    transform-origin: center;
    animation-duration: 0.1s;
    animation-name: pressed;
    animation-direction: alternate;
}

```


## Experiment 
* CSS filter (invert colors)
* CSS filter (blur)
* CSS custom mouse with inverted colors
* CSS animations
* CSS keyframes
* CSS transform
* CSS blend mode

```<style>
animation-iteration-count: infinite;
animation-direction: alternate;
animation-fill-mode: forwards;
transform-box: fill-box;
transform-origin: center;
transform: perspective()
mix-blend-mode: difference;
```

 



#Sources
* [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [CSS Filters](https://flaviocopes.com/css-filters/)
* [CSS Custom Mouse](https://codepen.io/m3t4lch7/pen/VwwOKNd?__cf_chl_jschl_tk__=d8d14bbbf5f04058b17ae3bb7a5b5a3c81f5d983-1589981744-0-Ae3xPcDazmaG9j5XT58mhwNfW4WBCmjjJPFNqtLMbyYnBVDKGVkLoLYXAAXBWfmRpTdIC9hc60ErXpNnoAyX3fkye8JfD_pSpfcIohJvqhN4R1TVG1V6vqDHNviU7xh-axtNPaFK4bKA58DoGyqIvGDxrcOvHDJRRnYgy5tTk60CXtLBnLq4_lM8lmnXZG6IkABQj02DfZBuE4_WWEBNuxBZsbZwDuk0vvQd4sI6imoBfLIwEIbjk3oyS2jrYAHcTS9j7k7Mcnr7oBcY7_RQQ0i5wr23aoi0hhg6h3MCOiKl4A_yH-Panp84IVINvgE0qHDkFxOYKYY0WL5Sx3_O7ZrMY1bXkJs8UoO1sKZAahBo)
* [CSS Tricks Almanac](https://css-tricks.com/almanac/)
* [Art Work](http://oa.letterformarchive.org/item?workID=lfa_pintori_0041&LFAPics=Yes)





