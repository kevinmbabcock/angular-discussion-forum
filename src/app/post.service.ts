import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { POSTS } from './mock-post';

@Injectable()
export class PostService {

  constructor() { }

  getPosts() {
    return POSTS;
  }

  addPost(thisPost) {
    thisPost.id = POSTS.length + 1;
    POSTS.push(thisPost);
  }

  getPostById(postId: number) {
    for (let i = 0; i < POSTS.length; i++) {
      if (POSTS[i].id === postId) {
        return POSTS[i];
      }
    }
  }

}
