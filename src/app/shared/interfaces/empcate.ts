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