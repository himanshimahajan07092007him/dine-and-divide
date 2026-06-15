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
let div_rst = document.querySelector('#reset_divide')
let type = document.querySelector('#catagory_div')
let name_div1 = document.querySelector('#name')
let name_div2 = document.querySelector('#type_name')
let amount_div = document.querySelector('#amount')
let bill = document.querySelector('#ttl_bill')
div_rst.addEventListener('click',()=>{
    name_div1.value="";
    name_div2.value="";
    amount_div.value="";
    bill.value="";
    type.value="Select Category";
})
let pending = document.querySelector('.pending')
pending.addEventListener('click',()=>{
    if (pending.style.backgroundColor === 'yellow') {
        pending.style.backgroundColor = 'green'; 
    } else {
        pending.style.backgroundColor = 'yellow';  
    }
})