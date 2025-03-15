export const getTodos = async () => {
  const { VITE_API_BASE_URL } = import.meta.env;

  /*
  const res = await fetch(`${VITE_API_BASE_URL}/tasks`);

  return res.json();
  */

  
  await delayReturn();

  return [
    { id: 0, description: 'Task 1', status: 'pending', category: 'work' },
    { id: 1, description: 'Task 2', status: 'pending', category: 'personal' },
    { id: 2, description: 'Taks 3', status: 'pending', category: 'work' },
    { id: 3, description: 'Task 4', status: 'pending', category: 'other' },
  ];
};

const delayReturn = () => {
  return new Promise(resolve => setTimeout(resolve, 2000));
};
