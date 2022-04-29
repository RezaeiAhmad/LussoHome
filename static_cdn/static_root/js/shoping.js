// ....... check height of screen and hide buy btn ........
//use window.scrollY
var scrollpos = window.scrollY;
var btnFixed = document.getElementById("countinueBtn-fixed-bottom");

function add_class_on_scroll() {
    btnFixed.classList.add("btn-remove");
}

function remove_class_on_scroll() {
    btnFixed.classList.remove("btn-remove");
}

window.addEventListener('scroll', function(){ 
    //Here you forgot to update the value
    scrollpos = window.scrollY;

    if(scrollpos > 1200){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
    
});

// .................... header ...........

/// show dashbord when click on hamber icon
function showDashbord() {
  document.getElementById("dashbord").style.display = "flex";
}

/// hide dashbord when click on close icon
function hideDashbord() {
  document.getElementById("dashbord").style.display = "none";
}
/// show menu in mobile when click on profile icon
function showMenu() {
  document.getElementById("menu-mobile").style.display = "flex";
}

/// hide menu in mobile when click on close icon
function hideMenu() {
  document.getElementById("menu-mobile").style.display = "none";
}
/// show dashbord in mobile when click on hamber icon
function showDashbordMobile() {
  document.getElementById("dashbord-mobile").style.display = "flex";
}

/// hide dashbord in mobile when click on close icon
function hideDashbordMobile() {
  document.getElementById("dashbord-mobile").style.display = "none";
}

// ............ end of header ................


