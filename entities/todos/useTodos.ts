export const useTodos = () => {
  // here is just a mock but in real project I mean that
  // there could be something like fetching-data func

  const todos = reactive<ITodo[]>([
    {
      id: 123124124,
      title: 'New todo',
      status: 'true'
    }
  ]);

  return { todos };
};
