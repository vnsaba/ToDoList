export const removeTodosAction = async () => {
  try {
    /*
      await fetch(`http://localhost:3001/api/todos`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      */
    console.log('Todos eliminados');
  } catch (error) {
    console.error(error);
  }
};
