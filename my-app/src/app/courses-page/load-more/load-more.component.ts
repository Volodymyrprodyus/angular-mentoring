import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.css']
})
export class LoadMoreComponent implements OnInit {

  @Output() loadmore = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onLoadMoreCourses(): void {
    console.log('onLoadMoreCourses');
    this.loadmore.emit();
  }
}
