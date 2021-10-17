import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BaseService } from '../base-service/base.service';

@Injectable({
  providedIn: 'root'
})
export class PackageRemoveService extends BaseService {
  urlPath: string = 'packageRemove';

  constructor(protected httpClient: HttpClient, protected injector: Injector) {
    super(httpClient, injector);
  }
}
