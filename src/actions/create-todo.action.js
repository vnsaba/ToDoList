export const createTodoAction = async todo => {
  try {
    /*
    const res = await fetch('http://localhost:3001/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });

    const createdTodo = await res.json();

    return createdTodo;
    */

    console.log('Todo creado:', todo);

    return {...todo, id: Math.floor(Math.random() * 1000)};
  } catch (error) {
    console.error(error);
  }
};
