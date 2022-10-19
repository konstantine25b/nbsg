let nav1 = document.querySelector(".nav1")
  window.addEventListener("scroll",function(){
    
    if(window.scrollY > 200){
       nav1.style.opacity = "0.7"
       
    }
    
    else{
      nav1.style.opacity = "1"
    }
  })

nav1.addEventListener("mouseover",function(){
    nav1.style.opacity = "1"
})
