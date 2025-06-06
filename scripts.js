document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('form'); //form selector
    const submit_btn = document.querySelector('.submit-btn'); // submit button selector
    document.querySelector('.input-field')

    submit_btn.style.display = 'none';

    document.querySelector('.input-field').onkeyup = ()=>{
        if(document.querySelector('.input-field').value.length >0){
            submit_btn.style.display = 'block';
        }else{
            submit_btn.style.display = 'none';
        }
        
    };

    

    form.onsubmit = ()=>{
        const newtask = document.querySelector('.input-field').value;
        //clear the input field soon as the form is submitted
        document.querySelector('.input-field').value = '';

        const task_box = document.createElement('div');
        const task = document.createElement('div');
        const close_btn = document.createElement('button');

        task_box.className = 'task-box';
        task.className = 'task';
        close_btn.className = 'close-btn';

        document.querySelector('.tasks').append(task_box);
        task_box.append(task);
        task_box.append(close_btn);

        task.innerHTML = newtask;
        close_btn.innerHTML = 'X';

        close_btn.onclick = ()=>{
            close_btn.remove();
            task.remove();
            task_box.remove();
        };

        document.querySelector('tasks')
        return false;
    };

});