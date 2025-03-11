import { getTodos } from './actions/get-todos.action';
import { Suspense } from 'react';
import { TodosWrapper } from './components/todos/TodosWrapper';
import { Loader } from './components/Loader';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <TodosWrapper getTodos={getTodos()} />
    </Suspense>
  );
}

export default App;
