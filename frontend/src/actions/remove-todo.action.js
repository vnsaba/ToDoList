export const removeTodoAction = async id => {
  const { VITE_API_BASE_URL } = import.meta.env;

  /*
        await fetch(`${VITE_API_BASE_URL}/tasks/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        });
        */
  console.log('Todo eliminado:', id);

  await delayReturn();
};

const delayReturn = () => {
  return new Promise(resolve => setTimeout(resolve, 3000));
};
