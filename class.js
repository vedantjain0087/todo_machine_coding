class Todos {
    constructor() {
        this.todos = []
    }
    #generateId () {
        return Math.floor(Math.random() * 10000)
    }

    addTodo(value) {
        this.todos.push({id: this.#generateId(), value})
    }

    getTodos() {
        return this.todos
    }

    removeTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id != id)
        console.log(this.todos)
    }

    isEmpty() {
        return this.todos.length ? false : true
    }
}