interface ordersProduct {
  productId: string;
  qty: number;
  price: number;
  name: string;
}
interface LoginData {
  email: string;
  password: string;
}
interface DataProduct {
  _id: string;
  name: string;
  price: number;
  type: string;
  dateEntry: string;
}
export { ordersProduct, LoginData, DataProduct }