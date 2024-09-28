document.querySelector('#push').onclick = () => {
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please enter a task");
    }
    else{
        document.querySelector('#tasks').innerHTML += `
        <div class= "task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
            <i class="far fa-trash-alt"></i>
            </button>
        </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        current_tasks.forEach((task, i) => {
            task.onclick = function() {
                this.parentNode.remove(); // Supprimer la tâche
            }
        });

        var tasks = document.querySelectorAll(".task");
        tasks.forEach((task, i) => {
            task.onclick = function() {
                this.classList.toggle('completed'); // Marquer comme complétée
            }
        });
    }
}