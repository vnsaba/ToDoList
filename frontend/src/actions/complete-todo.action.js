export const completeTodoAction = async todoId => {
  const { VITE_API_BASE_URL } = import.meta.env;

  await fetch(`${VITE_API_BASE_URL}/todos/${todoId}/completed`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status: 'completed' }),
  });

  console.log('Todo completado:', todoId);
};
