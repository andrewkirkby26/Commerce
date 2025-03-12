import {Base} from "./base";

export class Customer extends Base {

    address: any | null = null;
    balance = 0;
    description = "";
    discount = "";
    email = "";
    livemode = false;
    name = "";
    phone = "";
    shipping: any | null = null;

    constructor(c: any) {
        super(c);

        if (c) {
            this.balance = c.balance;
            this.description = c.description;
            this.discount = c.discount;
            this.email = c.email;
            this.livemode = c.livemode;
            this.name = c.name;
            this.phone = c.phone;
            this.shipping = c.shipping;
        }
    }
}