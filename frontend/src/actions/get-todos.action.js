export const getTodos = async () => {
  const { VITE_API_BASE_URL } = import.meta.env;

  const res = await fetch(`${VITE_API_BASE_URL}/tasks`);

  return res.json();
};
