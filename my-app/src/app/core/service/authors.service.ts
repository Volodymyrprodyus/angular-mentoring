import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListOption } from 'src/app/models/list-options.model';
import { HttpAuthorsService } from './http-authors.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  constructor(private httpAuthorsService: HttpAuthorsService) {}

  getAuthors(): Observable<ListOption[]> {
    return this.httpAuthorsService.getAuthors();
  }
}
