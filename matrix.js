// getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");


  inputBox.onkeyup = ()=>{
    let userEnteredValue = inputBox.value; 
    if(userEnteredValue.trim() != null){ 
      addBtn.classList.add("active"); 
    }else{
      addBtn.classList.remove("active");
    }
  }



showTasks(); 

addBtn.onclick = ()=>{ 
  let userEnteredValue = inputBox.value; 
  let getLocalStorageData = localStorage.getItem("New Todo"); 
  if(getLocalStorageData == null){ 
    listArray = []; 
  }else{
    listArray = JSON.parse(getLocalStorageData);  
  }
  userEnteredValue = cutDownResponse(userEnteredValue);
  listArray.push(userEnteredValue); 
  localStorage.setItem("New Todo", JSON.stringify(listArray)); 
  showTasks(); 
  addBtn.classList.remove("active"); 
}
function cutDownResponse(value)
{
  if(value.length>20)
  {
    value = value.substring(0,18)+"...";
  }
  return value;
}
function showTasks(){
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length; 
  if(listArray.length > 0){ 
    deleteAllBtn.classList.add("active"); 
  }else{
    deleteAllBtn.classList.remove("active"); 
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });


  todoList.innerHTML = newLiTag; 
  inputBox.value = ""; 
}

// delete task function
function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); 
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks(); 
}

// delete all tasks function
deleteAllBtn.onclick = ()=>{
  listArray = []; 
  localStorage.setItem("New Todo", JSON.stringify(listArray)); 
  showTasks(); 
}


/* __________________________________________ */

// getting all required elements
const inputBox2 = document.querySelector(".inputField2 input");
const addBtn2 = document.querySelector(".inputField2 button");
const todoList2 = document.querySelector(".todoList2");
const deleteAllBtn2 = document.querySelector(".footer2 button");

// onkeyup event
inputBox2.onkeyup = ()=>{
  let userEnteredValue2 = inputBox2.value;
  if(userEnteredValue2.trim() != 0){ 
    addBtn2.classList.add("active"); 
  }else{
    addBtn2.classList.remove("active");
  }
}

showTasks2(); //calling showTask function

addBtn2.onclick = ()=>{ 
  let userEnteredValue2 = inputBox2.value; 
  let getLocalStorageData2 = localStorage.getItem("New Todo2"); 
  if(getLocalStorageData2 == null){ 
    listArray2 = []; 
  }else{
    listArray2 = JSON.parse(getLocalStorageData2);  
  }
  userEnteredValue2 = cutDownResponse(userEnteredValue2);
  listArray2.push(userEnteredValue2);
  localStorage.setItem("New Todo2", JSON.stringify(listArray2)); 
  showTasks2(); 
  addBtn2.classList.remove("active"); 
}

