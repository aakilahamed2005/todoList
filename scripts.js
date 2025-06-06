document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('.form'); //form selector
    const submitBtn = document.querySelector('.submit-btn'); // submit button selector
    const tasksContainer = document.querySelector('.tasks');
    const inputField = document.querySelector('.input-field');
    


    submitBtn.style.display = 'none';

    inputField.addEventListener('keyup', ()=>{
        if(75>= document.querySelector('.input-field').value.length >0 ){
            submitBtn.style.display = 'block';
        }else{
            submitBtn.style.display = 'none';
        }
        
    })

    

    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        const newTask = document.querySelector('.input-field').value;
        console.log(newTask);
        
        //clear the input field soon as the form is submitted
        document.querySelector('.input-field').value = '';

        const taskBox = document.createElement('div');
        const task = document.createElement('div');
        const closeBtn = document.createElement('button');

        taskBox.className = 'task-box';
        task.className = 'task';
        closeBtn.className = 'close-btn';

        task.innerHTML = newTask;
        closeBtn.innerHTML = 'X';

        closeBtn.addEventListener('click',()=>{
            taskBox.remove();
            task.remove();
            closeBtn.remove();
        });
        
        taskBox.append(task, closeBtn);
        tasksContainer.append(taskBox);

    

        return false;
    })


    window.addEventListener('resize',()=>{
        const width = window.innerWidth;
        const card = document.querySelector('.card');

        card.style.maxWidth = width-100;
        inputField.style.maxWidth = width - 150;
    });

});