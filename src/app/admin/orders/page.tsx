import { getOrdersWithProducts } from "@/actions/orders";
import PageComponent from "@/app/admin/orders/page-component";

const Orders = async () => {
  const ordersWithProducts = await getOrdersWithProducts();

  if (!ordersWithProducts)
    return (
      <div className=" text-center font-bold text-2xl text-yellow-500">
        No orders found
      </div>
    );

  return (
    <section>
      <PageComponent ordersWithProducts={ordersWithProducts} />
    </section>
  );
};

export default Orders;
