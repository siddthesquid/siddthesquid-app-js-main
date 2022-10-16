import { useState } from "react";

type State = {
  count: number;
};

type MyButtonProps = {
  hoverColor: string;
  clickedColor: string;
  onClick: () => void;
};

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
        <text>{state.count}</text>
      </div>
      <div>
        {" "}
        <input width="100%" />
      </div>
      <div
        onClick={() => {
          setState(increment(state));
        }}
      >
        {" "}
        <input />
      </div>
      <div>
        {" "}
        <button
          onClick={() => {
            setState(increment(state));
          }}
        />
      </div>
    </div>
  );
};

export { MyComponent };
