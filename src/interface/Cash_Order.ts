export interface Cash_Order {
    order_id?: number;
    user_id: number;
    shopping_car: number;
    order_date: Date;
    shipping_type_id: number;
    payment_method_id: number;
    order_address: string;
    zip_code: number;
    order_status: boolean;
}