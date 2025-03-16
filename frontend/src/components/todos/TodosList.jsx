import { useState } from 'react';
import { TodoCategories } from './TodosCategories';
import { TodoItem } from './TodoItem';

const TodosList = ({
  optimisticTodos,
  setOptimisticTodos,
  setTodos,
  todos,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredTodos = optimisticTodos.filter(
    todo => todo.category === selectedCategory
  );

  const didntFindTodos = selectedCategory && filteredTodos.length === 0;

  return (
    <>
      {todos.length != 0 && (
        <TodoCategories
          todos={todos}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          setOptimisticTodos={setOptimisticTodos}
        />
      )}

      {(optimisticTodos.length === 0 || didntFindTodos) && (
        <div className="flex items-center justify-center my-10">
          <div className="bg-white border border-slate-300 w-max h-20 shadow-lg rounded-md gap-4 p-4 flex flex-row items-center justify-center">
            <section className="w-6 h-full flex flex-col items-center justify-center text-red-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={21}
                height={21}
                fill="currentColor"
                className="bi bi-emoji-frown-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m-2.715 5.933a.5.5 0 0 1-.183-.683A4.5 4.5 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.5 3.5 0 0 0 8 10.5a3.5 3.5 0 0 0-3.032 1.75.5.5 0 0 1-.683.183M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" />
              </svg>
            </section>
            <section className="h-full flex flex-col items-start justify-end gap-1">
              <h1 className="text-base font-semibold text-zinc-800 antialiased">
                No se encontraron tareas!
              </h1>
              <p className="text-sm font-medium text-zinc-400 antialiased">
                Intenta probar con filtros o crear más tareas
              </p>
            </section>
          </div>
        </div>
      )}

      <div className="mt-6">
        <ul>
          {selectedCategory
            ? filteredTodos.map(todo => (
                <TodoItem
                  description={todo.description}
                  key={todo.id}
                  setOptimisticTodos={setOptimisticTodos}
                  setTodos={setTodos}
                  status={todo.status}
                  id={todo.id}
                />
              ))
            : optimisticTodos.map(todo => (
                <TodoItem
                  description={todo.description}
                  key={todo.id}
                  setOptimisticTodos={setOptimisticTodos}
                  setTodos={setTodos}
                  status={todo.status}
                  id={todo.id}
                />
              ))}
        </ul>
      </div>
    </>
  );
};

export { TodosList };
