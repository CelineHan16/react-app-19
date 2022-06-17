import { useDispatch } from "react-redux";

export default function Name() {
  const dispatch = useDispatch();

  return (
    <div className="Name">
      <input type="text"  onChange={({ target }) => dispatch({ type: 'name/change', payload: target.value })} />
    </div>
  )
}