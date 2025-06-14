export const initialTodoValue = (): ITodo => {
  return {
    id: Math.random(),
    title: '',
    status: false
  };
};
