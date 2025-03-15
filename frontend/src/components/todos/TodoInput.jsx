import { useRef } from 'react';
import { createTodoAction } from '../../actions/create-todo.action';

const TodoInput = ({ setOptimisticTodos, setTodos }) => {
  const formRef = useRef();

  const handleAddNewTodo = async formData => {
    const todoText = formData.get('newTodo');

    if (!todoText) return;

    const newTodo = {
      id: crypto.randomUUID(), // temp id
      description: todoText,
      status: 'pending',
    };

    formRef.current.reset();

    try {
      setOptimisticTodos(todos => [...todos, { ...newTodo }]);
      const retrievedTodo = await createTodoAction(newTodo);

      setTodos(todos => {
        const newTodos = [...todos, { ...retrievedTodo }];

        return newTodos;
      });
    } catch (error) {
      console.error(error);
      // onAddNewTodo(newTodo);
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">ToDos</h1>
      <form className="mt-4 flex" action={handleAddNewTodo} ref={formRef}>
        <input
          className="w-80 border-b-2 border-gray-500 text-black focus:outline-none pl-2"
          type="text"
          placeholder="Crea un nuevo task"
          name="newTodo"
        />
        <button
          type="submit"
          className="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex"
        >
          <svg
            className="h-6 w-6"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />{' '}
            <circle cx={12} cy={12} r={9} />{' '}
            <line x1={9} y1={12} x2={15} y2={12} />{' '}
            <line x1={12} y1={9} x2={12} y2={15} />
          </svg>
          <span>Añadir</span>
        </button>
      </form>
    </div>
  );
};

export { TodoInput };
