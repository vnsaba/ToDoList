import { useOptimistic } from 'react';
import { TodoInput } from './TodoInput';
import { TodoActions } from './TodoActions';
import { TodosList } from './TodosList';

const Todos = ({ todos, setTodos }) => {
  const [optimisticTodos, setOptimisticTodos] = useOptimistic(todos);
  const emptyTodos = optimisticTodos.length === 0;

  return (
    <>
      <TodoInput
        setOptimisticTodos={setOptimisticTodos}
        setTodos={setTodos}
        optimisticTodos={optimisticTodos}
      />
      <TodosList
        setOptimisticTodos={setOptimisticTodos}
        setTodos={setTodos}
        optimisticTodos={optimisticTodos}
        todos={todos}
      />
      <div className="mt-8">
        <TodoActions
          setOptimisticTodos={setOptimisticTodos}
          setTodos={setTodos}
          disabled={emptyTodos}
        />
      </div>
    </>
  );
};

export { Todos };
