import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
  providers: [PostService]
})
export class EditPostComponent implements OnInit {
  postId: number;

  constructor(private route: ActivatedRoute, private location: Location, private postService: PostService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = parseInt(urlParameters['id']);
    });
    this.postId = this.postService.getPostIdForUpdate(this.postId);
  }

}
