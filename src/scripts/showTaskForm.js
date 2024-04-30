function showTaskForm(){
    const content = document.querySelector('.content');
    
    const h1 = document.createElement('h1');
    h1.textContent = 'Formulário para adicionar tarefas';

    content.appendChild(h1);

    //Não precisa necessariamente funcionar como aba, pode abrir um modal e etc
}

export default showTaskForm;