import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {

  date_string = "";
  time_string = "";

  @Input() class_1 = ["", ""];
  @Input() class_2 = ["", ""];

  update_clock(): void {
    let time = new Date();
    this.date_string = time.toLocaleDateString();
    this.time_string = time.toLocaleTimeString();
  }

  ngOnInit(): void {
    this.update_clock();
    setInterval(() => this.update_clock(), 1000);
  }

}
