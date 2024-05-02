function showTaskForm(){
    const modal = document.querySelector('.modal');
    modal.style.display = 'block';

    const submitForm = document.querySelector('#submit');
    submitForm.addEventListener('click', ()=>{
        createTask();
    });

    const closeModal = document.querySelector('#cancel');
    closeModal.addEventListener('click', ()=>{
        modal.style.display = 'none';
    });
}

export default showTaskForm;