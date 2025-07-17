import type { FC } from "react";
import { decrementCount, incrementCount } from "../store/use-counter-store";

const ButtonsContainer: FC = () => {
  return (
    <div className="card">
      <button onClick={incrementCount()}>Increment</button>
      <button onClick={decrementCount()}>Decrement</button>
    </div>
  );
};

export default ButtonsContainer;