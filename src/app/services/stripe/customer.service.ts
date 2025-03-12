import {EventEmitter, Injectable, Output} from '@angular/core';
import {Snackbar} from '../../interfaces/snackbar';
import {Dialog} from '../../interfaces/dialog';
import {DefaultStripeService} from "./default.service";
import {StripeConstants} from "../../constants/stripe.constants";
import {Product} from "../../interfaces/stripe/product";
import {Customer} from "../../interfaces/stripe/customer";


@Injectable({
  providedIn: 'root',
})
export class CustomerService extends DefaultStripeService {

  override url_context = StripeConstants.URL_CONTEXT_CUSTOMERS;
  override defaultExpand = null;

  override async findAll(expand: string | null = this.defaultExpand): Promise<Customer[]> {
    return super.findAll(expand);
  }

  override async save(doc: Customer): Promise<Customer> {
    return super.save(doc);
  }

  override parseResult(result: any): any {
    return super.parseResult(result);
  }
}
