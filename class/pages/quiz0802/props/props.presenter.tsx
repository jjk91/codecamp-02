export default function ContainerUi(props) {
  return (
    <>
      <div>{props.child}</div>
      <div>{props.age}</div>
    </>
  );
}
