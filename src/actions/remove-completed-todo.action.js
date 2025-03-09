export const removeCompletedTodosAction = async todoId => {
    try {
      /*
      await fetch(`http://localhost:3001/api/todos/completed`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      */
      console.log('Todo completados eliminados:', todoId);
    } catch (error) {
      console.error(error);
    }
  };
  