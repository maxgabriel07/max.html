function deleteList(){
	if (confirm("Delete this list?")){
		list = [];
		setList(list);
	}
}