import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.less']
})
export class PostListItemComponent implements OnInit {

  @Input()
  post: object;

  constructor() { }

  ngOnInit() {
  }

  onLoveIt() {
    this.post["loveIts"]++;
  }

  onDontLoveIt() {
    this.post["loveIts"]--;
  }
}
