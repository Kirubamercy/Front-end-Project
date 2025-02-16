const myTask=document.getElementById('myTask');
const addBtn=document.querySelector('.addTask');
const taskList=document.querySelector('.task-list');

window.addEventListener('load',()=>{
    const saveTask= JSON.parse(localStorage.getItem('tasks')) || [];
    saveTask.forEach((task,index) => createListElement(task,index));
})

addBtn.addEventListener('click',function(){
    const taskInput=myTask.value.trim();
    if(taskInput === '') return;
    createListElement(taskInput);
    saveTaskToLocalStorage(taskInput);
    myTask.value='';
});
function saveTaskToLocalStorage(task){
    const tasks=JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function deleteTaskFromlocalStorage(task){
    const tasks=JSON.parse(localStorage.getItem('tasks')) || [];
    const updateTask=tasks.filter(n => n !== task);
    localStorage.setItem('tasks',JSON.stringify(updateTask));

}


function createListElement(task,index=null){
    const li=document.createElement('li');
    li.className='tasks';
    const span=document.createElement('span');
    const completeBtn=document.createElement('button');
    const delBtn=document.createElement('button');
    completeBtn.textContent='✅';
    delBtn.textContent='❌';
    span.textContent=`${task}`;
    delBtn.addEventListener('click',()=>{
        li.remove();
        deleteTaskFromlocalStorage(task);
    });
    completeBtn.addEventListener('click',function(){
        span.classList.toggle('completed');
    });
    taskList.appendChild(li);
    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(delBtn);

}