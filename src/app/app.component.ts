import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  class_1 = ["", ""];
  class_2 = ["", ""];

  classes = {
    "ch": ["國文", "https://meet.google.com/wwy-bzuu-hcx"],
    "eng": ["英文", "https://meet.google.com/bcv-xrwj-qze"],
    "math": ["數學", "https://meet.google.com/kfc-ohtx-dkz"],
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

  // use null as continuous class
  table = [
    ["pro2", "pro1", "math", "pro1", "ele" ],
    ["pra1",  null , "pra3", "pro2",  null ],
    [ null , "math",  null ,  null ,  null ],
    [ null ,  null ,  null , "ch"  , "cl"  ],
    ["pra2", "ch"  , "pe"  , "eng" , "geo" ],
    [ null ,  null ,  null ,  null ,  null ],
    [ null , "eng" , "eng" , "math", "ch"  ]
  ];

}
