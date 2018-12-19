function myFunction() {
  var x = document.getElementById("sidebar");
  if (x.className === "sidebar") {
    x.className += "-sm";
  } else {
    x.className = "sidebar";
  }
}

