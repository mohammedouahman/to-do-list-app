// Select Elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Event Listeners
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e){
  if(e.key === 'Enter') addTask();
});

// Add Task Function
function addTask() {
  const taskText = taskInput.value.trim();
  if(taskText === '') return;

  const li = document.createElement('li');
  li.className = 'task-item';
  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="complete-btn">✔</button>
      <button class="delete-btn">✖</button>
    </div>
  `;
  taskList.appendChild(li);
  taskInput.value = '';

  // Complete Task
  li.querySelector('.complete-btn').addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete Task
  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
  });
}

