import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {

  date_string = "";
  time_string = "";

  ngOnInit(): void {
    setInterval(() => {
      let time = new Date();
      this.date_string = time.toLocaleDateString();
      this.time_string = time.toLocaleTimeString();
    }, 1000);
  }

}
