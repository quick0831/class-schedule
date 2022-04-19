import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  class_1 = ["", ""];
  class_2 = ["", ""];

  classes: { [key: string]: [string, string] } = {
    "ch": ["國文", "https://meet.google.com/wwy-bzuu-hcx"],
    "eng": ["英文", "https://meet.google.com/bcv-xrwj-qze"],
    "math": ["數學", "https://meet.google.com/err-jgos-xmg"],
    "pro1": ["感測器", "https://meet.google.com/pjc-yfzw-bea"],
    "pro2": ["介面電路原理", "https://meet.google.com/bqe-caat-edk"],
    "pra1": ["介面電路實習", "https://meet.google.com/pjc-yfzw-bea"],
    "pra2": ["專題製作", "https://meet.google.com/xpe-qfno-spq"],
    "pra3": ["智慧電子應用實習", "https://meet.google.com/mgf-rudw-umo"],
    "cl": ["班會", "https://meet.google.com/bqe-caat-edk"],
    "ele": ["基本電學", "https://meet.google.com/ncw-hxow-dpx"],
    "pe": ["體育", ""],
    "geo": ["地理", ""]
  };

  table = [
    ["pro2", "pro1", "math", "pro1", "ele" ],
    ["pra1", "pro1", "pra3", "pro2", "ele" ],
    ["pra1", "math", "pra3", "pro2", "ele" ],
    ["pra1", "math", "pra3", "ch"  , "cl"  ],
    ["pra2", "ch"  , "pe"  , "eng" , "geo" ],
    ["pra2", "ch"  , "pe"  , "eng" , "geo" ],
    ["pra2", "eng" , "eng" , "math", "ch"  ]
  ];

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
}
