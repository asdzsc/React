const Child1 = (props) => {
  return <div onClick={props.onReciveData.bind(this, "hello")}>child1</div>;
};
export default Child1;
