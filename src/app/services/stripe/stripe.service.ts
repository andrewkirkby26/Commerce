import {Injectable} from "@angular/core";
import {DefaultStripeService} from "./default.service";
import {CustomerService} from "./customer.service";
import {ProductService} from "./product.service";

//This is intended to be an easier way to leverage all the stripe services
@Injectable({
    providedIn: 'root',
})
export class StripeService {

    constructor(private customerService: CustomerService, private productService: ProductService) {

    }

    getProductService():ProductService {
        return this.productService;
    }

    getCustomerService(): CustomerService {
        return this.customerService;
    }
}