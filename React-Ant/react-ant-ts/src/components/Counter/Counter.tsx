import { Button, InputNumber, Space } from "antd";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";


type Props = {
  id: number;
}

function Counter({ id }: Props) {
  const quantity = useSelector((state: any) => state.products.find((item: any) => item.id === id).quantity);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <Space size="large">
      <div>
        <Space>
          Amount:
          <InputNumber readOnly value={quantity} />
          <div>
            <Button >+</Button>
            <Button >-</Button>
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
              
            >
              Increase
            </Button>
            <Button
              
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
