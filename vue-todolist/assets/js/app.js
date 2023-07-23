import { tasks } from "./db.js"; // import of a default export
import { Task } from "./Models/Task.js"; // import of a default export

const { createApp } = Vue

createApp({
    data() {
        return {
            completedTask: [],
            error: null,
            newTodoTask: "",
            tasks: tasks,
        }
    },
    methods: {
        addTask() {
            if (this.newTodoTask.length > 3) {
                const newTask = new Task(this.newTodoTask, false)
                this.tasks.unshift(newTask);
                this.newTodoTask = "";
                this.error = null;
            } else {
                this.error = "Non puoi inserire task con meno di 5 caratteri."
            }
        },
        completeTask(i) {
            this.completedTask.push(this.tasks[i])
            this.tasks.splice(i, 1);
        },
        toggleDoneTask(i) {
            if (this.tasks[i].done === false) {
                this.tasks[i].done = true
            } else {
                this.tasks[i].done = false
            }
        }
    },
    mounted() { },
}
).mount('#app')