import randomColor from "randomcolor";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../redux/color/colorSlice";

function Aside() {

  const color = useSelector(
    (state)=> {
      return state.color.value;
    }
  )
  const dispatch = useDispatch();
  
  const onColorChange = ()=>{
    const color = randomColor();
    // console.log(color);
    dispatch(setColor({
      color:color
    }));
  }

  return (
    <div className="aside">
      <h2 style={{color:color}}> Aside</h2>
      <button onClick={onColorChange}>Change Color</button>
    </div>
  );
}

export default Aside;
