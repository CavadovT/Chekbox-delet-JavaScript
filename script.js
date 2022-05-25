let input = document.getElementById("input");
let btnAdd = document.getElementById("btnAdd");
let list = document.getElementById("list");
let btnRemove = document.getElementById("btnRemove");
btnRemove.style.display = "none";
btnRemove.classList.add("btn", "btn-danger");

btnAdd.onclick = function () {
  let inputValue = input.value;
  if (inputValue != "") {
    btnRemove.style.display = "block";
    let li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    let inputchek = document.createElement("input");
    inputchek.type = "checkbox";
    inputchek.classList.add("inputchek");
    li.innerText = inputValue;
    list.append(li);
    li.append(inputchek);

    btnRemove.onclick=function() {
      let inputcheked=document.querySelectorAll(".inputchek:checked");
      inputcheked.forEach(value=>{
        value.parentElement.remove();
      })
    }
  }
};
