export const removeTodoAction = async id => {
  const { VITE_API_BASE_URL } = import.meta.env;

  const res = await fetch(`${VITE_API_BASE_URL}/tasks/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('No se pudo eliminar el todo');
  }

};
