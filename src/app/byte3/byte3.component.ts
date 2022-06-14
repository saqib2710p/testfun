import { useAnimation } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-byte3',
  templateUrl: './byte3.component.html',
  styleUrls: ['./byte3.component.css']
})
export class Byte3Component implements OnInit {
@Input() greet:any;
@Output() newItemEvent = new EventEmitter<string>();

saq:string="usman";
  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
