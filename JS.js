var slideIndex = 1;
var slideIndex2 = 1;
showDivs(slideIndex);
showDivs2(slideIndex2);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
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




