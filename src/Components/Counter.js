import { useDispatch, useSelector } from "react-redux";
import { dicrimentCounter, incrimentCounter } from "../redux/counter/counterSlice";

function Counter() {

  const count = useSelector(state=>state.count.value);
  const dispatch = useDispatch();

  const onIncrimentClick = ()=>{
    dispatch(incrimentCounter())
  }
  const onDicrimentClick = ()=>{
    dispatch(dicrimentCounter())
  }

  return (
    <div className="counter">
      <h2>Counter</h2>
      <h3>The count is - {count}</h3>
      <button onClick={onIncrimentClick}>Increase</button>
      <button onClick={onDicrimentClick}>Decrease</button>
    </div>
  );
}

export default Counter;
