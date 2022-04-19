import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss']
})
export class TimeTableComponent implements OnInit {

  weekdays = ["一", "二", "三", "四", "五"];

  @Input() table: (string)[][] = [];
  @Input() classes: { [key: string]: [string, string] } = {};
  @Input() class_length: number[][] = [];

  ngOnInit(): void {
  }

  get_class(c: string): [string, string] {
    return this.classes[c];
  }

  get weekday(): number {
    return new Date().getDay();
  }

  get class_num(): number {
    let d = new Date();
    let t = d.getHours() * 60 + d.getMinutes();
    if(t < 500) return -1;
    if(t < 550) return 0;
    if(t < 610) return 1;
    if(t < 670) return 2;
    if(t < 730) return 3;
    //if(t < 790) return -1; // noon break
    if(t < 840) return 4;
    if(t < 900) return 5;
    if(t < 960) return 6;
    return -1;
  }

}
