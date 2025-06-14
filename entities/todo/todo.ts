export class Todo {
  private _id: number = Math.random() + Math.random();
  private _title: string;
  private _status: boolean;

  constructor({ title, status }: Omit<ITodo, 'id'>) {
    this._title = title;
    this._status = status;
  }

  get getTodo() {
    return { id: this._id, title: this._title, status: this._status };
  }

  set setStatus(status: boolean) {
    if (this._status !== status) {
      this._status = status;
    }
  }

  set setTitle(title: string) {
    if (this._title !== title && this._title.length) {
      this._title = title;
    }
  }
}
