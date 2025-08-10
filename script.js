function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskDate = document.getElementById('taskDate');
  const taskTime = document.getElementById('taskTime');

  const taskText = taskInput.value.trim();
  const date = taskDate.value;
  const time = taskTime.value;

  if (!taskText) {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById('taskList');

  const li = document.createElement('li');
  const textSpan = document.createElement('span');
  textSpan.className = 'task-text';
  textSpan.textContent = taskText;

  const datetimeSpan = document.createElement('div');
  datetimeSpan.className = 'task-datetime';
  datetimeSpan.textContent = `${date || ''} ${time || ''}`;

  const controls = document.createElement('div');
  controls.className = 'task-controls';

  const completeBtn = document.createElement('button');
  completeBtn.className = 'complete';
  completeBtn.textContent = '✓';
  completeBtn.onclick = () => li.classList.toggle('completed');

  const editBtn = document.createElement('button');
  editBtn.className = 'edit';
  editBtn.textContent = '✎';
  editBtn.onclick = () => {
    const newText = prompt("Edit your task:", textSpan.textContent);
    if (newText !== null) textSpan.textContent = newText.trim();
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete';
  deleteBtn.textContent = '🗑';
  deleteBtn.onclick = () => li.remove();

  controls.appendChild(completeBtn);
  controls.appendChild(editBtn);
  controls.appendChild(deleteBtn);

  li.appendChild(textSpan);
  li.appendChild(datetimeSpan);
  li.appendChild(controls);

  taskList.appendChild(li);

  // Reset input fields
  taskInput.value = '';
  taskDate.value = '';
  taskTime.value = '';
}
