import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direcive',
  templateUrl: './direcive.component.html',
  styleUrls: ['./direcive.component.css']
})
export class DireciveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  colorArray = ['aqua', 'black', 'blue', 'fuchsia']
  trackByFun(index) {
    return index
  }
}
