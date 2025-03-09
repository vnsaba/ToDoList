export const getTodos = async () => {
  /*
  const res = await fetch('http://localhost:3001/api/todos');

  return res.json();
  */

  return [
    { id: 0, name: 'Task 1', completed: false },
    { id: 1, name: 'Task 2', completed: false },
    { id: 2, name: 'Taks 3', completed: false },
  ];
};
