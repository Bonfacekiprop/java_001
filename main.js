
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
        taskList.appendChild(taskItem);  
        // clear the input field       
        taskInput.value = '';
    }
});