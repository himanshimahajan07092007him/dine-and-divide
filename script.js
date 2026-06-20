let toggle = document.querySelector("#switch");
let dine = document.querySelector(".dine");
let divide = document.querySelector(".divide");
divide.style.display = "none";
toggle.addEventListener("click", () => {
  if (toggle.checked) {
    divide.style.display = "block";
    dine.style.display = "none";
  } else {
    divide.style.display = "none";
    dine.style.display = "block";
  }
});
let rst_dine = document.querySelector("#reset_dine");
let checkbox_hrt = document.querySelectorAll(".heart-checkbox");
console.log(checkbox_hrt);
rst_dine.addEventListener("click", () => {
  checkbox_hrt.forEach((box, index) => {
    box.checked = false;
    localStorage.removeItem("box-" + index);
  });
});
checkbox_hrt.forEach((box, index) => {
  box.addEventListener("change", () => {
    if (box.checked) {
      localStorage.setItem("box-" + index, "true");
    } else {
      localStorage.removeItem("box-" + index);
    }
  });
});
checkbox_hrt.forEach((box, index) => {
  let state = localStorage.getItem("box-" + index);
  if (state == "true") {
    box.checked = true;
  } else {
    box.checked = false;
  }
});
let add = document.querySelector(".add_new");
let split_box = document.querySelector(".split_container");
add.addEventListener("click", () => {
  let newbox = document.createElement("div");
  newbox.classList.add("box");
  newbox.innerHTML = `
      <div><input class="name" type="text" placeholder="Name"></div>
          <div><input class="amount" type="text" placeholder="Amount"></div>
          <div class="state">
            <div class="pending"></div>
            <div class="delete">❌</div>
          </div>  
    `;
  let newpending = newbox.querySelector(".pending");
  newpending.addEventListener("click", () => {
    if (newpending.style.backgroundColor === "green") {
      newpending.style.backgroundColor = "yellow";
    } else {
      newpending.style.backgroundColor = "green";
    }
  });
  split_box.appendChild(newbox);
});
let states = document.querySelectorAll(".pending");
states.forEach((state) => {
  state.addEventListener("click", () => {
    if (state.style.backgroundColor === "green") {
      state.style.backgroundColor = "yellow";
    } else {
      state.style.backgroundColor = "green";
    }
  });
});
split_box.addEventListener("click", (events) => {
  if (events.target.classList.contains("delete")) {
    events.target.closest(".box").remove();
  }
});
let reset_div = document.querySelector("#reset_divide");
let expnse_name = document.querySelector("#type_name");
let ttlbill = document.querySelector("#ttl_bill");
let category = document.querySelector("#catagory_div");
let names = document.querySelector(".name");
let amt = document.querySelector(".amount");
let DivideData = () => {
  localStorage.setItem("expnse_name", expnse_name.value);
  localStorage.setItem("ttlbill", ttlbill.value);
  localStorage.setItem("category", category.value);
  localStorage.setItem("names", names.value);
  localStorage.setItem("amt", amt.value);
};
expnse_name.addEventListener("input", DivideData);
ttlbill.addEventListener("input", DivideData);
category.addEventListener("input", DivideData);
names.addEventListener("input", DivideData);
amt.addEventListener("input", DivideData);
if (localStorage.getItem("expnse_name")) {
  expnse_name.value = localStorage.getItem("expnse_name");
}
if (localStorage.getItem("ttlbill")) {
  ttlbill.value = localStorage.getItem("ttlbill");
}
if (localStorage.getItem("category")) {
  category.value = localStorage.getItem("category");
}
if (localStorage.getItem("names")) {
  names.value = localStorage.getItem("names");
}
if (localStorage.getItem("amt")) {
  amt.value = localStorage.getItem("amt");
}
reset_div.addEventListener("click", () => {
  expnse_name.value = "";
  ttlbill.value = "";
  category.value = "Select Category";
  let boxes = document.querySelectorAll(".box");
  boxes.forEach((dabba, index) => {
    if (index > 0) {
      boxes[index].remove();
    } else {
      names.value = "";
      amt.value = "";
    }
  });
  localStorage.removeItem("expnse_name");
  localStorage.removeItem("ttlbill");
  localStorage.removeItem("category");
  localStorage.removeItem("names");
  localStorage.removeItem("amt");
});
let backtoDine = document.querySelector(".dine_trcr");
backtoDine.addEventListener("click", () => {
  toggle.checked = false;
  divide.style.display = "none";
  dine.style.display = "block";
});
let backtoDivide = document.querySelector(".divide_trcr");
backtoDivide.addEventListener("click", () => {
  toggle.checked = true;
  divide.style.display = "block";
  dine.style.display = "none";
});
let backtoTop = document.querySelector(".back");
backtoTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
if (Notification.permission != "granted") {
  Notification.requestPermission();
}
setInterval(() => {
  let timeline = new Date();
  let day = timeline.toLocaleString("en-US", { weekday: "long" });
  let time = timeline.getHours();
  console.log(time);
  if (day == "Monday" && time == 8) {
    let a = localStorage.getItem("box-0");
    let b = localStorage.getItem("box-1");
    let c = localStorage.getItem("box-2");
    if (a == 'true' || b == 'true' || c == 'true') {
      new Notification("Reminder!🍽️", {
        body: "Monday has your one of the favourite meals. Do not miss out!",
      });
    }
  }
  if (day == "Tuesday" && time == 8) {
    let a = localStorage.getItem("box-3");
    let b = localStorage.getItem("box-4");
    let c = localStorage.getItem("box-5");
    if (a == 'true' || b == 'true' || c == 'true') {
      new Notification("Reminder!🍽️", {
        body: "Tuesday has your one of the favourite meals. Do not miss out!",
      });
    }
  }
  if (day == "Wednesday" && time == 8) {
    let a = localStorage.getItem("box-6");
    let b = localStorage.getItem("box-7");
    let c = localStorage.getItem("box-8");
    if (a == 'true' || b == 'true' || c == 'true') {
      new Notification("Reminder!🍽️", {
        body: "Wednesday has your one of the favourite meals. Do not miss out!",
      });
    }
  }
  if (day == "Thursday" && time == 8) {
    let a = localStorage.getItem("box-9");
    let b = localStorage.getItem("box-10");
    let c = localStorage.getItem("box-11");
    if (a == 'true' || b == 'true' || c == 'true') {
      new Notification("Reminder!🍽️", {
        body: "Thursday has your one of the favourite meals. Do not miss out!",
      });
    }
  }
  if (day == "Friday" && time == 8) {
    let a = localStorage.getItem("box-12");
    let b = localStorage.getItem("box-13");
    let c = localStorage.getItem("box-14");
    if (a == 'true' || b == 'true' || c == 'true') {
      new Notification("Reminder!🍽️", {
        body: "Friday has your one of the favourite meals. Do not miss out!",
      });
    }
  }
  if (day == "Saturday" && time == 8) {
    let a = localStorage.getItem("box-15");
    let b = localStorage.getItem("box-16");
    let c = localStorage.getItem("box-17");
    if (a == 'true' || b == 'true' || c == 'true') {
      new Notification("Reminder!🍽️", {
        body: "Saturday has your one of the favourite meals. Do not miss out!",
      });
    }
  }
  if (day == "Sunday" && time == 8) {
    let a = localStorage.getItem("box-18");
    let b = localStorage.getItem("box-19");
    let c = localStorage.getItem("box-20");
    if (a == 'true' || b == 'true' || c == 'true') {
      new Notification("Reminder!🍽️", {
        body: "Sunday has your one of the favourite meals. Do not miss out!",
      });
    }
  }
}, 3600000);
