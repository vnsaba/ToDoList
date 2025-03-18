import { useRef, useState, useTransition } from 'react';
import { removeTodoAction } from '../../actions/remove-todo.action';
import { Modal } from '../ui/Modal';
import { categories } from '../../utils/data';
import { Select } from '../ui/Select';
import { editTodoAction } from '../../actions/edit-todo.action';

const TodoItem = ({
  id,
  description,
  status,
  setOptimisticTodos,
  setTodos,
  category,
}) => {
  const completed = status === 'completed';
  const [_, startTransition] = useTransition();
  const [isChecked, setIsChecked] = useState(completed);
  const modalRef = useRef();
  const formRef = useRef();

  const handleCompleteTodo = event => {
    const { checked } = event.target;

    setIsChecked(checked);

    const setCompleteTodo = todos =>
      todos.map(todo =>
        todo.id === id
          ? { ...todo, status: checked ? 'completed' : 'pending' }
          : todo
      );

    startTransition(async () => {
      try {
        setOptimisticTodos(setCompleteTodo);

        await editTodoAction({
          todoId: id,
          todo: { status: checked ? 'completed' : 'pending' },
        });

        setTodos(setCompleteTodo);
      } catch (error) {
        console.error(error);
        setIsChecked(!checked);
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

  const handleEditTodo = async formData => {
    const todoText = formData.get('newDescription').trim();
    const category = formData.get('category').trim();

    if (!todoText | !category) return;

    formRef.current.reset();

    const updateTodoFn = todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, description: todoText, category } : todo
      );

    try {
      setOptimisticTodos(updateTodoFn);
      await editTodoAction({
        todoId: id,
        todo: { description: todoText, category },
      });

      setTodos(updateTodoFn);

      handleCloseModal();
    } catch (error) {
      console.error(error);
      // onAddNewTodo(newTodo);
    }
  };

  const handleOpenModal = () => {
    modalRef.current.showModal();
  };

  const handleCloseModal = () => {
    modalRef.current.close();
  };

  return (
    <div>
      <Modal ref={modalRef}>
        <div className="w-full">
          <h3
            className="text-2xl text-center font-bold text-gray-900"
            id="modal-title"
          >
            Actualizar tarea
          </h3>

          <form className="mt-10" action={handleEditTodo} ref={formRef}>
            <div className="flex">
              <input
                className="w-80 border-b-2 border-gray-500 text-black focus:outline-none pl-2 mr-3"
                type="text"
                placeholder="Nueva descripción"
                name="newDescription"
                defaultValue={description}
              />
              <Select
                items={categories}
                name="category"
                defaultValue={category}
                key={category}
              />
            </div>

            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="mt-12 mb-2 text-md border-2 border-green-500 px-2 py-1 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex items-center"
                onClick={handleCloseModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-download"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                </svg>
                <span className="ml-1">Guardar</span>
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <li className="p-2 rounded-lg">
        <div className="flex align-middle flex-row items-center justify-between">
          <div className="px-2 flex items-center h-full">
            <input
              type="checkbox"
              className="h-5 w-5"
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
              {description}
            </p>
          </div>
          <div className="flex">
            <button className="mr-3 text-blue-600/70" onClick={handleOpenModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                />
              </svg>
            </button>
            <button className="text-red-500" onClick={handleRemoveTodo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-x-square"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </button>
          </div>
        </div>
        <hr className="mt-2" />
      </li>
    </div>
  );
};

export { TodoItem };
