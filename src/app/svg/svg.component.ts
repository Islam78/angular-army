import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent implements OnInit {
  fillColor = 'rgb(255,0,0)'
  constructor() { }

  ngOnInit(): void {
    console.log(this.fillColor);

  }
  ChangeColor() {
    console.log(this.fillColor);

    const x = Math.floor(Math.random() * 255),
      y = Math.floor(Math.random() * 255),
      z = Math.floor(Math.random() * 255);
      this.fillColor = `rgb(${x},${y},${z})`;
      console.log(this.fillColor);
      
  }

}
