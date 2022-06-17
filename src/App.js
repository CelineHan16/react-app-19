// import Counter from "./Counter";
// import counterSlice from "./counterSlice";
import { useSelector } from "react-redux/es/exports";

import Counter from "./Counter";
import Name from "./Name";


function App() {
  const name = useSelector(store => store.name.name);

  return (
    <>
      <Counter />
      <hr />
      <Name />
      <h2>Hello {name}</h2>
    </>
  );
}

export default App;
