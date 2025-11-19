import { QueryData } from "@supabase/supabase-js";

import { createClient } from "@/supabase/server";

const supabase = createClient();
/* eslint-disable @typescript-eslint/no-unused-vars */
const ordersWithProductsQuery = supabase
  .from("order")
  .select("*, order_items:order_item(*, product(*)), user(*)")
  .order("created_at", { ascending: false });

export type OrdersWithProducts = QueryData<typeof ordersWithProductsQuery>;
