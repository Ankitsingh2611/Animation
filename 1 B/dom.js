// Document object model


/*4 pillars of DOM
i> Selection of an Element
ii> Changing HTML
iii> Changing CSS
iv> Event Listener*/



var a = document.querySelector("h1")
console.log(a)



var a = document.querySelector("h1")
a.innerHTML="change"
a.style.color ='black'



var a = document.querySelector("h1")
a.addEventListener("click", function(){
    a.style.color = "red"
    a.innerHTML = "changed"
    console.log("first")
})





var a = document.querySelector("h1")
a.addEventListener("mouseenter", function(){
    a.style.color = "red"
    a.innerHTML = "changed"
})
