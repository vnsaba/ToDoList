import { useOptimistic } from 'react';
import { TodoInput } from './TodoInput';
import { TodoItem } from './TodoItem';

const Todos = ({ todos, setTodos }) => {
  const [optimisticTodos, setOptimisticTodos] = useOptimistic(todos);

  return (
    <>
      <TodoInput setOptimisticTodos={setOptimisticTodos} setTodos={setTodos} />
      <div className="mt-8">
        <ul>
          {optimisticTodos.map(todo => (
            <TodoItem
              name={todo.name}
              key={todo.id}
              setOptimisticTodos={setOptimisticTodos}
              setTodos={setTodos}
              completed={todo.completed}
              id={todo.id}
            />
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <button className="border-2 border-red-500 p-2 text-red-500 rounded-xl">
          Eliminar completados
        </button>
        <button className="border-2 border-indigo-500 p-2 text-indigo-500 ml-4 rounded-xl">
          Resetear lista
        </button>
      </div>
    </>
  );
};

export { Todos };
