import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { POSTS } from '../mock-post';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
  providers: [PostService]
})
export class EditPostComponent implements OnInit {
  postId: number;

  constructor(private route: ActivatedRoute, private location: Location, private postService: PostService) { }

  submitForm(title: string, content: string, category: string) {
    const postToEditIndex = this.postService.getPostIndexForUpdate(this.postId);
    POSTS[postToEditIndex].title = title;
    POSTS[postToEditIndex].content = content;
    POSTS[postToEditIndex].category = category;



  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = parseInt(urlParameters['id'], 10);
    });
    // this.postId = this.postService.getPostById(this.postId);
  }

}
