import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(courseArr: Course[], searchText: string): Course[] {
    const courseName = searchText.toLowerCase();
    return courseArr.filter(course => course.title.toLowerCase().includes(courseName));
  }
}
