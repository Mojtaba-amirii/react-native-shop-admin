import PageComponent from "./page-component";
import { getLatestUsers } from "@/actions/auth";
import { getMonthlyOrders } from "@/actions/orders";
import { getCategoryData } from "@/actions/categories";

const AdminDashboard = async () => {
  const monthlyOrders = await getMonthlyOrders();
  const categoryData = await getCategoryData();
  const latestUsers = await getLatestUsers();

  return (
    <PageComponent
      monthlyOrders={monthlyOrders}
      categoryData={categoryData}
      latestUsers={latestUsers}
    />
  );
};

export default AdminDashboard;
