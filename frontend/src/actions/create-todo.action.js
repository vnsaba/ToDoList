export const createTodoAction = async todo => {
  const { VITE_API_BASE_URL } = import.meta.env;

  /*
    const res = await fetch(`${VITE_API_BASE_URL}/tasks`, {
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

  return { ...todo, id: Math.floor(Math.random() * 1000) };
};
