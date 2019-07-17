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
    tax_id : number;
    tax_name : string;
    tax_percentage : number;
    tax_Active_from : string;
    tax_status : string;
    tax_employeename : string;
}