import {EventEmitter, Injectable, Output} from '@angular/core';
import {Snackbar} from '../../interfaces/snackbar';
import {Dialog} from '../../interfaces/dialog';
import {DefaultStripeService} from "./default.service";
import {StripeConstants} from "../../constants/stripe.constants";
import {Product} from "../../interfaces/stripe/product";
import {expand} from "rxjs";
import {Customer} from "../../interfaces/stripe/customer";

@Injectable({
  providedIn: 'root',
})
export class ProductService extends DefaultStripeService {

  override url_context = StripeConstants.URL_CONTEXT_PRODUCTS;
  override defaultExpand = "data.default_price"

  override async findAll(expand: string | null = this.defaultExpand): Promise<Product[]> {
    return super.findAll(expand);
  }

  override async save(doc: Product): Promise<Product> {
    return super.save(doc);
  }

  override parseResult(result: any): any {
    return new Product(result);
  }
}
