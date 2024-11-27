
export type Gender = 'f' | 'm';
export class Child{
    id : number ; 
    firstname : string ;
    lastname : string ;
    parent_phone : string ;
    gender : Gender ;
   

    constructor(id : number, firstname : string, lastname : string, parent_phone : string, gender : Gender){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.parent_phone = parent_phone;
        this.gender = gender;
        
    }

}   
