// eslint-disable-next-line react/prop-types
const Button = ({ children, handler }) => {
  return (
    <button
      className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
      id="increment"
      onClick={handler}
    >
      {children}
    </button>
  );
};

export default Button;
