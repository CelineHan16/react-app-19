import { useDispatch } from "react-redux";

function CounterControls() {
  const dispatch = useDispatch();

  return (
    <div className="CounterControls">
      <button onClick={() => dispatch({ type: 'counter/increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'counter/reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'counter/decrement' })}>-</button>
    </div>
  );
}

export default CounterControls;




// function CounterControls({ onIncrement, onDecrement, onReset }) {
//   return (
//     <div className="CounterControls">
//       <button onClick={onIncrement}>+</button>
//       <button onClick={onDecrement}>-</button>
//       <button onClick={onReset}>Reset</button>
//     </div>
//   );
// }

// export default CounterControls;