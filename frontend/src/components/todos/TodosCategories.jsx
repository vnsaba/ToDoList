import { categories } from '../../utils/data';

const TodoCategories = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const handleFilter = category => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-wrap mt-5">
      {categories.map(category => (
        <button
          type="button"
          onClick={() => handleFilter(category.value)}
          key={category.value}
          className={`mr-1.5 rounded-full px-4 text-white p-2 leading-none flex items-center ${
            selectedCategory === category.value
              ? 'bg-[#9B9ACB]'
              : 'bg-[#CBCBE5]'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export { TodoCategories };
