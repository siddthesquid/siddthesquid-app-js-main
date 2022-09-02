import { useState } from "react";

type State = {
  count: number;
};

type MyButtonProps = {
  hoverColor: string;
  clickedColor: string;
  onClick: () => void;
}
const MyButton = (

const counter: State = { count: 0 };
const increment = (state: State): State => ({ count: state.count + 1 });

const MyComponent = () => {
  const [state, setState] = useState(counter);
  return (
    <div
      onClick={() => {
        setState(increment(state));
      }}
    >
      <div>
        {" "}
        <input />
      </div>
      <div>
        {" "}
        <input />
      </div>
      <div>
        {" "}
        <button />
      </div>
    </div>
  );
};

export { MyComponent };