function showTasks2(){
  let getLocalStorageData2 = localStorage.getItem("New Todo2");
  if(getLocalStorageData2 == null){
    listArray2 = [];
  }else{
    listArray2 = JSON.parse(getLocalStorageData2); 
  }
  const pendingTasksNumb2 = document.querySelector(".pendingTasks2");
  pendingTasksNumb2.textContent = listArray2.length; 
  if(listArray2.length > 0){ 
    deleteAllBtn2.classList.add("active"); 
  }else{
    deleteAllBtn2.classList.remove("active"); 
  }

  let newLiTag2 = "";
  listArray2.forEach((element2, index2) => {
    newLiTag2 += `<li>${element2}<span class="icon" onclick="deleteTask2(${index2})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList2.innerHTML = newLiTag2; 
  inputBox2.value = ""; 
}

// delete task function
function deleteTask2(index2){
  let getLocalStorageData2 = localStorage.getItem("New Todo2");
  listArray2 = JSON.parse(getLocalStorageData2);
  listArray2.splice(index2, 1); 
  localStorage.setItem("New Todo2", JSON.stringify(listArray2));
  showTasks2(); 
}

deleteAllBtn2.onclick = ()=>{
  listArray2 = []; 
  localStorage.setItem("New Todo2", JSON.stringify(listArray2)); 
  showTasks2(); 
}


/* __________________________________________ */

const inputBox3 = document.querySelector(".inputField3 input");
const addBtn3 = document.querySelector(".inputField3 button");
const todoList3 = document.querySelector(".todoList3");
const deleteAllBtn3 = document.querySelector(".footer3 button");

// onkeyup event
inputBox3.onkeyup = ()=>{
  let userEnteredValue3 = inputBox3.value;
  if(userEnteredValue3.trim() != 0){ 
    addBtn3.classList.add("active"); 
  }else{
    addBtn3.classList.remove("active"); 
  }
}

showTasks3(); //calling showTask function

addBtn3.onclick = ()=>{ 
  let userEnteredValue3 = inputBox3.value; 
  let getLocalStorageData3 = localStorage.getItem("New Todo3"); 
  if(getLocalStorageData3 == null){ 
    listArray3 = []; 
  }else{
    listArray3 = JSON.parse(getLocalStorageData3);  
  }
  userEnteredValue3 = cutDownResponse(userEnteredValue3);
  listArray3.push(userEnteredValue3); 
  localStorage.setItem("New Todo3", JSON.stringify(listArray3)); 
  showTasks3(); 
  addBtn3.classList.remove("active"); 
}

function showTasks3(){
  let getLocalStorageData3 = localStorage.getItem("New Todo3");
  if(getLocalStorageData3 == null){
    listArray3 = [];
  }else{
    listArray3 = JSON.parse(getLocalStorageData3); 
  }
  const pendingTasksNumb3 = document.querySelector(".pendingTasks3");
  pendingTasksNumb3.textContent = listArray3.length; 
  if(listArray3.length > 0){ 
    deleteAllBtn3.classList.add("active"); 
  }else{
    deleteAllBtn3.classList.remove("active"); 
  }

  let newLiTag3 = "";
  listArray3.forEach((element3, index3) => {
    newLiTag3 += `<li>${element3}<span class="icon" onclick="deleteTask3(${index3})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList3.innerHTML = newLiTag3; 
  inputBox3.value = ""; 
}

// delete task function
function deleteTask3(index3){
  let getLocalStorageData3 = localStorage.getItem("New Todo3");
  listArray3 = JSON.parse(getLocalStorageData3);
  listArray3.splice(index3, 1); 
  localStorage.setItem("New Todo3", JSON.stringify(listArray3));
  showTasks3(); 
}

deleteAllBtn3.onclick = ()=>{
  listArray3 = []; 
  localStorage.setItem("New Todo3", JSON.stringify(listArray3)); 
  showTasks3();
}

/* __________________________________________ */

const inputBox4 = document.querySelector(".inputField4 input");
const addBtn4 = document.querySelector(".inputField4 button");
const todoList4 = document.querySelector(".todoList4");
const deleteAllBtn4 = document.querySelector(".footer4 button");

// onkeyup event
inputBox4.onkeyup = ()=>{
  let userEnteredValue4 = inputBox4.value;
  if(userEnteredValue4.trim() != 0){ 
    addBtn4.classList.add("active"); 
  }else{
    addBtn4.classList.remove("active"); 
  }
}

showTasks4(); 

addBtn4.onclick = ()=>{ 
  let userEnteredValue4 = inputBox4.value; 
  let getLocalStorageData4 = localStorage.getItem("New Todo4"); 
  if(getLocalStorageData4 == null){ 
    listArray4 = []; 
  }else{
    listArray4 = JSON.parse(getLocalStorageData4);  
  }
  userEnteredValue4 = cutDownResponse(userEnteredValue4);
  listArray4.push(userEnteredValue4);
  localStorage.setItem("New Todo4", JSON.stringify(listArray4)); 
  showTasks4(); 
  addBtn4.classList.remove("active"); 
}

function showTasks4(){
  let getLocalStorageData4 = localStorage.getItem("New Todo4");
  if(getLocalStorageData4 == null){
    listArray4 = [];
  }else{
    listArray4 = JSON.parse(getLocalStorageData4); 
  }
  const pendingTasksNumb4 = document.querySelector(".pendingTasks4");
  pendingTasksNumb4.textContent = listArray4.length; 
  if(listArray4.length > 0){ 
    deleteAllBtn4.classList.add("active");
  }else{
    deleteAllBtn4.classList.remove("active"); 
  }

  let newLiTag4 = "";
  listArray4.forEach((element4, index4) => {
    newLiTag4 += `<li>${element4}<span class="icon" onclick="deleteTask4(${index4})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList4.innerHTML = newLiTag4; 
  inputBox4.value = "";
}

// delete task function
function deleteTask4(index4){
  let getLocalStorageData4 = localStorage.getItem("New Todo4");
  listArray4 = JSON.parse(getLocalStorageData4);
  listArray4.splice(index4, 1); 
  localStorage.setItem("New Todo4", JSON.stringify(listArray4));
  showTasks4(); 
}

deleteAllBtn4.onclick = ()=>{
  listArray4 = []; 
  localStorage.setItem("New Todo4", JSON.stringify(listArray4)); 
  showTasks4(); 
}



