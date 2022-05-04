let toggle = document.getElementById("toggle");
let contul = document.getElementById("cont-ul");

toggle.onclick = function () {
  if (window.getComputedStyle(contul).display === "none") {
    contul.style.display = "flex";
    contul.style.animationName = "hover";
  } else {
    contul.style.animationName = "hoverrev";
    setTimeout(() => {
      contul.style.display = "none";
    }, 900);
  }
};

var string =
  "warrior who is sent by the Greek gods to kill Ares the god of war Armed with the Blades of Chaos";
var array = string.split("");
var timer;

function frameLooper() {
  if (array.length > 0) {
    document.getElementById("godh").innerHTML += array.shift();
  } else {
    clearTimeout(timer);
  }
  loopTimer = setTimeout("frameLooper()", 100);
}
frameLooper();
let dad = document.getElementById("dad");
let left = document.getElementById("left");
let right = document.getElementById("right");
let counter = 0;

function checkMediaQuery() {
  if (window.innerWidth > 768 && window.innerWidth < 991) {
    //////////////////
    let img = ["god.jpg", "dad.jpg", "4.jpg"];
    left.onclick = function () {
      function nextPic() {
        if (counter === -1) {
          counter = img.length - 1;
        }
        if (counter === img.length) {
          counter = 0;
        }
        dad.style.backgroundImage = "url(jpg/" + img[counter] + ")";
      }
      counter -= 1;
      nextPic();
    };

    right.onclick = function () {
      function nextPic() {
        if (counter === img.length) {
          counter = 0;
        }
        if (counter === -1) {
          counter = img.length - 1;
        }
        dad.style.backgroundImage = "url(jpg/" + img[counter] + ")";
      }
      counter += 1;
      nextPic();
    };
  }
  if (window.innerWidth > 991) {
    img = ["2.jpg", "22.jpg", "3.jpg", "sd.jpg", "god.jpg", "dad.jpg", "4.jpg"];

    left.onclick = function () {
      function nextPic() {
        if (counter === -1) {
          counter = img.length - 1;
        }
        if (counter === img.length) {
          counter = 0;
        }
        dad.style.backgroundImage = "url(jpg/" + img[counter] + ")";
      }
      counter -= 1;
      nextPic();
    };

    right.onclick = function () {
      function nextPic() {
        if (counter === img.length) {
          counter = 0;
        }
        if (counter === -1) {
          counter = img.length - 1;
        }
        dad.style.backgroundImage = "url(jpg/" + img[counter] + ")";
      }
      counter += 1;
      nextPic();
    };
  }
}
window.addEventListener("load", checkMediaQuery);

let navfilter = document.getElementsByClassName("nav-filter");
let ulfilter = document.getElementsByClassName("ul-filter");

let arrow = document.getElementsByClassName("arrow");

let ps2 = document.getElementsByClassName("ps2");
let pc = document.getElementsByClassName("pc");
let ps3 = document.getElementsByClassName("ps3");
let veta = document.getElementsByClassName("veta");
let ps4 = document.getElementsByClassName("ps4");
let x = ["pc", "ps2", "ps3", "veta", "portbel", "ps4"];
let portbel = document.getElementsByClassName("portbel");

let artecal = document.getElementsByClassName("artecal");

let ulli = document.getElementsByClassName("ulli");

let cancel = document.getElementById("cancel");

let ps3id = document.getElementById("ps3");
let ps4id = document.getElementById("ps4");
let vetaid = document.getElementById("veta");
let portbelid = document.getElementById("portbe");

for (let i = 0; i < navfilter.length; i++) {
  navfilter[i].onclick = function () {
    if (window.getComputedStyle(cancel).visibility === "hidden") {
      arrow[i].style.display = "none";
      navfilter[i].style.width = "100%";
      ulfilter[i].style.display = "flex";
      setTimeout(() => {
        cancel.style.animationName = "visrev";
      }, 500);
      setTimeout(() => {
        cancel.style.visibility = "visible";
      }, 500);
      for (let j = 0; j < ulli.length; j++) {
        ulli[j].onclick = function () {
          for (let k = 0; k < ulli.length; k++) {
            if (k === j) {
              continue;
            } else {
              setTimeout(() => {
                ulli[k].style.display = "none";
              }, 100);
            }
          }
          setTimeout(() => {
            for (let c = 0; c < navfilter.length; c++) {
              if (c === i) {
                continue;
              } else {
                setTimeout(() => {
                  navfilter[c].style.animationName = "vis";
                }, 200);
                setTimeout(() => {
                  navfilter[c].style.visibility = "hidden";
                }, 200);
              }
            }
            navfilter[i].style.width = "30%";
          }, 300);
          setTimeout(() => {
            for (let ar = 0; ar < artecal.length; ar++) {
              if (artecal[ar].classList.contains(x[j])) {
                artecal[ar].style.display = "block";
              } else {
                artecal[ar].style.display = "none";
              }
            }
          }, 1800);
        };
      }
    }
  };
}
cancel.onclick = function () {
  for (let i = 0; i < navfilter.length; i++) {
    arrow[i].style.display = "block";
    cancel.style.animationName = "vis";
    cancel.style.visibility = "hidden";
    navfilter[i].style.visibility = "visible";
    navfilter[i].style.width = "50px";
    ulfilter[i].style.display = "none";
    for (let ar = 0; ar < artecal.length; ar++) {
      artecal[ar].style.display = "block";
    }
    for (let j = 0; j < ulli.length; j++) {
      ulli[j].style.display = "block";
    }
  }
};
