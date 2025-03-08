import { TodoInput } from './TodoInput';
import { useOptimistic } from 'react';
import { TodoItem } from './TodoItem';

const todos = [
  {
    id: 1,
    name: 'Completado',
  },
  {
    id: 2,
    name: 'Task 1',
  },
]

const Todos = () => {
  const [optimisticTodos, setOptimisticTodos] = useOptimistic(
    todos,
    (current, newTodo) => {
      const newTodos = [...current, newTodo];

      return newTodos;
    }
  );
  return (
    <div className="w-full h-screen grid place-content-center bg-gray-100 pt-8">
      <div className="bg-white p-10 max-w-xl rounded-2xl">
        <TodoInput onAddNewPlanet={setOptimisticTodos} />
        {/* TodoInput */}
        <div className="mt-8">
          <ul>
            {optimisticTodos.map(todo => (
              <TodoItem key={todo.id} text={todo.name} />
            ))}
            {/* <TodoItem text="Completado" completed />
            <TodoItem text="Task 1" /> */}
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
      </div>
    </div>
  );
};

export { Todos };
