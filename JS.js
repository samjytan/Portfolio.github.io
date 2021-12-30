var slideIndex = 1;
var slideIndex2 = 1;
var slideIndex3 = 1;
var slideIndex4 = 1;
showDivs(slideIndex);
showDivs2(slideIndex2);
showDivs3(slideIndex3);
showDivs4(slideIndex4);

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



