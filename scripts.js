document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('.form'); //form selector
    const submitBtn = document.querySelector('.submit-btn'); // submit button selector
    const tasksContainer = document.querySelector('.tasks');
    const inputField = document.querySelector('.input-field');
    const windowWidthFixed = window.innerWidth;

    if(windowWidthFixed < 400){
        document.querySelector('.card').style.margin = "0px";
    }
    

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
        //Preventing from submitting the form 
        event.preventDefault();
        //Getting the text that was in input field
        const newTask = document.querySelector('.input-field').value;
        
        //clear the input field soon as the form is submitted
        document.querySelector('.input-field').value = '';

        //Create the elements
        const taskBox = document.createElement('div');
        const task = document.createElement('div');
        const closeBtn = document.createElement('button');

        //Adding class names for the above created elements
        taskBox.className = 'task-box';
        task.className = 'task';
        closeBtn.className = 'close-btn';

        //assigning the values to the html code
        task.innerHTML = newTask;
        closeBtn.innerHTML = 'X';

        //remove the above all created elements if the close button is clicked
        closeBtn.addEventListener('click',()=>{
            taskBox.remove();
            task.remove();
            closeBtn.remove();
        });
        
        //appending the element to parent element
        taskBox.append(task, closeBtn);
        tasksContainer.append(taskBox);
    })



});