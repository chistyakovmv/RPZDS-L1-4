import { Component, Input, OnInit, Output } from '@angular/core';
import { Post } from '../app.component';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post!: Post
  @Output() postid: EventEmitter<number> = new EventEmitter<number>()
  removePost() {
  this.postid.emit(this.post.id)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
