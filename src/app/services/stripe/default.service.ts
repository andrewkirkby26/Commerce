import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import {StripeConstants} from "../../constants/stripe.constants";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Base} from "../../interfaces/stripe/base";

@Injectable({
  providedIn: 'root',
})
export class DefaultStripeService{

  token = StripeConstants.token;
  url_prefix = "https://api.stripe.com/v1/"
  url_context = "";
  defaultExpand: string | null = null;

  constructor(public httpUtil: HttpClient) {

  }

  async save(doc: Base): Promise<any | null> {
    let options = this.getBaseHeadersObject();

    let url = doc.isNew() ? this.getBaseURL() : this.getBaseURL() + "/" + doc.id;
    //@ts-ignore
    return this.httpUtil.post(this.getBaseURL(), doc, options).toPromise().then((resp: any) => {
      return this.parseResult(resp);
    }).catch(err => {
      console.error(err);
      return null;
    })
  }

  async findAll(expand: string | null = this.defaultExpand): Promise<any[]> {
    let options: any = this.getBaseHeadersObject()

    let params: any = {}
    if (expand) {
      params['expand[]'] = expand;
    }

    options.params = params;

    return this.httpUtil.get(this.getBaseURL(), options).toPromise().then(resp => {
      return this.parseResults(resp);
    }).catch(err => {
      console.error(err);
      return [];
    })
  }

  private getBaseHeadersObject(extras: any | null = null): any {
    let h = extras ? extras : {};
    h["Authorization"] = "Bearer " + this.token;

    return {
      headers: h
    }
  }

  private getBaseURL(): string {
    return this.url_prefix + this.url_context;
  }

  parseResults(results: any): Base[] {
    let rVal: any[] = [];

    try {
      if (results && results.data) {
        results.data.forEach((r: any) => {
          rVal.push(this.parseResult(r));
        })
      }
    } catch (e) {

    }

    return rVal;
  }

  parseResult(result: any): Base {
    return result;
  }
}
