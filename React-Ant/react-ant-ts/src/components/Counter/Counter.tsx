import { Button, InputNumber, Space } from "antd";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  selectCount,
} from "./counterSlice";

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <Space size="large">
      <div>
        <Space>
          Amount:
          <InputNumber readOnly value={count} />
          <div>
            <Button onClick={() => dispatch(increment())}>+</Button>
            <Button onClick={() => dispatch(decrement())}>-</Button>
          </div>
        </Space>
      </div>
      <div>
        <Space>
          Choose increment amount:
          <InputNumber
            value={incrementAmount}
            onChange={(n) => setIncrementAmount(n)}
          />
          <div>
            <Button
              onClick={() =>
                dispatch(incrementByAmount(incrementAmount || 0))
              }
            >
              Increase
            </Button>
            <Button
              onClick={() =>
                dispatch(decrementByAmount(incrementAmount || 0))
              }
            >
              Decrease
            </Button>
          </div>
        </Space>
      </div>
    </Space>
  );
}

export default Counter;
