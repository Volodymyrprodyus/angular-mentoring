import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoadingService {
  loadingSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  setLoading(loading: boolean, url: string): void {
    if (!url) {
      throw new Error('The request URL must be provided to the LoadingService.setLoading function');
    }
    if (loading === true) {
      this.loadingSub.next(true);
    }else if (loading === false) {
      this.loadingSub.next(false);
    }
  }
}