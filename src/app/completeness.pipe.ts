// import {Pipe, PipeTransform} from '@angular/core';
// import {Post} from './post.model';
//
// @Pipe({
//   name: "completeness",
//   pure: false
// })
//
//
// export class CompletenessPipe implements PipeTransform {
//   transform(input: Task[], desiredCompleteness) {
//     let output: Task[] = [];
//     if(desiredCompleteness === "sportsPost") {
//       for (let i = 0; i < input.length; i++) {
//         if (input[i].category === "sports") {
//           output.push(input[i]);
//         }
//       }
//       return output;
//     } else if (desiredCompleteness === "cookingPost") {
//       for (let i = 0; i < input.length; i++) {
//         if (input[i].category === "cooking") {
//           output.push(input[i]);
//         }
//       }
//       return output;
//     } else {
//       return input;
//     }
//   }
//
// }
