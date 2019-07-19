export interface JsResponse{
    message : string;
    code    : number;
    Data    : string;
}
export interface Responce{
    message : string;
    code    : number;
    Data    : Data[];
}
export interface Data{
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
}