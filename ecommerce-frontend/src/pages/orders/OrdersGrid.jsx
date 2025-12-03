import OrderDetailsGrid from "./OrderDetailsGrid";


const OrdersGrid = ({order}) => {
  return (
    <div>
      <OrderDetailsGrid order={order} />
    </div>
  );
};

export default OrdersGrid;
