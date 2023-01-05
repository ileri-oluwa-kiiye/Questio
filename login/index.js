function closeParent(){
    (this.parentElement).parentElement.style.display='none';
}

let closeButton = document.getElementById("close");
let nav = document.getElementById("hide")
let showNavButton = document.getElementById("shownav")

showNavButton.addEventListener("click", ()=>{
    nav.style.display= "block"
} )

closeButton.addEventListener("click", closeParent)