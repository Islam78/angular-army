import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-child',
  templateUrl: './item-child.component.html',
  styleUrls: ['./item-child.component.css']
})
export class ItemChildComponent {
  constructor() { }
  // parent > child 
  @Input() itemTitleInChild
  ChildSetTitle(title: string) {
    this.itemTitleInChild = title
    console.log('im in child and i will change it from parent');
  }

  // child > parent
  @Output() eventEmiterChild: EventEmitter<string> = new EventEmitter<string>();
  pushEventEmit() {
    this.eventEmiterChild.emit('my title with event emiter from child')
  }
}
