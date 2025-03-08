export const createTodoAction = async todo => {
  try {
    // await fetch('http://localhost:3001/todos', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(todo),
    // });

    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Todo creado', todo);
  } catch (error) {
    console.error(error);
  }
};
