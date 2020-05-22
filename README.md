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


<img src="/assets/images/set3.jpg" width="100%" height="auto">


Om mijn visual ook toegangelijk te maken voor mobiele gebruikers heb ik besloten om het gehele element 90 graden te draaien zodat de typmachine rechtop in beeld komt en met minimale css properties visueel gelijk te houden.
Door display flex te gebruiken heb ik mijn 2 functie knoppen bovenin zonder enige media queries hoeven aan te passen.
Wel heb ik de twee titeltjes onderaan de pagina gecentreerd onder elkaar zodat dit niet overelkaar heen viel. 


<img src="/assets/images/set2.jpg" width="100%" height="auto">









