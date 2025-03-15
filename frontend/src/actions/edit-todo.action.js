export const editTodoAction = async ({ todoId, newDescription, category }) => {
  const { VITE_API_BASE_URL } = import.meta.env;

  /*
    await fetch(`${VITE_API_BASE_URL}/tasks/${todoId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description: newDescription, category }),
    });
    */

  console.log('Todo completado:', todoId);
  return true;
};
