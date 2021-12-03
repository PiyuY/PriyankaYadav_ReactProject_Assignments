function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menu-nav") {
      x.className += " responsive";
    } else {
      x.className = "menu-nav";
    }
  }