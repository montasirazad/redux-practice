import Button from "./Button";
import Count from "./Count";

// eslint-disable-next-line react/prop-types
const Counter = ({ count, onIncrement, onDecrement, id }) => {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <Count count={count} />
      <div className="flex space-x-3">
        <Button handler={() => onIncrement(id)}>Increment</Button>
        <Button handler={() => onDecrement(id)}>Decrement</Button>
      </div>
    </div>
  );
};

export default Counter;
