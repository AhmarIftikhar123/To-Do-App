const to_do_input = document.getElementById("to_do");
const add_btn = document.getElementById("add_btn");
const To_Do_list = document.getElementById("list_box");
const dlt_todo = document.querySelectorAll(".dlt_todo");

// add_event for adding todo in list tag

let add_event = () => {
  if (to_do_input.value === "") {
    alert("Write Something");
    return;
  } else {
    let li = document.createElement("li");

    To_Do_list.appendChild(li);

    li.innerHTML = to_do_input.value;

    let span = document.createElement("span");
    li.appendChild(span);
    span.classList.add("dlt_todo");

    // adding img in span 

    let img = document.createElement("img");
    span.appendChild(img);
    img.setAttribute('src','imgs/icons8-cross-24.png');

    to_do_input.value = "";
    store_to_do();
  }
};

add_btn.addEventListener("click", add_event);

To_Do_list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      store_to_do();
    } else if (e.target.tagName === "IMG") {
      e.target.parentElement.parentElement.remove();
      store_to_do();
    }
    else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      store_to_do();
    }
  },
  false
);

let store_to_do = () => {
  localStorage.setItem("data", To_Do_list.innerHTML);
};
let restore_to_do = () => {
  To_Do_list.innerHTML = localStorage.getItem("data");
};
restore_to_do();
