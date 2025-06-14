export class Todos {
  private _todos: ITodo[] = [];

  constructor(todos: ITodo[]) {
    this._todos = todos;
  }

  get getTodos() {
    return this._todos;
  }

  set setTodos(todos: ITodo[]) {
    this._todos = todos;
  }

  addTodo(newTodo: ITodo) {
    const isTodoExist = this._todos.find(todo => todo.id === newTodo.id);

    if (!isTodoExist) {
      this._todos.push(newTodo);
    }
  }

  removeTodo(todoToRemove: ITodo) {
    const isTodoExist = this._todos.find(todo => todo.id === todoToRemove.id);

    if (isTodoExist) {
      this._todos = this._todos.filter(todo => todo.id !== todoToRemove.id);
    }
  }
}
