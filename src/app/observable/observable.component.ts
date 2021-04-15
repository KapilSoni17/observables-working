import { Component, OnInit } from '@angular/core';
import { from, interval, Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  orderStatus: any;
  data1 : Observable<any> | undefined;
  msg1: number | undefined;
  constructor() { }

  ngOnInit(): void {

    const broadcast = interval(1000);
    broadcast.subscribe(res => {
      this.msg1 = res;
    })
this.data1 = new Observable ( observer =>{
  setTimeout(()=>{
    observer.next("in progress");},4000);

  setTimeout(()=>{
      observer.next("processing");},8000);

  setTimeout(()=>{
        observer.next("completed");},12000);
});
this.data1.subscribe(val=>{this.orderStatus=val;});

this.data1.subscribe(val2=>{
  console.log(this.orderStatus)
});



}}
