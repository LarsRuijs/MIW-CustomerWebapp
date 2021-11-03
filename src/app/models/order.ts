import { Customer } from "./customer";
import { Product } from "./product";

export class Order {
    id: number;
    customer: Customer;
    products: Product[];
}