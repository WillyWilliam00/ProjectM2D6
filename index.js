 function traduci() {

    document.querySelector("h1").innerHTML = "Telefoni per vecchiettini"
}

function BackgroundColor(str) {

    document.querySelector("body").style.backgroundColor = str
    
}

function changeAddress() {

    document.querySelector('footer > p').innerHTML = "Viale Mosche 45 2122"
 }

function newClass() {

   let Atag = document.querySelectorAll("a")

   for(i = 0; i < Atag.length; i++) {
    Atag[i].classList.add("ancora") 
   }
}

function ImgHidden() {

    let IMGtag = document.querySelectorAll("img")

    for(i = 0; i < IMGtag.length; i++) {
     IMGtag[i].classList.add("hidden") 
    }
 }

 function ChangeColor(str) {

   for (let tagprice of document.querySelectorAll(".price")) {

     tagprice.style.color = str
   }

    
 }
