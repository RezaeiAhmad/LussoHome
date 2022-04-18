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
  



  ///// sliderss ..................

  