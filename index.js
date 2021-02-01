window.onload=() => {
    const button = document.querySelectorAll(".select-btn")
    const para = document.getElementsByClassName("hide-paragraph")

function showParagraph(){
    
   button.forEach(btn => {
       btn.addEventListener('click', function(){
        const accordionContent = btn.nextElementSibling;
        btn.classList.toggle('rotate')
       
        accordionContent.classList.toggle('active')
       })
   })
}
showParagraph()
   
    








}
   
    

