import { Component, OnInit, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ItemChildComponent } from '../item-child/item-child.component';

@Component({
  selector: 'app-item-parent',
  templateUrl: './item-parent.component.html',
  styleUrls: ['./item-parent.component.css'],
  encapsulation: ViewEncapsulation.None // to make this component style is shared in all application
})
export class ItemParentComponent implements OnInit {
  constructor() { }
  // parent > child 
  itemParentTitle: string = ''
  @ViewChild('myChild') myChild: ItemChildComponent
  settiout() {
    setTimeout(() => {
      this.myChild.ChildSetTitle('new title ')
    }, 3000);
  }
  ngOnInit(): void {
    this.settiout()
  }

  // child > parent
  dataFromChild: string = ''
}
