let nav1 = document.querySelector(".nav1")
let nav1item2 =document.querySelector(".nav1item2")
  window.addEventListener("scroll",function(){
    
    if(window.scrollY >= 120){
       nav1.style.opacity = "1"
       nav1item2.style.marginTop = "0px"
       nav1item2.style.boxShadow = "none"
       nav1item2.style.transitionDuration = "0.5s"
       nav1.style.height= "85px"
       
    }
    
    else{
      nav1.style.opacity = "1"
      nav1item2.style.transitionDuration = "0.5s"
      nav1item2.style.marginTop = "200px"
      nav1item2.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px;"
      nav1.style.height= "85px"

    }

  })

nav1.addEventListener("mouseover",function(){
    nav1.style.opacity = "1"
})

nav1item2.addEventListener("click",function(){
  
    window.scroll({
      top: 250,
      
      behavior: 'smooth'
    });
  
})
