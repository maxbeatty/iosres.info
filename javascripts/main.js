// Find device, resolution, and orientation of client

// Update viewport orientation
function updateOrientation() {
  var o = window.orientation;

  if (o === 0 || o === 180) {
    o = 'portrait';
  } else if (o === 90 || o === -90) {
    o = 'landscape';
  } else {
    o = '';
  }

  return o;
}

// Get width, height, and orientation as HTML
function getResAndOrient() {
  var w = screen.width,
      h = screen.height,
      orient = updateOrientation();

  if (orient !== "") {
    if (orient === 'landscape') {
      h = w;
      w = window.innerWidth;
    }

    orient = " (" + orient + ")";
  }

  return w + " &times; " + h + orient;
}

var ua = navigator.userAgent,
    checker = {
      iOS: /(iPhone|iPod|iPad)/.test(ua)
    };

if (checker.iOS) {
  var msg = "",
      article = document.getElementById("main");
  checker = {
    iPhone: /iPhone/.test(ua),
    iPod: /iPod/.test(ua),
    iPad: /iPad/.test(ua)
  };

  // device
  if (checker.iPhone) {
    device = "iPhone";
  } else if (checker.iPod) {
    device = "iPod";
  } else if (checker.iPad) {
    device = "iPad";
  }

  reso = getResAndOrient();

  msg = device + "<small>" + reso + "</small>";

  detected = document.createElement("h1");
  detected.innerHTML = msg;
 
  article.insertBefore(detected, article.firstChild);

  window.onorientationchange = function() {
    resoHTML = article.getElementsByTagName('small');
    resoHTML[0].innerHTML = getResAndOrient();
  };
}

// TODO: create permalinks to tabs (/#resolution/px, /#device/iphone)