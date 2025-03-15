export const getTodos = async () => {
  const { VITE_API_BASE_URL } = import.meta.env;

  /*
  const res = await fetch(`${VITE_API_BASE_URL}/tasks`);

  return res.json();
  */

  await delayReturn();

  return [
    { id: 0, name: 'Task 1', completed: false },
    { id: 1, name: 'Task 2', completed: true },
    { id: 2, name: 'Taks 3', completed: false },
    { id: 3, name: 'Task 4', completed: true },
  ];
};

const delayReturn = () => {
  return new Promise(resolve => setTimeout(resolve, 2000));
};
