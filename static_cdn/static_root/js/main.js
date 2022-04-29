const category = document.getElementById("category");
console.log(category);

// when mose inter to light btn (change category backgrond)
document.getElementById("lightbtn").addEventListener("mouseover", function () {
  category.classList.replace("category", "category-lightbtn");
});
// when mose leave to light btn (change category backgrond)
document.getElementById("lightbtn").addEventListener("mouseleave", function () {
  category.classList.replace("category-lightbtn", "category");
});
// when mose inter to handmade btn (change category backgrond)
document
  .getElementById("handmadebtn")
  .addEventListener("mouseover", function () {
    category.classList.replace("category", "category-handmade");
  });
// when mose leave to handmade btn (change category backgrond)
document
  .getElementById("handmadebtn")
  .addEventListener("mouseleave", function () {
    category.classList.replace("category-handmade", "category");
  });

// when mose inter to decor btn (change category backgrond)
document.getElementById("Decorbtn").addEventListener("mouseover", function () {
  category.classList.replace("category", "category-decor");
});
// when mose leave to decor btn (change category backgrond)
document.getElementById("Decorbtn").addEventListener("mouseleave", function () {
  category.classList.replace("category-decor", "category");
});

// when mose inter to table btn (change category backgrond)
document.getElementById("tablebtn").addEventListener("mouseover", function () {
    category.classList.replace("category", "category-tabel");
  });
  // when mose leave to table btn (change category backgrond)
  document.getElementById("tablebtn").addEventListener("mouseleave", function () {
    category.classList.replace("category-tabel", "category");
  });
  

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
  
// ........ change background of header ........ 
const navbar = document.querySelector('.nav-fixed');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};
// .......... set time to carousel in hero page ......
var myCarousel = document.querySelector('#carouselExampleSlidesOnly')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 1000,
})