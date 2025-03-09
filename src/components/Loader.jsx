const Loader = () => {
  return (
    <div className="w-full h-screen grid place-content-center">
      <div
        style={{ borderTopColor: 'transparent' }}
        className="w-16 h-16 border-4 border-red-400 border-double rounded-full animate-spin"
      />
    </div>
  );
};

export { Loader };
