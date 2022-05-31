import { Component, Input, OnInit } from '@angular/core';

import { weekdays } from '../customization';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss']
})
export class TimeTableComponent implements OnInit {

  weekdays = weekdays;

  @Input() table: (string)[][] = [];
  @Input() classes: { [key: string]: [string, string] } = {};
  @Input() class_length: number[][] = [];

  @Input() weekday = 0;
  @Input() class_num = 0;

  ngOnInit(): void {
  }

  get_class(c: string): [string, string] {
    return this.classes[c];
  }

}
