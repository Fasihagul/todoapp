var ulElement = document.getElementById("list");

function addTodo() {
  var input = document.getElementById("input");

  if (input.value) {
    var liElement = document.createElement("li");

    var liText = document.createTextNode(input.value);





    liElement.appendChild(liText);

    // delete button create

    var delBtnElement = document.createElement("button");
delBtnElement.style.width= '110px';   
delBtnElement.style.height= '25px';         
 delBtnElement.style.borderImage= 'linear-gradient(45deg, pink, lightblue, lightgreen) 1'; 
delBtnElement.style.borderRadius= '5px';    
delBtnElement.style.outline= 'none'; 
delBtnElement.style.fontSize=' 15px';       









   
    var delBtnText = document.createTextNode("Delete");

    delBtnElement.appendChild(delBtnText);

    delBtnElement.setAttribute("onclick", "deleteSingleTodo(this)");

    liElement.appendChild(delBtnElement);

    // edit button create

    var EditBtnElement = document.createElement("button");

    EditBtnElement.style.width= '110px';   
    EditBtnElement.style.height= '25px';         
    EditBtnElement.style.borderImage= 'linear-gradient(45deg, pink, lightblue, lightgreen) 1'; 
    EditBtnElement.style.borderRadius= '5px';    
    EditBtnElement.style.outline= 'none'; 
    EditBtnElement.style.fontSize=' 15px'; 







    var EditBtnText = document.createTextNode("Edit");


    EditBtnElement.appendChild(EditBtnText);

    liElement.appendChild(EditBtnElement);

    EditBtnElement.setAttribute("onclick", "editSingleTodo(this)");
    ulElement.appendChild(liElement);
    input.value = "";
  } else {
    alert("Enter items..");
  }
}

function deleteAllTodos() {
  ulElement.innerHTML = "";
}

function deleteSingleTodo(e) {
  console.log(e.parentNode.remove());
}

function editSingleTodo(e) {
  var updateVal = prompt("Enter updated value ");

  e.parentNode.firstChild.nodeValue = updateVal;
}