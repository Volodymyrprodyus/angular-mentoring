import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css']
})
export class CourseSearchComponent implements OnInit {
  inputValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log(`You try to find: ${this.inputValue}`);
  }

}
