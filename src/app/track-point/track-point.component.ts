import { Component, OnInit } from '@angular/core';
interface Student {
  id: number,
  name: string
}
@Component({
  selector: 'app-track-point',
  templateUrl: './track-point.component.html',
  styleUrls: ['./track-point.component.css']
})
export class TrackPointComponent implements OnInit {
  students: Array<Student> = []
  constructor() { }

  ngOnInit(): void {
    this.students = [
      { id: 1, name: 'islam' },
      { id: 2, name: 'mohmed' },
    ]
  }
  refresh() {
    this.students = [
      { id: 1, name: 'islam' },
      { id: 2, name: 'mohmed' },
      { id: 3, name: 'refresh' },
    ]
  }
  track(index: number, student: Student) {
    return student.id
  }

}
