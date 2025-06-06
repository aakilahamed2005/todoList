document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('form'); //form selector
    const submit_btn = document.querySelector('.submit-btn'); // submit button selector
    document.querySelector('.input-field')

    submit_btn.style.display = 'none';

    document.querySelector('.input-field').onkeyup = ()=>{
        if(document.querySelector('.input-field').value.length >0){
            submit_btn.style.transition = '1s';
            submit_btn.style.display = 'block';
        }else{
            submit_btn.style.display = 'none';
        }
        
    };

    

    form.onsubmit = ()=>{
        const task = document.querySelector('.input-field').value;
        //clear the input field soon as the form is submitted
        document.querySelector('.input-field').value = '';
        return false;
    };

});