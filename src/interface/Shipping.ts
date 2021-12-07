export interface Shipping {
    shipping_id?: string;
    order_id: string;
    product_id: number;
    units: number,
    state: string;
    updated: Date;
    location_id: number;
    shipping_status: boolean;
}