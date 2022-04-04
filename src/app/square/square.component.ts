//import { Component, OnInit } from '@angular/core';
//On Init is a lifecycle hook allowing you to run code on init
//remove for now
//import decorators
import { Component, Input} from '@angular/core';

// @ is a Typescript decorator
@Component({
  selector: 'app-square',  //name of component for html refs like <app-square>
  template: `
    <button nbButton  hero status="warning" *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'Isaac'">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == 'Colton'">{{ value }}</button>  `,
  styles: ['button { background-color: #800080; width: 100%; height: 100%; font-size: 25px !important; }']
})

//export class SquareComponent implements OnInit {
export class SquareComponent {

  //value gets passed from board component
  @Input() value?: 'Isaac' | 'Colton';  //@Input is a decorator
  }


