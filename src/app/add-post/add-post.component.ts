import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  providers: [PostService]
})
export class AddPostComponent implements OnInit {

  constructor(private postService: PostService) {}

  submitForm(title: string, author: string, content: string, category: string) {
    const newPostToAdd: Post = new Post(title, author, content, category, null);

    this.postService.addPost(newPostToAdd);
  }

  ngOnInit() {
  }

}
