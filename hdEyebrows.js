


window.addEventListener('scroll', () =>{
    let content = document.querySelector('.row');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1.7;
    if(contentPosition < screenPosition) {
        content.classList.add('active');
    } else {
        content.classList.remove('active');
    }
});


//btn henna 

 function swapStyle() {
     var white= document.getElementById("m");
     black.style.backgroundColor="pink";
 }
 swapStyle();
 //function naturalStyle() {
  //   var natural = document.getElementById("m");
  //   natural.style.color="black";
 //}
 
    

