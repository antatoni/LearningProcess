
document.querySelector('#AddTaskButton').addEventListener('click', (e) => {
    e.preventDefault();
    const dateInput = document.querySelector('#inputDate');
    const textInput = document.querySelector('#inputTab');

    if (!textInput.value.trim()) {
        alert(`Please enter a valid task!`);
        return;
    }
    const dueDate = dateInput.value ? new Date(dateInput.value) : null;
    const formattedDate = dueDate
        ? `${dueDate.toLocaleDateString()} at ${dueDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
        : 'No deadline';

    const finalText = `Task: ${textInput.value}, Due: ${formattedDate}`;

    const taskDiv = document.createElement('div');
    taskDiv.className = 'task-item';

    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = finalText;

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox'
    checkBox.className = 'check-box';

    checkBox.addEventListener('change', (e) => {
        if (checkBox.checked) {
            document.querySelector('#done').appendChild(taskDiv)
        } else {
            document.querySelector('#notDone').appendChild(taskDiv)
        }

    })
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(checkBox)

    document.querySelector('#notDone').appendChild(taskDiv);
    textInput.value = '';
    dateInput.value = '';
})