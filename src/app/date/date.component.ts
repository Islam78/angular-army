import { Component, OnDestroy, OnInit } from '@angular/core';
import { registerLocaleData, formatDate } from '@angular/common';
import LangARISLAM from '@angular/common/locales/ar-EG';
// to rigister in my language 
registerLocaleData(LangARISLAM)
// to use observable
import { ajax } from 'rxjs/ajax'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit, OnDestroy {
  date = new Date()
  FormatDate = new Date()

  promisData
  PromisAsync: Promise<string>

  observableData: any
  subscrip: Subscription
  constructor() { }

  ngOnInit(): void {
    // date
    console.log(formatDate(this.date, 'd-MMMM-yyyy-EEEE-a-hh-m-s-z', 'en-US'));

    // promis
    this.getPromis().then((msg: string) => this.promisData = msg).catch(log => console.log('err'))
    this.PromisAsync = this.getPromis()

    // observable
    this.getDataObservable()
  }
  // promis
  getPromis() {
    return new Promise<string>((res, rej) => {
      setTimeout(() => {
        return res('resolve from promis')
      }, 3000);
      // rej('error')
    })
  }
  // observable
  getObservable() {
    // return ajax({
    //   url:'https://jsonplaceholder.typicode.com/todos',
    //   method:'GET'
    // })
    return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1')
  }
  getDataObservable() {
    this.subscrip = this.getObservable().subscribe((data: any) => {
      console.log(data);
      this.observableData = data
    })
  }
  ngOnDestroy(): void {
    this.subscrip.unsubscribe()
  }

}
