
// selecting the input and the list item
const taskInput = document.querySelector('#new-item');
const taskList = document.getElementById('item-list');


// add ene event listener to the form for adding new task
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const taskText = taskInput.value;
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        // create delete button 
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function(){
            taskItem.parentNode.removeChild(taskItem);
        });
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
       
        // clear the input field       
        taskInput.value = '';
    }
});