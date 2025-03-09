import { useTransition } from 'react';
import { removeCompletedTodosAction } from '../../actions/remove-completed-todo.action';
import { removeTodosAction } from '../../actions/remove-todos.action';

const TodoActions = ({ setOptimisticTodos, setTodos }) => {
  const [_, startTransition] = useTransition();

  const handleDeleteCompleted = async () => {
    const filterIncompleteTodos = todos =>
      todos.filter(todo => todo.completed === false);

    startTransition(async () => {
      try {
        setOptimisticTodos(filterIncompleteTodos);

        await removeCompletedTodosAction();

        setTodos(filterIncompleteTodos);
      } catch (error) {
        console.error(error);
      }
    });
  };

  const handleDeleteTodos = async () => {
    startTransition(async () => {
      try {
        setOptimisticTodos([]);

        await removeTodosAction();

        setTodos([]);
      } catch (error) {
        console.error(error);
      }
    });
  };

  return (
    <>
      <button
        className="border-2 border-red-500 p-2 text-red-500 rounded-xl"
        onClick={handleDeleteCompleted}
      >
        Eliminar completados
      </button>
      <button
        className="border-2 border-indigo-500 p-2 text-indigo-500 ml-4 rounded-xl"
        onClick={handleDeleteTodos}
      >
        Resetear lista
      </button>
    </>
  );
};

export { TodoActions };
