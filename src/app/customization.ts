// 週一到週五 文字顯示
export const weekdays = ["一", "二", "三", "四", "五"];

// 紀錄代號與課程資訊的對應
export const classes: { [key: string]: [string, string] } = {
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
  "pe": ["體育", "https://meet.google.com/fad-etxh-hag"],
  "geo": ["地理", "https://cloud.taivs.tp.edu.tw/moodle/mod/quiz/view.php?id=18012"]
};

// 用代號描述課表
export const table = [
  ["pro2", "pro1", "math", "pro1", "ele" ],
  ["pra1", "pro1", "pra3", "pro2", "ele" ],
  ["pra1", "math", "pra3", "pro2", "ele" ],
  ["pra1", "math", "pra3", "ch"  , "cl"  ],
  ["pra2", "ch"  , "pe"  , "eng" , "geo" ],
  ["pra2", "ch"  , "pe"  , "eng" , "geo" ],
  ["pra2", "eng" , "eng" , "math", "ch"  ]
];

// 計算節數用 (請填寫每節的下課時間)
export const table_time = [
  [ 9, 10], // 第一節下課
  [10, 10], // 第二節下課
  [11, 10],
  [12, 10],
  [14, 10],
  [15, 10],
  [16,  0] // 最後一節下課(放學)
];
