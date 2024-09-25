//your code here
let list = document.querySelector("#todoList");
let input = document.getElementById("newTodoInput");
let addBtn = document.getElementById("addTodoBtn");

addBtn.addEventListener("click", (e) => {
	e.preventDefault();
	let text = input.value;
	if (text == "") {
		return;
	} else {
		let li = document.createElement("li");
		li.innerText = text;
		list.append(li);
		input.value = "";
	}
})

