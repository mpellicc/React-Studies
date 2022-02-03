import { Badge, Button, InputNumber, Space, Statistic } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import {
  incrementByAmount,
  decrementByAmount,
  incrementQuantity,
  decrementQuantity,
} from "features/product/productsSlice";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

type Props = {
  id?: number | null;
};

function Counter({ id }: Props) {
  const { t, i18n } = useTranslation();
  const quantity = useSelector(
    (state: any) => state.products.find((item: any) => item.id === id).quantity
  );
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <Space size="large" direction="vertical">
      <div>
        <Space>
          {t('amount')}:
          <InputNumber readOnly value={quantity} />
          <ButtonGroup>
            <Button onClick={() => dispatch(incrementQuantity({ id }))}>
              +
            </Button>
            <Button onClick={() => dispatch(decrementQuantity({ id }))}>
              -
            </Button>
          </ButtonGroup>
        </Space>
      </div>
      <div>
        <Space>
          {t('choose increment')}:
          <InputNumber
            value={incrementAmount}
            onChange={(n) => setIncrementAmount(n)}
          />
          <ButtonGroup>
            <Button
              onClick={() =>
                dispatch(incrementByAmount({ id, incrementAmount }))
              }
            >
              {t('increase')}
            </Button>
            <Button
              onClick={() =>
                dispatch(decrementByAmount({ id, incrementAmount }))
              }
            >
              {t('decrease')}
            </Button>
          </ButtonGroup>
        </Space>
      </div>
    </Space>
  );
}

export default Counter;
