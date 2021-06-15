import React, {
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";

const ChildInputComponent = (props, ref) => {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => inputRef.current);
  return <input type="text" ref={inputRef} />;
};
const ChildInput = forwardRef(ChildInputComponent);

export default function UseimperativeHandle() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <ChildInput ref={inputRef} />
    </div>
  );
}
