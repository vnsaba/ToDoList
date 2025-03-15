export const removeTodoAction = async id => {
  const { VITE_API_BASE_URL } = import.meta.env;

  if (!id) return;

  /*
        await fetch(`${VITE_API_BASE_URL}/tasks/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        });
        */
  console.log('Todo eliminado:', id);
};
