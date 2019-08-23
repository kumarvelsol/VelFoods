export interface JsResponse {
    message : string;
    code    : number;
    Data    : string;
}
export interface Responce {
    message : string;
    code    : number;
    Data    : Data[];
}
export interface Data {
    empdepartement_id:number;
    empdepartement_name:string;
    empdepartement_status:string;
    restaurent_id:number;
    empregistration_id:number;
    empregistration_name:string;
    empregistration_mobile_no:number;
    empregistration_email_id:string;
    empregistration_id_proof:string;
    empregistration_id_data:string;
    empregistration_Address:string;
    empregistration_status:string;
    empregistration_login_type:string;
    Username:string;
    password:string;
    itemcategory_id:number;
    item_name:string;
    item_description:string;
    item_active_from:Date;
    item_status:string;
    item_reporting_name:string;
    itemname_id:number;
    itemname_item_name:string;
    itemname_description:string;
    itemname_reportingname:string;
    itemname_active_from:Date;
    itemname_status:string;
    item_dinein_amount:number;
    item_dinein_tax:number;
    item_takeaway_amount:number;
    item_takeaway_tax:number;
    item_homedelivary_amount:number;
    item_homedelivary_tax:number;
    item_homedelivery_deliverycharges:number;
    itemname_dinein_total:string;
    itemname_takeaway_total:string;
    itemname_homedelivary_total:string;
    tax_id : number;
    tax_name : string;
    tax_percentage : number;
    tax_Active_from : string;
    tax_status : string;
    tax_employeename : string;
    offers_id : number;
    promo_code_name : string;
    promo_code : string;
    promo_code_description : string;
    percentage : string;
    Active_dare_status : string;
    from_date : string;
    to_date : string;
    Active_time_status : string;
    from_time : string;
    to_time : string;
    Day_status : string;
    Days : string;
    Day_type : string;
    minbill_status : string;
    minbill_amount : string;
    maximum_bill_status : string;
    maximum_bill_amount : string;
    offers_status : string;
    insert_by : string;
    insert_date : string;
    table_pax : number;
    table_capatain : string;
    table_name : string;
    bank_id:number;
    bank_code:string;
    bank_name:string;
    bank_account_no:number;
    bank_status:string;
    bank_reporting_name:string;
    table_defination_id : number;
    order_itemname : string;
    order_rate : number;
    order_quantity : number;
    order_totalamount : number;
    order_tax : number;
    BACKGROUND_COLOR : string;
    kot_id: number;
    order_captain: string;
    order_id: number;
    order_status:string;
    order_tax_amount: number;
    print_id : number;
    total_amount : number,
    total_after_discount : number,
    discount_amount : number,
    print_status : string,
    textcolor : string,
    username:string;
}