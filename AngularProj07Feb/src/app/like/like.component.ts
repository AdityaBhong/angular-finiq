import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('LikesCount') likesCount:number;
  @Input('isActive') isActive:boolean;
  @Input('desc') desc:string;

  OnClick()
  {
    this.likesCount+=this.isActive ? -1 : 1;
    this.isActive=!this.isActive;
  }
}
