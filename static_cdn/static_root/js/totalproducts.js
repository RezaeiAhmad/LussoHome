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

// ......... when click on filtering , show category and hide main .......... 
function filtering () {
  document.getElementById("mainId").style.display = "none";
  document.getElementById("category-filteringId").style.display = "block";
 
  
}

// ............ when click on close icon hide the category ......... 

function hideCategory() {
  document.getElementById("mainId").style.display = "block";
  document.getElementById("category-filteringId").style.display = "none";
  document.getElementById("therd-section-ofsidebarId").style.display ="flex";
  document.getElementById("ordering-mobileId").style.display = "block";
}


// ................. show filtering in mobiel size when click on filtering .......
function filteringMobile() {
  document.getElementById("mainId").style.display = "none";
  document.getElementById("category-filteringId").style.display = "block";
document.getElementById("ordering-mobileId").style.display = "none";
}

function orderingMobile() {
  document.getElementById("therd-section-ofsidebarId").style.display ="none";
  document.getElementById("mainId").style.display = "none";
  document.getElementById("category-filteringId").style.display = "block";
}


  // .................... header ........... 

/// show dashbord when click on hamber icon
function showDashbord () {
  document.getElementById("dashbord").style.display = "flex";
}

/// hide dashbord when click on close icon
function hideDashbord () {
  document.getElementById("dashbord").style.display = "none";
}
/// show menu in mobile when click on profile icon
function showMenu () {
  document.getElementById("menu-mobile").style.display = "flex";
}

/// hide menu in mobile when click on close icon
function hideMenu () {
  document.getElementById("menu-mobile").style.display = "none";
}
/// show dashbord in mobile when click on hamber icon
function showDashbordMobile () {
  document.getElementById("dashbord-mobile").style.display = "flex";
}

/// hide dashbord in mobile when click on close icon
function hideDashbordMobile () {
  document.getElementById("dashbord-mobile").style.display = "none";
}

// ............ end of header ................



