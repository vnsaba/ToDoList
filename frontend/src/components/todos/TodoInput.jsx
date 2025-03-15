import { useRef } from 'react';
import { createTodoAction } from '../../actions/create-todo.action';
import { Select } from '../ui/Select';
import { categories } from '../../utils/data';

const TodoInput = ({ setOptimisticTodos, setTodos }) => {
  const formRef = useRef();

  const handleAddNewTodo = async formData => {
    const todoText = formData.get('newTodo');
    const category = formData.get('category');

    if (!todoText | !category) return;

    const newTodo = {
      id: crypto.randomUUID(), // temp id
      description: todoText,
      category,
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
      <form
        className="mt-4 flex items-center"
        action={handleAddNewTodo}
        ref={formRef}
      >
        <input
          className="w-80 border-b-2 border-gray-500 text-black focus:outline-none pl-2 mr-3"
          type="text"
          placeholder="Crea un nueva tarea"
          name="newTodo"
        />
        <Select items={categories} name="category" />
        <button
          type="submit"
          className="ml-2 text-md border-2 border-green-500 px-2 py-1 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex items-center"
        >
          <svg
            className="h-5 w-5"
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
