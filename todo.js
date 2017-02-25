window.onload = function(){

	var submit = document.getElementById('submit');
	submit.onclick = function(){
		var task = document.getElementById('todo').value;
		console.log(task);
		var ol = document.getElementById("list")
		var entry = document.createElement('li');
		
		var checkbox = document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.className = "checkbox";
		entry.appendChild(checkbox)
		entry.appendChild(document.createTextNode(task));
		ol.appendChild(entry);


	};


	$('#list').on('click', '.checkbox', function(event){
		var $this = $(this);
		var $listItem = $this.parent();
		var text = $listItem.text();
		// alert(text);

		console.log(text, $this.is(':checked') );

		if ($this.is(':checked')){
			$listItem.remove();
		}
	});
};
