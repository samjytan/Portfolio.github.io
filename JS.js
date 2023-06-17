var slideIndex = 1;
var slideIndex2 = 1;
var slideIndex3 = 1;
var slideIndex4 = 1;
var slideIndex5 = 1;
var slideIndex6 = 1;
var slideIndex7 = 1;
var slideIndex8 = 1;
var slideIndex9 = 1; //jounce damper
var slideIndex10 = 1; //Suspension linkages
var slideIndex11 = 1; //wrist 1.5
var slideIndex12 = 1; //egg prototyping device

showDivs(slideIndex);
showDivs2(slideIndex2);
showDivs3(slideIndex3);
showDivs4(slideIndex4);
showDivs5(slideIndex5);
showDivs6(slideIndex6);
showDivs7(slideIndex7);
showDivs8(slideIndex8);
showDivs9(slideIndex9);
showDivs10(slideIndex10);
showDivs11(slideIndex11);
showDivs12(slideIndex12);


function plusDivs(n) {
  showDivs(slideIndex += n);
}

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function plusDivs3(n) {
  showDivs3(slideIndex3 += n);
}

function plusDivs4(n) {
  showDivs4(slideIndex4 += n);
}

function plusDivs5(n) {
  showDivs5(slideIndex5 += n);
}

function plusDivs6(n) {
  showDivs6(slideIndex6 += n);
}

function plusDivs7(n) {
  showDivs7(slideIndex7 += n);
}

function plusDivs8(n) {
  showDivs8(slideIndex8 += n);
}

function plusDivs9(n) {
  showDivs9(slideIndex9 += n);
}

function plusDivs10(n) {
  showDivs10(slideIndex10 += n);
}

function plusDivs11(n) {
  showDivs11(slideIndex11 += n);
}

function plusDivs12(n) {
  showDivs12(slideIndex12 += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("jamz");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("LED");
  if (n > x.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex2-1].style.display = "block";
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("UOR");
  if (n > x.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex3-1].style.display = "block";
}

function showDivs4(n) {
  var i;
  var x = document.getElementsByClassName("RBS");
  if (n > x.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex4-1].style.display = "block";
}

function showDivs5(n) {
  var i;
  var x = document.getElementsByClassName("EEV2");
  if (n > x.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex5-1].style.display = "block";
}

function showDivs6(n) {
  var i;
  var x = document.getElementsByClassName("camMount");
  if (n > x.length) {slideIndex6 = 1}
  if (n < 1) {slideIndex6 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex6-1].style.display = "block";
}

function showDivs7(n) {
  var i;
  var x = document.getElementsByClassName("EEV3");
  if (n > x.length) {slideIndex7 = 1}
  if (n < 1) {slideIndex7 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex7-1].style.display = "block";
}

function showDivs8(n) {
  var i;
  var x = document.getElementsByClassName("wrist");
  if (n > x.length) {slideIndex8 = 1}
  if (n < 1) {slideIndex8 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex8-1].style.display = "block";
}

function showDivs9(n) {
  var i;
  var x = document.getElementsByClassName("jounceDamper");
  if (n > x.length) {slideIndex9 = 1}
  if (n < 1) {slideIndex9 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex9-1].style.display = "block";
}

function showDivs10(n) {
  var i;
  var x = document.getElementsByClassName("RSL");
  if (n > x.length) {slideIndex10 = 1}
  if (n < 1) {slideIndex10 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex10-1].style.display = "block";
}

function showDivs10(n) {
  var i;
  var x = document.getElementsByClassName("RSL");
  if (n > x.length) {slideIndex10 = 1}
  if (n < 1) {slideIndex10 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex10-1].style.display = "block";
}

function showDivs11(n) {
  var i;
  var x = document.getElementsByClassName("wrist1.5");
  if (n > x.length) {slideIndex11 = 1}
  if (n < 1) {slideIndex11 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex11-1].style.display = "block";
}

function showDivs12(n) {
  var i;
  var x = document.getElementsByClassName("ESM");
  if (n > x.length) {slideIndex12 = 1}
  if (n < 1) {slideIndex12 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex12-1].style.display = "block";
}
