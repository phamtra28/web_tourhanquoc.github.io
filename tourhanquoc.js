const menubarBtn = document.querySelector('.content-nav i')
menubarBtn.addEventListener("click",function(){
    document.querySelector('.content-nav ul').classList.toggle('active')
})