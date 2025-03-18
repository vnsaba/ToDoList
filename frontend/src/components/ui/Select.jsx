const Select = ({ headerText, items, name = '', id, defaultValue = '' }) => {
  return (
    <div>
      {headerText && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {headerText}
        </label>
      )}

      <select
        name={name}
        id={id || name}
        className="px-3 w-full border-gray-300 border border-solid py-1.5 rounded-lg text-gray-700 "
        defaultValue={defaultValue}
      >
        {items.map(item => (
          <option key={item.label} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export { Select };
