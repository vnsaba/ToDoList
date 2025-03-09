import { getTodos } from './actions/get-planets.action';
import { Suspense } from 'react';
import { TodosWrapper } from './components/TodosWrapper';

function App() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <TodosWrapper getTodos={getTodos()} />
    </Suspense>
  );
}

export default App;
