export interface EmployeeCategory {
    empdepartement_id:number;
    empdepartement_name:string;
    empdepartement_status:string;
    restaurent_id:number;

}

export interface EmployeeRegistration{
    empregistration_id:number;
    empregistration_name:string;
    empregistration_mobile_no:number;
    empregistration_email_id:string;
    empregistration_id_proof:string;
    empregistration_id_data:string;
    empregistration_Address:string;
    empdepartement_id:number;
    empregistration_status:string;
    empregistration_login_type:string;
    Username:string;
    password:string;
    restaurent_id:number;
}
export interface itemcategory{
    itemcategory_id:number;
    item_name:string;
    item_description:string;
    item_active_from:Date;
    item_status:string;
    item_reporting_name:string;
    restaurent_id:number;
}

export interface itemnames{
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
    restaurent_id :number;
    itemcategory_id:number;
    itemname_dinein_total:string;
    itemname_takeaway_total:string;
    itemname_homedelivary_total:string;
}


export interface order{
    order_id:number;
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

export interface bank{
    bank_id:number;
    bank_code:string;
    bank_name:string;
    bank_account_no:number;
    bank_status:string;
    bank_reporting_name:string;
    empregistration_id:number;
    restaurent_id:number;
}

export interface login{
    username:string;
    password:string;
    resid:number;
}

export interface loginss{
    
}