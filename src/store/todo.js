import {makeAutoObservable} from "mobx";

class Todo {
    todos = [
        {id:1, title: 'Сходи в магазин', completed: false},
        {id:2, title: 'Посмотри TV', completed: false},
        {id:3, title: 'Поставь лайк', completed: false}
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo) {
        this.todos.push(todo)
    }
    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
    completedTodo(id) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    }
}

export default new Todo()