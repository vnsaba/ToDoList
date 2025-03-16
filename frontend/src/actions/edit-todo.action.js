export const editTodoAction = async ({ todoId, todo }) => {
  const { VITE_API_BASE_URL } = import.meta.env;

  const res = await fetch(`${VITE_API_BASE_URL}/tasks/${todoId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });

  if (!res.ok) {
    throw new Error('No se pudo editar el todo');
  }
};
