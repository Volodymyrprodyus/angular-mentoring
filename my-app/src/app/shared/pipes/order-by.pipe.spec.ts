// import { Course } from 'src/app/models';
// import { OrderByPipe } from './order-by.pipe';

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

// describe('OrderByPipe', () => {
//   const pipe = new OrderByPipe();

//   it('should create an instance', () => {
//     const pipeInstance = new OrderByPipe();
//     expect(pipeInstance).toBeTruthy();
//   });

//   it('should sort courses by date fresh course first', () => {
//     const sortResult = pipe.transform(mockCourses);
//     expect(sortResult).toEqual(
//       [
//         {
//           id: 3,
//           title: 'Video Course 3. Name tag',
//           creationDate: new Date('2020/11/24'),
//           duration: 0,
//           description: 'test description',
//           topRated: false
//         },
//         {
//           id: 1,
//           title: 'Video Course 1. Name tag',
//           creationDate: new Date('2020/11/22'),
//           duration: 150,
//           description: 'test description',
//           topRated: true
//         },
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
// });
