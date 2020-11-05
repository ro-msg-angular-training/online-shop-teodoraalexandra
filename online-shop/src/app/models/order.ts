import { OrderProduct } from "./orderProduct";

export interface Order {
  customer: String,
  products: OrderProduct[]
}
