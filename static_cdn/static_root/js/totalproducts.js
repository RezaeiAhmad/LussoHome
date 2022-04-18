// onclick function to show and hide drowpdown list

function dropdwonShow1() {
  var dropList1 = document.getElementById("dropdown-menu-show1");
  var flash1 = document.getElementById("flash1");

  if (dropList1.style.display === "none") {
    dropList1.style.display = "block";
    flash1.classList.add("rotate");
  } else {
    dropList1.style.display = "none";
    flash1.classList.remove("rotate");
  }
}

function dropdwonShow2() {
  var dropList2 = document.getElementById("dropdown-menu-show2");
  var flash2 = document.getElementById("flash2");

  if (dropList2.style.display === "none") {
    dropList2.style.display = "block";
    flash2.classList.add("rotate");
  } else {
    dropList2.style.display = "none";
    flash2.classList.remove("rotate");
  }
}
