import { useSelector } from "react-redux";

function Header() {

  const color = useSelector(
    state=>state.color.value
  )

  const count = useSelector(
    state=>state.count.value
  )

  return (
    <div className="header" style={{color}}>
      <h1>REDUX Project</h1>
      <h3>Count- {count}</h3>
    </div>
  );
}

export default Header;
