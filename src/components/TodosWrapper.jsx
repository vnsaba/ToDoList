import { use, useState } from 'react';
import { Todos } from './Todos';

const TodosWrapper = ({ getTodos }) => {
  const originalTodos = use(getTodos);
  const [todos, setTodos] = useState(originalTodos);

  return (
    <div className="w-full h-screen grid place-content-center bg-gray-100 pt-8">
      <div className="bg-white p-10 max-w-xl min-h-1/2 rounded-2xl">
        <Todos todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export { TodosWrapper };
