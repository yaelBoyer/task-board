


function buildHtml(todoListArr){
    console.log('todoListArr', todoListArr.length)
   let existDiv =  document.getElementById("taskContainer");
   if(existDiv){
       existDiv.remove()
   }
   existDiv  = document.createElement('div');
   existDiv.setAttribute("id","taskContainer")
   for(let i = 0 ; i < todoListArr.length ; i++ ){
       console.log('test',todoListArr[i])
       let taskAsObj = todoListArr[i];
       let taskHtml = '<div id="task_' + i + '" class= "fade-in task"><span  onclick=deleteTask(' + i + ') class="glyphicon glyphicon-remove icon"></span><p class="todoTask">'+taskAsObj.todo+'</p><br /><p class = "time">'+taskAsObj.time+'</p><br /><p class = "date">'+taskAsObj.date+'</p></div>'+''
       existDiv.innerHTML += taskHtml;
   }
   document.body.appendChild(existDiv)
//    let t = document.getElementById("test");
//   t.insertBefore(existDiv)
  
}

function loadTaskFromLocalStorage(){
     
    const todoListArray = localStorage.getItem('todoList');
    if(todoListArray){
        const todoList = JSON.parse(todoListArray);
        let relevantToDoList = getRelevantToDoList(todoList)
        localStorage.setItem("todoList",JSON.stringify(relevantToDoList))
        buildHtml(relevantToDoList) 
        // buildHtml([{todo:'hjhjh',date:'123456'},{todo:'task2',date:'9876'}])    // }
//[{},{},{}]
    
}
}

function initialTodoListInLocalStorage(){
    const todoListArrayFromLocalStrorage = localStorage.getItem('todoList');
        let relevantToDoList = []
    if(todoListArrayFromLocalStrorage){
        const parseTodoListArrayFromLocalStrorage = JSON.parse(todoListArrayFromLocalStrorage);
         relevantToDoList = getRelevantToDoList(parseTodoListArrayFromLocalStrorage)
    // initial array of objects
    }
        const obj = {
            todo:document.getElementById("exampleFormControlTextarea1").value,
            date:document.getElementById("date").value,
            time:document.getElementById("time").value
        }
        


        relevantToDoList.push(obj) // add on todo to array of todos

        localStorage.setItem('todoList', JSON.stringify(relevantToDoList))
    

    return relevantToDoList;
}
function handleSubmit() {
    if(
    document.getElementById("exampleFormControlTextarea1").value==''||
   document.getElementById("date").value==''||
   document.getElementById("time").value==''){
       return false
   }else{
   
    const relevantToDoList = initialTodoListInLocalStorage()
    console.log("rel"+relevantToDoList)
    // delete text from input after adding to todo list
    document.getElementById("form").reset();
    buildHtml(relevantToDoList)
   }
}

function  getRelevantToDoList(toDoListAsArr){
    const nowIs = new Date()
    for(i=0; i<toDoListAsArr.length; i++){
        console.log(toDoListAsArr[i].date,toDoListAsArr[i].time)
        const timePassed = new Date(toDoListAsArr[i].date)
        if(nowIs > timePassed) {
            toDoListAsArr.splice(i, 1)
        } 
    }
    console.log('toDoListAsArr',toDoListAsArr)
    return toDoListAsArr;
}
 
function deleteTask(id){
    // let id = event.target.id

    const myList = JSON.parse(localStorage.getItem('todoList'))
   console.log( myList[id])
   myList.splice(id, 1)
   localStorage.setItem('todoList', JSON.stringify(myList))
   buildHtml(myList)
    // for(let i = 0; i<myList.length; i++){
    //     if()
    // }
}
function clearForm(){
   console.log(123456)
//     let area = document.getElementById("exampleFormControlTextarea1");
//    let textArea = area.value;
//    let date = document.getElementById("date");
//    let textDate = date.value;
//    let time = document.getElementById("time");
//    let textTime = time.value
//    textArea.clearForm();
//    textDate.clearForm();
//    textTime.clearForm();
document.getElementById("form").reset();

}
//  function deleteToDo(index) {
//     const myList = JSON.parse(localStorage.getItem('todoList'))

//     myList.splice(index, 1)

//     localStorage.setItem('todoList', JSON.stringify(myList))

//     /////////////////////

//     const todoFRomUI = document.getElementById(`todo-${index}`)

//     todoFRomUI.remove()


// }


 

 
   

 

 