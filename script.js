
const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task !== '') {
    const li = document.createElement('li');
    li.textContent = task;

    const delBtn = document.createElement('button');
    delBtn.textContent = '✖';
    delBtn.style.background = 'transparent';
    delBtn.style.border = 'none';
    delBtn.style.color = '#ff5c5c';
    delBtn.style.cursor = 'pointer';
    delBtn.style.fontSize = '18px';
    delBtn.addEventListener('click', () => li.remove());

    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskInput.value = '';
  }
});


