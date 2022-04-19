import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  dd = 0;

  update_clock() {
    const now = new Date();
    const then = new Date(2022, 4-1, 30);
    const cal = (a: Date, b: Date) => {
      // Discard the time and time-zone information.
      const utc = (x: Date) => Date.UTC(x.getFullYear(), x.getMonth(), x.getDate());
      const _MS_PER_DAY = 1000 * 60 * 60 * 24;
      return Math.floor((utc(a)- utc(b)) / _MS_PER_DAY);
    }
    this.dd = cal(then, now);
  }

  ngOnInit(): void {
    this.update_clock();
    setInterval(() => this.update_clock(), 1000);
  }

}
