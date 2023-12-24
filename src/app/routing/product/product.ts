export class Product {
    constructor( productid: number, name:string, price:number ){
        this.productid =productid,
        this.name = name,
        this.price = price
    }

    productid: number;
    name:string;
    price:number
}