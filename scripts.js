document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('.form'); //form selector
    const submitBtn = document.querySelector('.submit-btn'); // submit button selector
    const tasksContainer = document.querySelector('.tasks');
    const inputField = document.querySelector('.input-field');
    


    submitBtn.style.display = 'none';

    inputField.addEventListener('keyup', ()=>{
        if(inputField.value.length>0){
            if(inputField.value.length<=75){
                submitBtn.style.display = 'none';
            }
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
        

        if(width > 400){
            console.log(width);
            card.style.maxWidth = "400px";
            inputField.style.Width = "300px";
        }
        else if(width <= 400 ){
            card.style.maxWidth = `${width-20}px`;
            inputField.style.Width = `${width-100}px` ;
        }
        
        
    });

});