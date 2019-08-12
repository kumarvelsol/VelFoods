export class order{
    Data : room[];
    code : number;
    message:string;
}
export class room{
    table_name:number;
    table_pax:number;
    order_itemname:string;
    order_rate:number;
    order_quantity:number;
    order_totalamount:number;
    restaurent_id:number;
    itemname_id:number;
    table_defination_id:number;
    order_status:string;
    insert_by:string;
    insert_date:Date;
    kot_id:number;
}
// export interface Irooms{
//     Data :Object;
//     code:number;
//     message:string;
// }