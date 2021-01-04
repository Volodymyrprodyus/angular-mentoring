import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-no-found-page',
  templateUrl: './no-found-page.component.html',
  styleUrls: ['./no-found-page.component.css']
})
export class NotFoundPageComponent implements OnInit {
  public path: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.pipe(take(1))
      .subscribe((data: { path: string }) => {
        this.path = data.path;
      });
  }
}
