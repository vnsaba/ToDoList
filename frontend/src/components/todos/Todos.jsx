import { useOptimistic } from 'react';
import { TodoInput } from './TodoInput';
import { TodoItem } from './TodoItem';
import { TodoActions } from './TodoActions';

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
        <TodoActions
          setOptimisticTodos={setOptimisticTodos}
          setTodos={setTodos}
        />
      </div>
    </>
  );
};

export { Todos };
