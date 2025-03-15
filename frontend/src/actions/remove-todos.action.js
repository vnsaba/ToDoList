export const removeTodosAction = async () => {
  const { VITE_API_BASE_URL } = import.meta.env;
  /*
      await fetch(`${VITE_API_BASE_URL}/tasks`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      */
  console.log('Todos eliminados');
};
