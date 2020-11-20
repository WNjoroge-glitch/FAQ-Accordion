window.onload=() => {
    const button = document.getElementsByClassName("select-btn")
    const para = document.getElementsByClassName("hide-paragraph")

function showParagraph() {
    for (var i=0; i<para.length; i++) {
            if (para[i].style.display === "none") {
                para[i].style.display = "block"
            } else {
                para[i].style.display = "none"
            }
        }
    }



for (var i=0; i<button.length; i++) {
    button[i].addEventListener("click", function(){
        showParagraph()
    })
}

}

