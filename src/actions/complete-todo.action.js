export const completeTodoAction = async todoId => {
  try {
    /*
    await fetch(`http://localhost:3001/api/todos/${todoId}/completed`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    */
    console.log('Todo completado:', todoId);
  } catch (error) {
    console.error(error);
  }
};
