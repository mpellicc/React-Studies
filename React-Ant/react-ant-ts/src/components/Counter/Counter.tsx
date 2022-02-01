import { Button, InputNumber, Space } from "antd";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "./counterSlice";

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <Space size="small">
      <Button onClick={() => dispatch(increment())}>+</Button>
      <InputNumber readOnly value={count} />
      <Button onClick={() => dispatch(decrement())}>-</Button>
    </Space>
  );
}

export default Counter;