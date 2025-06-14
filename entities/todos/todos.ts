export class Todos {
  private _todos: Todo[] = [];

  constructor(todos: Todo[]) {
    this._todos = todos;
  }

  get getTodos() {
    return this._todos;
  }

  get getTodosValues() {
    return this._todos.map(todo => todo.getTodo);
  }

  set setTodos(todos: Todo[]) {
    this._todos = todos;
  }

  addTodo(newTodo: Todo) {
    const isTodoExist = this._todos.find(todo => todo.getTodo.id === newTodo.getTodo.id);

    if (!isTodoExist) {
      this._todos.push(newTodo);
    }
  }

  removeTodo(todoToRemove: ITodo) {
    const isTodoExist = this._todos.find(todo => todo.getTodo.id === todoToRemove.id);

    if (isTodoExist) {
      this._todos = this._todos.filter(todo => todo.getTodo.id !== todoToRemove.id);
    }
  }
}
