window.onscroll = function scrollFunction() {

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("logo").style.width = "15%";
    } else {
      document.getElementById("logo").style.width = "30%";
    }
}

function mover(){
    document.getElementById("b21").src="img5.png";
    document.getElementById("b21").style.animation="float1 2000ms ease-in-out infinite";
}

function mout(){
    document.getElementById("b21").src="img4.png";
    document.getElementById("b21").style.animation="float 2000ms ease-in-out infinite";
}
  
const fo=document.getElementsByClassName("footer");
setInterval(
    function () {
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      fo[0].style.backgroundColor = "#"+randomColor;
    },1000);  

function onmov(){
    document.getElementsByClassName("column")[0].style.opacity="100%";
    document.getElementsByClassName("column")[0].style.transform="scale(1.02)";
    document.getElementsByClassName("column")[0].style.transition="1s";
}

function onmou(){
    document.getElementsByClassName("column")[0].style.opacity="50%";
    document.getElementsByClassName("column")[0].style.transform="scale(1.02)";
    document.getElementsByClassName("column")[0].style.transition="0.5s";
}
function onmov1(){
    document.getElementsByClassName("column")[1].style.opacity="100%";
    document.getElementsByClassName("column")[1].style.transform="scale(1.02)";
    document.getElementsByClassName("column")[1].style.transition="1s";
}

function onmou1(){
    document.getElementsByClassName("column")[1].style.opacity="50%";
    document.getElementsByClassName("column")[1].style.transform="scale(1.02)";
    document.getElementsByClassName("column")[1].style.transition="0.5s";
}
function onmov2(){
    document.getElementsByClassName("column")[2].style.opacity="100%";
    document.getElementsByClassName("column")[2].style.transform="scale(1.02)";
    document.getElementsByClassName("column")[2].style.transition="1s";
}

function onmou2(){
    document.getElementsByClassName("column")[2].style.opacity="50%";
    document.getElementsByClassName("column")[2].style.transform="scale(1.02)";
    document.getElementsByClassName("column")[2].style.transition="0.5s";
}
function onmov3(){
    document.getElementsByClassName("column")[3].style.opacity="100%";
    document.getElementsByClassName("column")[3].style.transform="scale(1.02)";
    document.getElementsByClassName("column")[3].style.transition="1s";
}

function onmou3(){
    document.getElementsByClassName("column")[3].style.opacity="50%";
    document.getElementsByClassName("column")[3].style.transform="scale(1.02)";
    document.getElementsByClassName("column")[3].style.transition="0.5s";
}


function mouo(){
    document.getElementById("a2").style.color="red";
    document.getElementById("a2").style.textDecoration="underline";
}
function mouou(){
    document.getElementById("a2").style.color="black";
    document.getElementById("a2").style.textDecoration="none";
}
