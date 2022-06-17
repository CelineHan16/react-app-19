import CounterControls from "./CounterControls";
import CounterDisplay from "./CounterDisplay";
import CounterSet from "./CounterSet";

export default function Counter() {
  return (
    <div className="Counter">
      <CounterDisplay />
      <CounterControls />
      <CounterSet />
    </div>

  )
}

// import { useState } from "react";
// import CounterControls from "./CounterControls";
// import CounterDisplay from "./CounterDisplay";

// function Counter() {
//   const [counter, setCounter] = useState(0);

//   function onIncrement() {
//     setCounter(counter + 1);
//   }
//   function onDecrement() {
//     setCounter(counter - 1);
//   }
//   function onReset() {
//     setCounter(0);
//   }

//   return (
//     <div className="Counter">
//       <CounterDisplay counter={counter} />
//       <CounterControls onIncrement={onIncrement} onDecrement={onDecrement} onReset={onReset} />
//     </div>
//   );
// }

// export default Counter;