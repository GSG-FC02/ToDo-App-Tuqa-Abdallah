

let addToDo = document.getElementById('inputText');
let addBoton = document.getElementById('addBtn');
let list = document.querySelector('.toDoList');


addBoton.addEventListener('click', function(){
  if (addToDo.value !== ""){
  var yourList = document.createElement('li');
  yourList.innerText = addToDo.value; 
  list.appendChild(yourList);
  addToDo.value = "";
  const mySpan = document.createElement('span');
  mySpan.innerText = 'X';
  yourList.appendChild(mySpan);
  const close = document.querySelectorAll('span');
  for (let i =0 ; i < close.length ; i++){
      close[i].addEventListener('click' , function closeList(){
        close[i].parentElement.style.display="none";
      })
  }
}
})
