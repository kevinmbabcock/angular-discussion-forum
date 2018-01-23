import {Pipe, PipeTransform} from '@angular/core';
import {Post} from './post.model';

@Pipe({
  name: 'category',
  pure: false
})


export class CategoryPipe implements PipeTransform {
  transform(input: Post[], desiredCategory) {
    const output: Post[] = [];
    if (desiredCategory === 'sportsPost') {
      for (let i = 0; i < input.length; i++) {
        if (input[i].category === 'sportsPost') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCategory === 'cookingPost') {
      for (let i = 0; i < input.length; i++) {
        if (input[i].category === 'cookingPost') {
          output.push(input[i]);
        }
      }
      return output;
    } else {

      return input;
    }
  }

}
