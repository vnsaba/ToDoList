export const removeTodoAction = async id => {
  try {
    /*
        await fetch(`http://localhost:3001/api/todos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        });
        */
    console.log('Todo eliminado:', id);
  } catch (error) {
    console.error(error);
  }
};
