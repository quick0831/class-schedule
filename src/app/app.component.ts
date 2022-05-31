import { Component } from '@angular/core';

import { classes, table } from './customization';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  classes = classes;
  table = table;

  class_length: number[][] = [];

  constructor() {
    let a = Array.from(Array(7), () => new Array(5).fill(0));
    for(let i = 6; i > 0; i--){ // exclude first row
      for(let j = 0; j < 5; j++){
        if(this.table[i][j] === this.table[i-1][j]){
          a[i-1][j] = a[i][j] + 1;
          a[i][j] = -1;
        }
      }
    }
    this.class_length = a;
  }

  get_class(c: string): [string, string] {
    return this.classes[c];
  }

  get weekday(): number {
    return new Date().getDay()-1;
  }

  get class_num(): number {
    let i = ((): number => {
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
      return -2;
    })();
    while(i>=0 && this.class_length[i][this.weekday]==-1)
      i -= 1;
    return i;
  }

  get next_class_num(): number {
    let i = this.class_num + 1;
    if(i < 0)
      return -1;
    while(i<7 && this.class_length[i][this.weekday]==-1)
      i += 1;
    if(i == 7)
      return -1;
    return i;
  }

  get class_1(): [string, string] {
    let i = this.class_num;
    if(i < 0)
      return ["", ""];
    return this.get_class(this.table[i][this.weekday])
  }

  get class_2(): [string, string] {
    let i = this.next_class_num;
    if(i < 0)
      return ["", ""];
    return this.get_class(this.table[i][this.weekday])
  }
}
