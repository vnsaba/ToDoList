import { useState, useTransition } from 'react';
import { completeTodoAction } from '../../actions/complete-todo.action';
import { removeTodoAction } from '../../actions/remove-todo.action';

const TodoItem = ({ id, name, completed, setOptimisticTodos, setTodos }) => {
  const [_, startTransition] = useTransition();
  const [isChecked, setIsChecked] = useState(completed);

  const handleCompleteTodo = event => {
    const { checked } = event.target;

    setIsChecked(checked);

    const setCompleteTodo = todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: checked } : todo
      );

    startTransition(async () => {
      try {
        setOptimisticTodos(setCompleteTodo);

        await completeTodoAction(id);

        setTodos(setCompleteTodo);
      } catch (error) {
        console.error(error);
      }
    });
  };

  const handleRemoveTodo = () => {
    const removeTodo = todos => todos.filter(todo => todo.id !== id);
    startTransition(async () => {
      try {
        setOptimisticTodos(removeTodo);

        await removeTodoAction(id);

        setTodos(removeTodo);
      } catch (error) {
        console.error(error);
      }
    });
  };

  return (
    <li className="p-2 rounded-lg">
      <div className="flex align-middle flex-row justify-between">
        <div className="p-2">
          <input
            type="checkbox"
            className="h-6 w-6 "
            onChange={handleCompleteTodo}
            checked={isChecked}
          />
        </div>
        <div className="p-2">
          <p
            className={`text-lg ${
              completed ? 'line-through text-gray-400' : 'text-black'
            }`}
          >
            {name}
          </p>
        </div>
        <button
          className="flex text-red-500 border-2 border-red-500 p-2 rounded-lg"
          onClick={handleRemoveTodo}
        >
          <svg
            className="h-6 w-6 text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {' '}
            <circle cx={12} cy={12} r={10} />{' '}
            <line x1={15} y1={9} x2={9} y2={15} />{' '}
            <line x1={9} y1={9} x2={15} y2={15} />
          </svg>
        </button>
      </div>
      <hr className="mt-2" />
    </li>
  );
};

export { TodoItem };
