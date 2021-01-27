import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ListOption } from 'src/app/models/list-options.model';
import { GlobalConstants } from 'src/app/shared/constans/global-constants';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthorsService {
  private baseUrl: string = GlobalConstants.baseUrl;

  constructor(private _http: HttpClient) { }

  getAuthors(): Observable<ListOption[]> {
    return this._http.get<ListOption[]>(`${this.baseUrl}/authors`);
  }
}
