const TodoItem = ({ text, completed }) => {
  return (
    <li className="p-2 rounded-lg">
      <div className="flex align-middle flex-row justify-between">
        <div className="p-2">
          <input
            type="checkbox"
            className="h-6 w-6 "
            defaultValue="true"
            defaultChecked=""
          />
        </div>
        <div className="p-2">
          <p
            className={`text-lg ${
              completed ? 'line-through text-gray-400' : 'text-black'
            }`}
          >
            {text}
          </p>
        </div>
        <button className="flex text-red-500 border-2 border-red-500 p-2 rounded-lg">
          <svg
            className="h-6 w-6 text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {' '}
            <circle cx={12} cy={12} r={10} />{' '}
            <line x1={15} y1={9} x2={9} y2={15} />{' '}
            <line x1={9} y1={9} x2={15} y2={15} />
          </svg>
        </button>
      </div>
      <hr className="mt-2" />
    </li>
  );
};

export { TodoItem };
