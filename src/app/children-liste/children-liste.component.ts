import { Component, OnInit } from '@angular/core';
import { Child } from '../child';
import { ChildrenService } from '../children.service';

@Component({
  selector: 'app-children-liste',
  templateUrl: './children-liste.component.html',
  styleUrls: ['./children-liste.component.css']
})
export class ChildrenListeComponent  implements OnInit {
  children! : Child [];

  constructor(private childrenService : ChildrenService) { }

  ngOnInit(): void {
    this.getChildren();

  }
  private getChildren(){
    this.childrenService.getChildren().subscribe(data => {
      console.log(data);
      this.children = data;
    });
  }


}
