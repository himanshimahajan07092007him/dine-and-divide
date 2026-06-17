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
let rst_dine = document.querySelector('#reset_dine')
let checkbox_hrt = document.querySelectorAll('.heart-checkbox')
console.log(checkbox_hrt)
rst_dine.addEventListener('click',()=>{
    checkbox_hrt.forEach((box)=>{
        box.checked=false;
    })
    localStorage.clear();
})
checkbox_hrt.forEach((box,index)=>{
    box.addEventListener('change',()=>{
      if (box.checked) {
        localStorage.setItem(("box-"+ index),'true')
      }
      else {
        localStorage.removeItem("box-"+ index)
    }
})})

checkbox_hrt.forEach((box,index)=>{
    let state = localStorage.getItem("box-"+index)
    if (state=='true') {
        box.checked=true;
    }
    else{
        box.checked=false;
    }
})
let add = document.querySelector('.add_new')
let split_box= document.querySelector('.split_container')
add.addEventListener('click',()=>{
    let newbox = document.createElement('div')
    newbox.classList.add('box')
    newbox.innerHTML=`
      <div><input class="name" type="text" placeholder="Name"></div>
          <div><input class="amount" type="text" placeholder="Amount"></div>
          <div class="state">
            <div class="pending"></div>
            <div class="delete">❌</div>
          </div>  
    `
    let newpending = newbox.querySelector('.pending')
    newpending.addEventListener('click',()=>{
        if (newpending.style.backgroundColor === 'green') {
            newpending.style.backgroundColor = 'yellow'; 
        } else {
            newpending.style.backgroundColor = 'green';  
        }
    })
    split_box.appendChild(newbox)
})
let states = document.querySelectorAll('.pending')
states.forEach((state)=>{
    state.addEventListener('click',()=>{
        if (state.style.backgroundColor === 'green') {
            state.style.backgroundColor = 'yellow'; 
        } else {
            state.style.backgroundColor = 'green';  
        }
    })
})