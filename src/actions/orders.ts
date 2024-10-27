"use server";

import { createClient } from "@/supabase/server";
import { revalidatePath } from "next/cache";
import { sendNotification } from "./notifications";

export const getOrdersWithProducts = async () => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("order")
    .select("*, order_items:order_item(*, product(*)), user(*)")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return data;
};

export const updateOrderStatus = async (orderId: number, status: string) => {
  const supabase = createClient();
  const { error } = await supabase
    .from("order")
    .update({ status })
    .eq("id", orderId);

  if (error) throw new Error(error.message);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !user.id) {
    throw new Error("User session is not available");
  }
  const userId = user.id;

  await sendNotification(userId, status + " 🚀");

  revalidatePath("/admin/orders");
};
