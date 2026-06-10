let toggle = document.querySelector('#switch')
let dine = document.querySelector('.dine')
let divide = document.querySelector('.divide')
divide.style.display = 'none'
toggle.addEventListener('click',()=>{
    if(toggle.checked){
        divide.style.display = 'block'
        dine.style.display = 'none'
    }
    else{
        divide.style.display = 'none'
        dine.style.display = 'block'
    }
})