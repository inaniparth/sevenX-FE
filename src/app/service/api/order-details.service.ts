import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BaseService } from '../base-service/base.service';

@Injectable()
export class OrderDetailsService extends BaseService {
  urlPath: string = 'orderDetails';

  constructor(
    protected httpClient: HttpClient,
    protected injector: Injector
  ) {
    super(httpClient, injector);
  }
}