//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}








let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}











function AddtoCart(name,description,price){
//Below we create JavaScript Object that will hold three properties you have mentioned:    Name,Description and Price
    var singleProduct = {};
//Fill the product object with data
    singleProduct.Name=name;
    singleProduct.Description=description;
    singleProduct.Price=price;
//Add newly created product to our shopping cart
    shoppingCart.push(singleProduct);
//call display function to show on screen
    displayShoppingCart();

}


//Add some products to our shopping cart via code or you can create a button with onclick event
//AddtoCart("Table","Big red table",50);
//AddtoCart("Door","Big yellow door",150);
//AddtoCart("Car","Ferrari S23",150000);






















