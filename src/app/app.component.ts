import { Component, Input } from '@angular/core';
import { Post } from './post.model';
import { POSTS } from './mock-post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Our Forums:';

  addNewPost(newPost) {
    POSTS.push(newPost);
  }

  // @Input() childPostList: Post[];
}
