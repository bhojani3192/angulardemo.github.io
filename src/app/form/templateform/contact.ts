export class contact {
    firstname:string;
    lastname:string;
    email:string;
    gender:string;
    isMarried:boolean;
    country:string;
  
    address: {
        city:string;
        street:string;
        pincode:string;
      }
  
      constructor(firstname:string, lastname:string, email:string, gender:string, isMarried:boolean, country:string,address:any){
        this.firstname=firstname,
        this.lastname=lastname
        this.email=email,
        this.gender=gender,
        this.isMarried=isMarried,
        this.country=country,
        this.address= address
      }
  }