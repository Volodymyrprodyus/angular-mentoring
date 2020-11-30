import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCourseCreation]'
})
export class CourseCreationDirective implements OnInit {
  @Input('appCourseCreation') creationDate: Date;
  
  constructor(private elem: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    this.renderBorderStyle();
  }

  renderBorderStyle(): void {
    const currentDate = Date.now();
    const creationDate = this.creationDate.getTime();
    const msPerDay = 86400000;

    const isFreshCourse = creationDate < currentDate && creationDate >= (currentDate - 14 * msPerDay);
    const isUpcommingCourse = creationDate > currentDate;

    if (isFreshCourse) {
      this.render.addClass(this.elem.nativeElement, 'is-fresh');
    }

    if (isUpcommingCourse) {
      this.render.addClass(this.elem.nativeElement, 'is-upcomming');
    }
  }
}
