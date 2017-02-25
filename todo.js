window.onload = function(){

var submit = document.getElementById('submit');
submit.onclick = function(){
	var task = document.getElementById('todo').value;
	console.log(task);
	var ol = document.getElementById("list")
	var entry = document.createElement('li');
	entry.id = 'id'
	var checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.id = "checkbox"
	entry.appendChild(checkbox)
	entry.appendChild(document.createTextNode(task));
	ol.appendChild(entry);

	};
};
