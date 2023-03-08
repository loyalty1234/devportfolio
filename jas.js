const toggleicon = document.querySelector(".icon")
const menu = document.querySelector(".items")

toggleicon.addEventListener('click', ()=>{
    menu.classList.toggle('open')
})