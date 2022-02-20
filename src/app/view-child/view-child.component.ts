import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ItemChildComponent } from '../item-child/item-child.component';
import { ItemParentComponent } from '../item-parent/item-parent.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit {

  //  static: true  بقوله هاتها بدري عشان عاوزها لاكن لو فالس هيجيبها بعد مالصفحه تتعمل 
  @ViewChild(ItemChildComponent, { static: true }) viewChildComponent: ViewChildComponent;
  @ViewChildren(ItemParentComponent) viewChildern: QueryList<ItemParentComponent>
  constructor() { }
  ngOnInit(): void {
    console.log('on init', this.viewChildComponent);
  }
  ngAfterViewInit(): void {
    console.log('on after view init', this.viewChildern.toArray());
  }

}
