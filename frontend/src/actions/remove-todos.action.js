export const removeTodosAction = async () => {
  const { VITE_API_BASE_URL } = import.meta.env;

  const res = await fetch(`${VITE_API_BASE_URL}/tasks`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('No se pudieron eliminar los todos');
  }
};
