import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-water-tank-level',
  template: `
  <div class="tank">
    <div class="water" [style.height.%]="level"></div>
  </div>
  `,
  styles: [`
  .tank {
      width: 150px;
      height: 300px;
      border: 2px solid black;
      background: white;
      position: relative;
      display: inline-block;
      margin: 10px;
  }
  .tank .water {
      position: absolute;
      background: 	#1ca3ec;
      width: 100%;
      bottom: 0;
  }`]
})
export class WaterTankLevelComponent implements OnInit {

  @Input()
  level: number;

  constructor() { }

  ngOnInit(): void {
  }

}
