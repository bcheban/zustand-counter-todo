import type { FC } from "react";
import Value from "./value";

interface IProps {
  count: number;
}

const ValueContainer: FC = () => {
  return (
    <div>
      <h4>Number:</h4>
      <Value />
    </div>
  );
};

export default ValueContainer;
