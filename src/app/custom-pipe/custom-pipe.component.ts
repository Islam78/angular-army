import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {
  imageUrl 
  DefaultImageUrl

  fakeData :any[]
  constructor() { }

  ngOnInit(): void {
    this.imageUrl = 'https://via.placeholder.com/270' // if i comet this default  will be work
    this.DefaultImageUrl = 'https://via.placeholder.com/150'

    this.fakeData = [
      {name:'islam', age:20, speed:34},
      {name:'islam', age:22, speed:37},
      {name:'islam', age:25, speed:40},
      {name:'islam', age:30, speed:45},
    ]

    setTimeout(() => {
      this.imageUrl = undefined


      this.fakeData.push({name:'islam', age:1, speed:1})
      console.log('pushed');
      
    }, 3000);
  }

}
