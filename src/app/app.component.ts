import { Component, OnInit } from '@angular/core';


interface LineTable {
  monat: string;
  wochen: number[];
}

const Monaten: string[] = ["Januar","Februar","März","April",
                            "Mai","Juni","Juli","August","September","Oktober",
                          "November","Dezember"];
const weeklyHoursCurrYear: number[] = [40, 42, 38, 39, 40, 40, 41, 45, 90, 10, 41, 35, 41, 32, 41, 35, 41, 32, 41, 35, 41, 
  32, 40, 42, 38, 39, 40, 40, 41, 45, 90, 10, 41, 35, 41, 32, 41, 35, 41, 32, 41, 35, 41, 32, 45, 47, 37, 32]


  function CutArray(array: string | any[], size: number) {
    const length = array.length;
    // Größe des Ausgabe-Arrays voreinstellen, damit wir nicht pushen/vergrößern müssen
    const output = new Array(Math.ceil(length / size));
    let seekIndex = 0, outputIndex = 0;
    while (seekIndex < length) {
      // Verwendung von Slice() zur Unterteilung des Arrays
      output[outputIndex++] = array.slice(seekIndex, seekIndex += size);
    }
    return output;
  }

  const NewHours:number[][] = CutArray(weeklyHoursCurrYear,4)
  const lines: LineTable[] = [];
  let line: LineTable;

  for( let i = 0; i<NewHours.length; i++ ){
    line = {monat: Monaten[i], wochen: NewHours[i]};
    lines.push(line);
  }
 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title:string;
  lines: LineTable[];

  constructor(){
    this.title = 'Aufgabe';
    this.lines = lines;
 
  }


  ngOnInit(): void {}   

}
