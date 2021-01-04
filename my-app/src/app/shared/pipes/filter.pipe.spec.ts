// import { Course } from 'src/app/models';
// import { FilterPipe } from './filter.pipe';

// const mockCourses: Course[] = [
// 	{
// 		id: 1,
// 		title: 'Video Course 1. Name tag',
// 		creationDate: new Date('2020/11/22'),
// 		duration: 150,
//     description: 'test description',
//     topRated: true
//   },
//   {
// 		id: 2,
// 		title: 'Video Course 2. Name tag',
// 		creationDate: new Date('2020/10/28'),
// 		duration: 320,
//     description: 'test description',
//     topRated: false
//   },
//   {
// 		id: 3,
// 		title: 'Video Course 3. Name tag',
// 		creationDate: new Date('2020/11/24'),
// 		duration: 0,
//     description: 'test description',
//     topRated: false
// 	}
// ];

// describe('FilterPipe', () => {
//   const pipe = new FilterPipe();

//   it('should create an instance', () => {
//     const pipeInstance = new FilterPipe();
//     expect(pipeInstance).toBeTruthy();
//   });

//   it('should filter courses by title', () => {
//     const searchPhrase = "Video Course 2";
//     const searchResult = pipe.transform(mockCourses, searchPhrase);
//     expect(searchResult).toEqual(
//       [
//         {
//           id: 2,
//           title: 'Video Course 2. Name tag',
//           creationDate: new Date('2020/10/28'),
//           duration: 320,
//           description: 'test description',
//           topRated: false
//         }
//       ]
//     );
//   });

//   it('should return empty array if no result', () => {
//     const searchPhrase = "Video Course 4";
//     const searchResult = pipe.transform(mockCourses, searchPhrase);
//     expect(searchResult).toEqual([]);
//   });
// });
